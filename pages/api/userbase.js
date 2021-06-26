import { MongoClient } from 'mongodb';
import bcrypt from 'bcrypt';

const uri = process.env.MONGODB_URL;

// Creates a new MongoClient
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Pulling mongodb user info
async function login(email, password, callback) {      

    try {
      await client.connect();

      const db = client.db('moviedb');
      const users = db.collection('cms_users');
      
      const findResults = await users.findOne({ email: email }, {});
      try {
        console.log(findResults)
        await bcrypt.compare(password, findResults.password);
        callback(null, {
          user_id: findResults._id.toString(),
          nickname: findResults.nickname,
          email: findResults.email
        })

      } finally {
        client.close();
      }

      console.log('--------------->found results: ', findResults);
    } finally {
      await client.close();
    }
}
login().catch(console.dir);


    



      // bcrypt.compare(password, user.password, function (err, isValid) {
      //   client.close();

      //   if (err || !isValid) return callback(err || new WrongUsernameOrPasswordError(email));

      //   return callback(null, {
      //       user_id: user._id.toString(),
      //       nickname: user.nickname,
      //       email: user.email
      //     });
      // });

 
const handler = async (req, res) => {
    if (req.method == 'GET') {
      console.log("req.body: ", req.body.username, req.body.password);

        // async function run() {
        //     try {
        //       await client.connect();
        //       const database = client.db("moviedb");
        //       const newUsers = database.collection("cms_users");
        //       // object containing request
        //       const doc = req.body;
        //       const result = await newUsers.insertOne(doc);
        //       console.log(
        //         `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
        //       );
        //       return res.redirect('/dashboard')
        //     } finally {
        //       await client.close();
        //     }
        //   }
        //   run().catch(console.dir);
    } else if (req.method == "POST") {
      console.log("req.body: ", req.body);
      login(req.body.username, req.body.password);
    }
}


export default handler;