import { MongoClient } from 'mongodb';
import bcrypt from 'bcrypt';
import { jsPDF } from "jspdf";

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
      job_1,
      job_date_start_1,
      job_date_end_1,
      duty_1,
      duty_2,
      duty_3,
      duty_4,
      duty_5,
      job_2,
      job_date_start_2,
      job_date_end_2,
      job_3,
      job_date_start_3,
      job_date_end_3,
      job_4,
      job_date_start_4,
      job_date_end_4,
      job_5,
      job_date_start_5,
      job_date_end_5,
      skills,
      linkedin,
      twitter,
      github,
    } = req.body;

    console.log(first_name)

    // document to be inserted
    const entry = {
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
      job_1: job_1,
      job_date_start_1: job_date_start_1,
      job_date_end_1: job_date_end_1,
      duty_1: duty_1,
      duty_2: duty_2,
      duty_3: duty_3,
      duty_4: duty_4,
      duty_5: duty_5,
      job_2: job_2,
      job_date_start_2: job_date_start_2,
      job_date_end_2: job_date_end_2,
      job_3: job_3,
      job_date_start_3: job_date_start_3,
      job_date_end_3: job_date_end_3,
      job_4: job_4,
      job_date_start_4: job_date_start_4,
      job_date_end_4: job_date_end_4,
      job_5: job_5,
      job_date_start_5: job_date_start_5,
      job_date_end_5: job_date_end_5,
      skills: skills,
      linkedin: linkedin,
      twitter: twitter,
      github: github,
    };

    const result = await resume.insertOne(entry);

    return res.redirect('/user/resume-builder');

  }

}



export default handler;