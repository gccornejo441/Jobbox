import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const collection = 'cms_users';
const mongodb = process.env.MONGODB_DB;

// Creates a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const deleteUser = async (req, res) => {
  // console.log("requested body: ", req.body)
  console.log(req.body)

  if (req.method === 'POST') {
    let { username } = req.body;

    await client.connect();
    const database = client.db(mongodb);
    const user = database.collection(collection);

    const query = { email: username };

    const result = await user.deleteOne(query);

    if (result.deletedCount === 1) {
      console.dir("Successfully deleted one document.");
      res.redirect('/api/auth/logout');
    } else {
      console.log("No documents matched the query. Deleted 0 documents.");
    }
  }
}

export default deleteUser;