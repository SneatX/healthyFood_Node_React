const { ObjectId } = require("mongodb");
const ConnectToDatabase = require("../../infrastructure/database/mongoDB");

class Food{
    async findById (id) {
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('foods');
        const [res] = await collection.find({_id: new ObjectId(id)}).toArray();
        return res;
    }

    async getAllFoods (){
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

    async insert(userData){
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('foods');
        const res = await collection.insertMany([userData]);
        return res;
    }

    async findByName(name){
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

    //ESTO DEBE IR EN OTRO MODEL

    async getRatingByFoodIdUserId(foodId, userId){
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('ratings');
        const [res] = await collection.find({foodId: new ObjectId(foodId), userId: new ObjectId(userId)}).toArray();
        return res;
    }

    async insertRating(newRating){
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('ratings');
        const res = await collection.insertMany([newRating]);
        return res;
    }

    async deleteRatingById(id){
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('ratings');
        const res = await collection.deleteOne({_id: new ObjectId(id)});
        return res;
    }
}

module.exports = Food;