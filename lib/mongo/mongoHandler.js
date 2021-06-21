const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri = process.env.MONGODB_URL;
console.log(uri)

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();
    const database = client.db('moviedb');
    const users = database.collection('crm_users');
    

    console.log("Users in movie database", users);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);