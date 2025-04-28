const express = require("express");
const router = express.Router();
const { MongoClient } = require('mongodb');

const MONGODB_URI = 'mongodb://localhost:27017/smaple_data_clinicalSentix';

router.get("/", function (req, res) {
  res.status(200).send("API is operational");
});

router.get("/:drugname", async function (req, res) {
  try {
    const { drugname } = req.params;
    const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    const db = client.db();
    const collection = db.collection('drugs_review');
    const searchResults = await collection.find({ drugName: drugname }).toArray();
    console.log(collection)
    await client.close();
    res.status(200).json(searchResults);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

module.exports = router;
