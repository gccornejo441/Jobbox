import { MongoClient } from 'mongodb';
import PDFDocument from 'pdfkit';
import fs from "fs";

// create a document and pipe to a blob




const uri = process.env.MONGODB_URI;

// Creates a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const handler = async (req, res) => {
  console.log("requested body: ", req.body)
  
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
      img,
    } = req.body
    var doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(first_name + '_resume' + '.pdf'))

    doc.lineCap('butt')
      .moveTo(50, 20)
      .rect(0, 0, 620, 150)
      .fill('#283b52')

    // and some justified text wrapped into columns
    doc
      .fillColor('white')
      .font('Helvetica-Bold', 16)
      .moveUp(1.6)
      .text(first_name + " " + last_name, {
        width: 412,
        align: 'center',
        indent: 30,
        columns: 1,
        height: 500,
        ellipsis: true
      });

    // and some justified text wrapped into columns
    doc
      .fillColor('white')
      .font('Helvetica', 12)
      .moveDown()
      .moveUp()
      .text(city + " " + state, {
        width: 412,
        align: 'center',
        indent: 30,
        columns: 1,
        ellipsis: true
      })
      .text("Phone: " + phone + " " + "Email: " + email, {
        width: 412,
        align: 'center',
        indent: 30,
        columns: 1,
        ellipsis: true
       })
      .text("Github: " + github, {
        width: 412,
        align: 'center',
        indent: 30,
        columns: 1,
        ellipsis: true
      })


    doc.end();


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
        job_start: job_date_start_1,
        job_end: job_date_end_1,
      },
      job_2: {
        job_start: job_date_start_2,
        job_end: job_date_end_2
      },
      job_3: {
        job_start: job_date_start_3,
        job_end: job_date_end_3
      },
      job_4: {
        job_start: job_date_start_4,
        job_end: job_date_end_4
      },
      job_5: {
        job_start: job_date_start_5,
        job_end: job_date_end_5
      },
      job_title: {
        job_1: job_1,
        job_2: job_2,
        job_3: job_3,
        job_4: job_4,
        job_5: job_5
      },
      duties: {
        duty_1: duty_1,
        duty_2: duty_2,
        duty_3: duty_3,
        duty_4: duty_4,
        duty_5: duty_5,
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