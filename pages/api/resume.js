import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URL;

// Creates a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const handler = async (req, res) => {
//   console.log("requested body: ", req.body)

    if (req.method === 'POST') {
      await client.connect();

      const database = client.db("moviedb");
      const resume = database.collection("resume_builder");
      // Query for a movie that has the title 'The Room'
      const query = { username: req.body.user };
      const options = {};
      const user = await resume.findOne(query, options);
      // since this method returns the matched document, not a cursor, print it directly
      console.log(user);
      await client.close();

      return res.redirect('/user/resume-builder');

    }

}



export default handler;