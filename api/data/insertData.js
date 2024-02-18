const fs = require('fs');
const { MongoClient } = require('mongodb');
const csvParse = require('csv-parse');

const MONGODB_URI = 'mongodb://localhost:27017/smaple_data_clinicalSentix';
const CSV_FILE_PATH = './drugsComTest_raw.csv';

async function insertData() {
  try {
    const fileContent = fs.readFileSync(CSV_FILE_PATH, 'utf8');
    const records = await csvParse(fileContent, { columns: true });
    const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    const db = client.db();
    const collection = db.collection('drugs_review');
    await collection.insertMany(records);
    await client.close();
    console.log('Data inserted successfully.');
  } catch (error) {
    console.error('Error inserting data:', error);
  }
}

insertData();
