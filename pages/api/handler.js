import { MongoClient } from 'mongodb';
import PDFDocument from 'pdfkit';
import fs from "fs";
import { connectToDatabase } from "../../util/mongodb";


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
      street: street,
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

    await client.connect();

    const database = client.db("moviedb");
    const resume = database.collection("resume_builder");

    const query = { username: req.body.username };

    const resumeUser = await resume.findOne(query);

    resumeUser === null ? (
      console.log(entry),
      await resume.insertOne(entry),
      res.redirect('/user/resume-builder')
    ) : (
      res.redirect('/user/profile')
    )

  } else if (req.method === 'GET') {
    // DB Connector
    const { db } = await connectToDatabase();
    const resume = await db
      .collection(process.env.MONGO_USER_COLLECTION)
      .find()
      .toArray();

    var doc = new PDFDocument();
    doc.pipe(fs.createWriteStream('_resume' + '.pdf'))

    // and some justified text wrapped into columns
    doc
      .fillColor('black')
      .font('Times-Bold', 16)
      .moveUp(1.6)
      .text(resume[0].first_name + " " + resume[0].last_name, {
        width: 412,
        align: 'center',
        indent: 30,
        columns: 1,
        height: 500,
        ellipsis: true
      })

    // and some justified text wrapped into columns
    doc
      .fillColor('black')
      .font('Times-Roman', 12)
      .moveDown()
      .moveUp()
      .text(resume[0].city + " " + resume[0].state + "," + " " + resume[0].zip, {
        width: 412,
        align: 'center',
        indent: 30,
        columns: 1,
        ellipsis: true
      })
      .text("Phone:" + " " + resume[0].phone + " " + "Email:" + " " + resume[0].email, {
        width: 412,
        align: 'center',
        indent: 30,
        columns: 1,
        ellipsis: true
      })
      .text("Portfolio:" + " " + "www." + resume[0].github, {
        width: 412,
        align: 'center',
        indent: 30,
        columns: 1,
        ellipsis: true
      })

    let box = { about: resume[0].about_me.replace(/\n/g, ' ') }
    // and some justified text wrapped into columns
    doc
      .fillColor('black')
      .font('Times-Bold', 12)
      .moveDown(1)
      .text("Summary of Qualifications:", {
        width: 412,
        align: 'left',
        indent: 0,
        columns: 1,
        height: 500,
        ellipsis: true
      })
      .font('Times-Roman', 12)
      .text(box.about, {
        width: 470,
        align: 'left'
      })

    doc
      .moveDown()
      .text(resume[0].skills[0] === undefined ? " " : resume[0].skills[0], { align: 'left' })
      .moveDown()
    doc.text(resume[0].skills[3] === undefined ? " " : resume[0].skills[3], { align: 'left' })
      .moveDown()
    doc.text(resume[0].skills[6] === undefined ? " " : resume[0].skills[6], { align: 'left' })

    doc
      .moveUp(5)
      .text(resume[0].skills[1] === undefined ? " " : resume[0].skills[1], { align: 'center' })
      .moveDown()
    doc.text(resume[0].skills[4] === undefined ? " " : resume[0].skills[4], { align: 'center' })
      .moveDown()
    doc.text(resume[0].skills[7] === undefined ? " " : resume[0].skills[7], { align: 'center' })

    doc
      .moveUp(5)
      .text(resume[0].skills[2] === undefined ? " " : resume[0].skills[2], { align: 'right' })
      .moveDown()
    doc.text(resume[0].skills[5] === undefined ? " " : resume[0].skills[5], { align: 'right' })
      .moveDown()
    doc.text(resume[0].skills[8] === undefined ? " " : resume[0].skills[8], { align: 'right' })


    doc
      .fillColor('black')
      .font('Times-Bold', 12)
      .moveDown(1)
      .text("Experience", {
        width: 412,
        align: 'left',
        indent: 0,
        columns: 1,
        height: 500,
        ellipsis: true
      })


    // Checks to if end data is available.
    let jobEnd = (resume[0].job_1.job_end === "" ? "Current" : resume[0].job_1.job_end.slice(0, 4))

    doc
      .fillColor('black')
      .font('Times-Bold', 12)
      .moveDown(1)
      .text(resume[0].job_title.job_1[0], {
        width: 412,
        align: 'left',
        indent: 0,
        columns: 1,
        height: 500,
        ellipsis: true
      })
      .moveUp(1)
      .font('Times-Italic', 12)
      .text(resume[0].job_1.job_start.slice(0, 4) + " " + "-" + " " + jobEnd, {
        align: 'right',
      })
    doc
      .fillColor('black')
      .font('Times-Italic', 12)
      .text(resume[0].job_title.job_1[1], {
        width: 412,
        align: 'left',
        indent: 0,
        columns: 1,
        height: 500,
        ellipsis: true
      })

    let myArrayOfItems = [
      resume[0].duties.duty_1 === null ? "" : resume[0].duties.duty_1[0],
      resume[0].duties.duty_2 === null ? "" : resume[0].duties.duty_2[0],
      resume[0].duties.duty_3 === null ? "" : resume[0].duties.duty_3[0],
      // resume[0].duties.duty_4 === null ? "" : typeof resume[0].duties.duty_4 === "string" ?  
      resume[0].duties.duty_5 === null ? "" : resume[0].duties.duty_5[0]
    ];

    doc
      .font('Times-Roman', 12)
      .moveDown()
      .list(myArrayOfItems, {
        bulletRadius: 2,
        width: 412,
        align: 'left',
        columns: 1,
        height: 500,
        ellipsis: true
      });

    doc
      .fillColor('black')
      .font('Times-Bold', 12)
      .moveDown(1)
      .text("Marine Corps Base Hawaii, Kaneohe Bay HI     2015-2019", {
        width: 412,
        align: 'left',
        indent: 0,
        columns: 1,
        height: 500,
        ellipsis: true
      })

    doc
      .fillColor('black')
      .font('Times-Italic', 12)
      .text("United States Marine Platoon Sergeant / Senior Manager", {
        width: 412,
        align: 'left',
        indent: 0,
        columns: 1,
        height: 500,
        ellipsis: true
      })

    doc
      .font('Times-Roman', 12)
      .moveDown()
      .list(myArrayOfItems, {
        bulletRadius: 2,
        width: 412,
        align: 'left',
        columns: 1,
        height: 500,
        ellipsis: true
      });

    doc
      .fillColor('black')
      .font('Times-Roman', 12)
      .moveDown()
      .text("Education", {
        width: 412,
        align: 'left',
        indent: 0,
        columns: 1,
        height: 500,
        ellipsis: true
      })

    let education = [
      'A.A., Liberal Arts: Science & Math, Coastline Community College',
      'B.A., Bachelor of Arts: Education Sciences, University of California, Irvine',
      'B.S., Bachelor of Science: Computer Science, Western Governors University'
    ];

    doc
      .list(education, {
        width: 412,
        align: 'left',
        indent: 15,
        columns: 1,
        height: 500,
        ellipsis: true
      })

    doc
      .moveUp(3)
      .text("2018-2017", { align: 'right' })
    doc.text("2020-2019", { align: 'right' })
    doc.text("2021-2022", { align: 'right' })


    doc.end();

    res.redirect('/user/profile')


  }
}



export default handler;