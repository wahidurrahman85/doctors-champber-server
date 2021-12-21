const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
const cors = require("cors");

require("dotenv").config();
const port = 5000;

//Midle ware
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://doctors-chamber-server:ihMNe1fx7NG7jJaG@cluster0.ccrmd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  console.log("hitting the database");
  // perform actions on the collection object
  client.close();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Doctorr's Chamber is listening at :${port}`);
});
