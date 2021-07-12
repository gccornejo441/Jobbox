import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

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
      street,
      city,
      state,
      zip,
      email,
      phone,
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
    } = req.body

    // document to be inserted
    const entry = {
      first_name: first_name,
      last_name: last_name,
      street: street,
      city: city,
      state: state,
      zip: zip,
      email: email,
      phone: phone,
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
        job: {
          job_employer: job_1[0],
          job_position: job_1[1],
        },
        job_start: job_date_start_1,
        job_end: job_date_end_1,
        duties: {
          duty: duty_1[0],
          duty: duty_2[0],
          duty: duty_3[0],
          duty: duty_4[0],
          duty: duty_5[0],
        },
      },
      job_2: {
        job: {
          job_employer: job_2[0],
          job_position: job_2[1],
        },
        job_start: job_date_start_2,
        job_end: job_date_end_2,
        duties: {
          duty: duty_1[1],
          duty: duty_2[1],
          duty: duty_3[1],
          duty: duty_4[1],
          duty: duty_5[1],
        },
      },
      job_3: {
        job: {
          job_employer: job_3[0],
          job_position: job_3[1],
        },
        job_start: job_date_start_3,
        job_end: job_date_end_3,
        duties: {
          duty: duty_1[2],
          duty: duty_2[2],
          duty: duty_3[2],
          duty: duty_4[2],
          duty: duty_5[2],
        },
      },
      job_4: {
        job: {
          job_employer: job_4[0],
          job_position: job_4[1],
        },
        job_start: job_date_start_4,
        job_end: job_date_end_4,
        duties: {
          duty: duty_1[3],
          duty: duty_2[3],
          duty: duty_3[3],
          duty: duty_4[3],
          duty: duty_5[3],
        },
      },
      job_5: {
        job: {
          job_employer: job_5[0],
          job_position: job_5[1],
        },
        job_start: job_date_start_5,
        job_end: job_date_end_5,
        duties: {
          duty: duty_1[4],
          duty: duty_2[4],
          duty: duty_3[4],
          duty: duty_4[4],
          duty: duty_5[4],
        }
      },
      skills: skills,
      linkedin: linkedin,
      twitter: twitter,
      github: github,
      internship_1: internship_1,
      internship_1_year: internship_1_year,
      internship_2: internship_2,
      internship_2_year: internship_2_year,
      internship_3: internship_3,
      internship_3_year: internship_3_year,
      volunteer_1: volunteer_1,
      volunteer_1_year: volunteer_1_year,
      volunteer_2: volunteer_2,
      volunteer_2_year: volunteer_2_year,
      volunteer_3: volunteer_3,
      volunteer_3_year: volunteer_3_year,
      username: username,
    };

    await client.connect();

    const database = client.db("moviedb");
    const resume = database.collection("resume_builder");

    const query = { username: req.body.username };

    const resumeUser = await resume.findOne(query);

    resumeUser === null ? (
      await resume.insertOne(entry),
      res.redirect('/user/resume-builder')
    ) : (
      res.redirect('/user/profile')
    )
  }
}



export default handler;