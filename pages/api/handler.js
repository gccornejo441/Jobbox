import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const collection = process.env.MONGO_USER_COLLECTION;
const mongodb = process.env.MONGODB_DB;

// Creates a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const handler = async (req, res) => {
  // console.log("requested body: ", req.body)

  if (req.method === 'POST') {
    let {
      first_name,
      last_name,
      state,
      city,
      zip,
      email,
      phone,
      about_me,
      school_1,
      school_degree_1,
      school_1_start,
      school_1_end,
      school_2,
      school_degree_2,
      school_2_start,
      school_2_end,
      school_3,
      school_degree_3,
      school_3_start,
      school_3_end,
      job_name_1,
      job_title_1,
      job_date_start_1,
      job_date_end_1,
      job_1_duty,
      job_name_2,
      job_title_2,
      job_date_start_2,
      job_date_end_2,
      job_2_duty,
      job_name_3,
      job_title_3,
      job_date_start_3,
      job_date_end_3,
      job_3_duty,
      skills,
      linkedin,
      twitter,
      github,
      internship_1,
      internship_1_year,
      internship_2,
      internship_2_year,
      internship_3,
      internship_3_year,
      volunteer_1,
      volunteer_1_year,
      volunteer_2,
      volunteer_2_year,
      volunteer_3,
      volunteer_3_year,
      username,
      img,
    } = req.body


    // document to be inserted
    const entry = {
      first_name: first_name,
      last_name: last_name,
      state: state,
      city: city,
      zip: zip,
      email: email,
      phone: phone,
      about_me: about_me,
      school_1: {
        school: school_1,
        degree: school_degree_1,
        start: school_1_start,
        end: school_1_end,
      },
      school_2: {
        school: school_2,
        degree: school_degree_2,
        start: school_2_start,
        end: school_2_end,
      },
      school_3: {
        school: school_3,
        degree: school_degree_3,
        start: school_3_start,
        end: school_3_end,
      },
      job_1: {
        job_name_1: job_name_1,
        job_title_1: job_title_1,
        job_start: job_date_start_1,
        job_end: job_date_end_1,
        job_1_duty: job_1_duty,
      },
      job_2: {
        job_name_2: job_name_2,
        job_title_2: job_title_2,
        job_start: job_date_start_2,
        job_end: job_date_end_2,
        job_2_duty: job_2_duty,
      },
      job_3: {
        job_name_3: job_name_3,
        job_title_3: job_title_3,
        job_start: job_date_start_3,
        job_end: job_date_end_3,
        job_3_duty: job_3_duty,
      },
      skills: skills,
      linkedin: linkedin,
      twitter: twitter,
      github: github,
      internship: [
        {
          internship_1: internship_1,
          internship_year: internship_1_year
        },
        {
          internship_2: internship_2,
          internship_year: internship_2_year
        },
        {
          internship_3: internship_3,
          internship_year: internship_3_year
        },
      ],
      volunteer: [
        {
          volunteer_1: volunteer_1,
          volunteer_year: volunteer_1_year
        },
        {
          volunteer_2: volunteer_2,
          volunteer_year: volunteer_2_year
        },
        {
          volunteer_3: volunteer_3,
          volunteer_year: volunteer_3_year
        },
      ],
      username: username,
      image: img,
    };

    try {

      await client.connect();
      const database = client.db(mongodb);
      const resume = database.collection(collection);

      // This should only be the field & value found in both collections.
      const query = { username: req.body.username };

      // Searches for query.
      const resumeUser = await resume.findOne(query);
      console.log(entry);

      // Replacement document.
      const replacementDocument = entry;
      
      
      resumeUser === null ? (
        console.log(entry),
        await resume.insertOne(entry)
        ) : (
          await resume.replaceOne(query, replacementDocument)
      );

    } catch (error) {
      console.log(error);
    }

    return res.redirect('/user/profile')

  } else if (req.method == "GET") {
    res.redirect('/resume-builder');
  }
}


export default handler;