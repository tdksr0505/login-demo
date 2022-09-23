const express = require("express");
const app = express();
const PORT = 5000;
const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:5000/db";

const client = new MongoClient(url);
client.connect();
const db = client.db("login_demo");
const database = client.db("login_demo");
const members = database.collection("member");
const query = async (acc) => {
  const member = await members.findOne({ account: acc });
  return member;
};

app.use(express.json());

let result = query("zzz");
console.log(`result`, result);

app.get("/", function (req, res) {
  // do something
  res.send("Hello World!");
});

app.post("/login", function (req, res) {
  // do something
  console.log(req.body);
  res.send({ code: "1" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
