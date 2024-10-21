const { ObjectId } = require("mongodb");
const ConnectToDatabase = require("../../infrastructure/database/mongoDB");

class Food {
    async findById(id) {
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('foods');
        const [res] = await collection.find({ _id: new ObjectId(id) }).toArray();
        return res;
    }

    async getAllFoods() {
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('foods');
        const res = await collection.find().toArray();
        return res;
    }

    async aggregate(data) {
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('foods');
        const res = await collection.aggregate([...data]).toArray();
        return res;
    }

    async insert(userData) {
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('foods');
        const res = await collection.insertMany([userData]);
        return res;
    }

    async findByName(name) {
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('foods');
        const [res] = await collection.find({ "name": { "$regex": `(?i)${name}` } }).toArray();
        return res;
    }
    async updateFood(id, updateData) {
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('foods');
        const res = await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: updateData }
        );
        return res;
    }

    async newFoodRating(foodId, newStar) {
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('foods');
        const res = await collection.aggregate([
            {
                $match: { _id: new ObjectId(foodId) }
            },
            {
                $set: {
                    ratings: {
                        $concatArrays: [
                            "$ratings",
                            [{ $literal: newStar }]
                        ]
                    }
                }
            },
            {
                $set: {
                    average: {
                        $avg: {
                            $concatArrays: [
                                "$ratings",
                                [newStar]
                            ]
                        }
                    }
                }
            }
        ]).toArray()
        return res;
    }

    async updateFoodRating(foodId, oldStar, newStar) {
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('foods');
        const res = await collection.aggregate([
            {
                $match: { _id: new ObjectId(foodId) }
            },
            {
                $set: {
                    ratings: {
                        $let: {
                            vars: {
                                index: { $indexOfArray: ["$ratings", oldStar] }
                            },
                            in: {
                                $cond: {
                                    if: { $ne: ["$$index", -1] },
                                    then: {
                                        $concatArrays: [
                                            { $slice: ["$ratings", "$$index"] },
                                            { $slice: ["$ratings", { $add: ["$$index", 1] }, { $size: "$ratings" }] }
                                        ]
                                    },
                                    else: "$ratings"
                                }
                            }
                        }
                    }
                }
            },
            {
                $set: {
                    ratings: {
                        $concatArrays: [
                            "$ratings",
                            [newStar]
                        ]
                    }
                }
            },
            {
                $set: {
                    average: {
                        $avg: "$ratings"
                    }
                }
            }
        ]).toArray();
        return res;
    }
}

module.exports = Food;