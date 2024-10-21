const { ObjectId } = require("mongodb");
const ConnectToDatabase = require("../../infrastructure/database/mongoDB");

class Rating {
    async findById(id) {
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('ratings');
        const [res] = await collection.find({ _id: new ObjectId(id) }).toArray();
        return res;
    }

    async getAllRatings() {
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('ratings');
        const res = await collection.find().toArray();
        return res;
    }

    async insert(ratingData) {
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('ratings');
        const res = await collection.insertMany([ratingData]);
        return res;
    }

    async getRatingByFoodIdUserId(foodId, userId) {
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('ratings');
        const [res] = await collection.find({ foodId: new ObjectId(foodId), userId: new ObjectId(userId) }).toArray();
        return res;
    }

    async insertRating(newRating) {
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('ratings');
        const res = await collection.insertMany([newRating]);
        return res;
    }

    async deleteRatingById(id) {
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('ratings');
        const res = await collection.deleteOne({ _id: new ObjectId(id) });
        return res;
    }

    async aggregate(data) {
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('ratings');
        const res = await collection.aggregate([...data]).toArray();
        return res;
    }
}

module.exports = Rating;