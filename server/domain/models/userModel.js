const { ObjectId } = require("mongodb");
const ConnectToDatabase = require("../../infrastructure/database/mongodb");

class User{
    async findById (id) {
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('cliente');
        const [res] = await collection.find({_id: new ObjectId(id)}).toArray();
        return res;
    }
    
    async aggregate(data) {
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('cliente');
        const res = await collection.aggregate([...data]).toArray();
        return res;
    }

    async insert(userData){
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('cliente');
        const res = await collection.insertMany([userData]);
        return res;
    }

    async findByIdAndUpdate(id, updateData, upsert){
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('cliente');
        const res = await collection.updateOne({ _id: new ObjectId(id) }, { $set: updateData }, upsert);
        return res;
    }

    async findByIdAndDelete(id){
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('cliente');
        const res = await collection.deleteMany({ _id: new ObjectId(id) });
        return res;
    }
    
}

module.exports = User;