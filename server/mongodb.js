const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

module.exports = class Mongodb {
  constructor(dbName) {
    this.client = new MongoClient(url);
    this.dbName = dbName;
    this.db = this.client.db(dbName);
  }

  async start() {
    await this.client.connect();
    this.db = this.client.db(this.dbName);
  }

  async find(coll, filter) {
    const collection = this.db.collection(coll);
    const result = await collection.find(filter).toArray();
    return result;
  }

  async insert(coll, data) {
    const collection = this.db.collection(coll);
    await collection.insertOne(data);
  }
};
