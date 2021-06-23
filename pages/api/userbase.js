import { MongoClient } from 'mongodb';
const AuthenticationClient = require('auth0').AuthenticationClient;

// Creates a new ClientID
const auth0 = new AuthenticationClient({
  domain: '{YOUR_ACCOUNT}.auth0.com',
  clientId: '{OPTIONAL_CLIENT_ID}'
});

const uri = process.env.MONGODB_URL;

// Creates a new MongoClient
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const handler = async (req, res) => {
    if (req.method == 'POST') {
        async function run() {
            try {
              await client.connect();
              const database = client.db("moviedb");
              const newUsers = database.collection("cms_users");
              // object containing request
              const doc = req.body;
              const result = await newUsers.insertOne(doc);
              console.log(
                `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
              );
              return res.redirect('/dashboard')
            } finally {
              await client.close();
            }
          }
          run().catch(console.dir);
    } else if (req.method == "GET") {

    }
}


export default handler;