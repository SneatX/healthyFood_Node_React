const { ObjectId } = require("mongodb");
const ConnectToDatabase = require("../../infrastructure/database/mongoDB");

class Food{
    async findById (id) {
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('foods');
        const [res] = await collection.find({_id: new ObjectId(id)}).toArray();
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
}

module.exports = Food;