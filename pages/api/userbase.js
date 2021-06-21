// const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGODB_URL;
import { MongoClient } from 'mongodb';

// Create a new MongoClient
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const handler = async (req, res) => {
    console.log("somemmmmmmmmmmmmmmmmmmmmmmmesage")
    if (req.method == 'POST') {
        console.log(req.body)
        return res.redirect('/dashboard')
    }
}

// async function run() {
//     try {
//       await client.connect();
//       const database = client.db("moviedb");
//       const movies = database.collection("crm_users");
//       // create a document to be inserted
//       const doc = { name: "Gabriel", town: "Corona" };
//       const result = await movies.insertOne(doc);
//       console.log(
//         `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
//       );
//     } finally {
//       await client.close();
//     }
//   }
//   run().catch(console.dir);

export default handler;