import { MongoClient } from 'mongodb';
import bcrypt from 'bcrypt';

const uri = process.env.MONGODB_URL;

// Creates a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const handler = async (req, res) => {
  console.log("requested body: ", req.body)

  if (req.method === 'POST') {
      await client.connect();

      const database = client.db("moviedb");
      const resume = database.collection("resume_builder");

      let {
        first_name,
        last_name,
        street,
        city,
        state,
        zip,
        email,
        school_1,
        school_1_start,
        school_1_end,
        school_2,
        school_2_start,
        school_2_end,
        school_3,
        school_3_start,
        school_3_end,
       } = req.body;

      console.log(first_name)
      
      // document to be inserted
      const doc = {
        first_name: first_name,
        last_name: last_name,
        street: street,
        city: city,
        state: state,
        zip: zip,
        email: email,
        school_1: school_1,
        school_1_start: school_1_start,
        school_1_end: school_1_end,
        school_2: school_2,
        school_2_start: school_2_start,
        school_2_end: school_2_end,
        school_3: school_3,
        school_3_start: school_3_start,
        school_3_end: school_3_end,
      };

      const result = await resume.insertOne(doc);


     return res.redirect('/dashboard');

  }

}



export default handler;