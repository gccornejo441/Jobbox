import PDFDocument from 'pdfkit';
import fs from "fs";
import { connectToDatabase } from "../../util/mongodb";

const apiBulder = async (req, res) => {
    if (req.method === 'POST') {
        // DB Connector
        const { db } = await connectToDatabase();
        const resume = await db
        .collection(process.env.MONGO_USER_COLLECTION)
        .find()
        .toArray();
        
        let dbUser = { username:  resume.map((item) => item.username).toString() };

    if (dbUser.username !== req.body.username) {
        console.log('HARD FORK');
    } else {
        
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

    // First job entry.

    // Checks to if end data is available.
    let jobEndOne = (resume[0].job_1.job_end === "" ? "Current" : resume[0].job_1.job_end.slice(0, 4));

    doc
      .fillColor('black')
      .font('Times-Bold', 12)
      .moveDown(1)
      .text(resume[0].job_1.job_name_1, {
        width: 412,
        align: 'left',
        indent: 0,
        columns: 1,
        height: 500,
        ellipsis: true
      })
      .moveUp(1)
      .font('Times-Italic', 12)
      .text(resume[0].job_1.job_start.slice(0, 4) + " " + "-" + " " + jobEndOne, {
        align: 'right',
      })
    doc
      .fillColor('black')
      .font('Times-Italic', 12)
      .text(resume[0].job_1.job_title_1, {
        width: 412,
        align: 'left',
        indent: 0,
        columns: 1,
        height: 500,
        ellipsis: true
      })

    let jobDutiesOne = resume[0].job_1.job_1_duty === "" ? false : resume[0].job_1.job_1_duty.map((item) => item.replace(/(\r\n|\n|\r)/gm, ""));

    doc
      .font('Times-Roman', 12)
      .moveDown()
      .list(jobDutiesOne, {
        bulletRadius: 2,
        width: 412,
        align: 'left',
        columns: 1,
        height: 500,
        ellipsis: true
      });

    // Second job entry
    // Checks to if end data is available.
    let jobEndTwo = (resume[0].job_2.job_end === "" ? "Current" : resume[0].job_2.job_end.slice(0, 4))

    doc
      .fillColor('black')
      .font('Times-Bold', 12)
      .moveDown(1)
      .text(resume[0].job_2.job_name_2, {
        width: 412,
        align: 'left',
        indent: 0,
        columns: 1,
        height: 500,
        ellipsis: true
      })
      .moveUp(1)
      .font('Times-Italic', 12)
      .text(resume[0].job_2.job_start.slice(0, 4) + " " + "-" + " " + jobEndTwo, {
        align: 'right',
      })

    doc
      .fillColor('black')
      .font('Times-Italic', 12)
      .text(resume[0].job_2.job_title_2, {
        width: 412,
        align: 'left',
        indent: 0,
        columns: 1,
        height: 500,
        ellipsis: true
      })

    let jobDutiesTwo = resume[0].job_2.job_2_duty === "" ? false : resume[0].job_2.job_2_duty.map((item) => item.replace(/(\r\n|\n|\r)/gm, ""));
    doc
      .font('Times-Roman', 12)
      .moveDown()
      .list(jobDutiesTwo, {
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
      `${resume[0].school_1.degree}` + ":" + " " + `${resume[0].school_1.school}`,
      `${resume[0].school_2.degree}` + ":" + " " + `${resume[0].school_2.school}`,
      `${resume[0].school_3.degree}` + ":" + " " + `${resume[0].school_3.school}`
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
      .text(`${resume[0].school_1.start === "" && resume[0].school_1.end === "" ? false : resume[0].school_1.start === "" ? "Current" : resume[0].school_1.start.slice(0, 4) + " " + "-" + " "}` + `${resume[0].school_1.start === "" && resume[0].school_1.end === "" ? false : resume[0].school_1.end === "" ? "Current" : resume[0].school_1.end.slice(0, 4)}`, { align: 'right' })
    doc.text(`${resume[0].school_2.start === "" && resume[0].school_2.end === "" ? false : resume[0].school_2.start === "" ? "Current" : resume[0].school_2.start.slice(0, 4) + " " + "-" + " "}` + `${resume[0].school_2.start === "" && resume[0].school_2.end === "" ? false : resume[0].school_2.end === "" ? "Current" : resume[0].school_2.end.slice(0, 4)}`, { align: 'right' })
    doc.text(`${resume[0].school_3.start === "" && resume[0].school_3.end === "" ? false : resume[0].school_3.start === "" ? "Current" : resume[0].school_3.start.slice(0, 4) + " " + "-" + " "}` + `${resume[0].school_3.start === "" && resume[0].school_3.end === "" ? false : resume[0].school_3.end === "" ? "Current" : resume[0].school_3.end.slice(0, 4)}`, { align: 'right' })


    doc.end();
    }

    res.redirect('/user/profile')

  }
}

export default apiBulder;