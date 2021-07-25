import PDFDocument from 'pdfkit';
import fs from "fs";
import { connectToDatabase } from "../../util/mongodb";
import blobStream from 'blob-stream';

const pdfBuilder = async (req, res) => {
    if (req.method === 'POST') {
        // DB Connector
        const { db } = await connectToDatabase();
        const resume = await db
        .collection(process.env.MONGO_USER_COLLECTION)
        .find()
        .toArray();
        
        let dbUser = { user:  resume.find((item) => item.username === req.body.username) };

    if (dbUser.user.username !== req.body.username) {
        res.redirect('/user/resume-builder');

     } else {
    const doc = new PDFDocument();



    // https://stackoverflow.com/questions/44731255/send-pdf-file-made-with-pdfkit-to-the-client-for-display/67017960#67017960
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `inline; filename=${dbUser.user.first_name}_resume.pdf`);

    doc.pipe(fs.createWriteStream(dbUser.user.first_name + '_resume' + '.pdf'))
    doc.pipe(res)


    // and some justified text wrapped into columns
    doc
      .fillColor('black')
      .font('Times-Bold', 16)
      .moveUp(1.6)
      .text(dbUser.user.first_name + " " + dbUser.user.last_name, {
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
      .text(dbUser.user.city + " " + dbUser.user.state + "," + " " + dbUser.user.zip, {
        width: 412,
        align: 'center',
        indent: 30,
        columns: 1,
        ellipsis: true
      })
      .text("Phone:" + " " + dbUser.user.phone + " " + "Email:" + " " + dbUser.user.email, {
        width: 412,
        align: 'center',
        indent: 30,
        columns: 1,
        ellipsis: true
      })
      .text("Portfolio:" + " " + "www." + dbUser.user.github, {
        width: 412,
        align: 'center',
        indent: 30,
        columns: 1,
        ellipsis: true
      })

    let box = { about: dbUser.user.about_me.replace(/\n/g, ' ') }
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

      if (dbUser.user.skills !== null ) {
        doc
          .moveDown()
          .text(dbUser.user.skills[0] === undefined ? " " : dbUser.user.skills[0], { align: 'left' })
          .moveDown()
        doc.text(dbUser.user.skills[3] === undefined ? " " : dbUser.user.skills[3], { align: 'left' })
          .moveDown()
        doc.text(dbUser.user.skills[6] === undefined ? " " : dbUser.user.skills[6], { align: 'left' })
    
        doc
          .moveUp(5)
          .text(dbUser.user.skills[1] === undefined ? " " : dbUser.user.skills[1], { align: 'center' })
          .moveDown()
        doc.text(dbUser.user.skills[4] === undefined ? " " : dbUser.user.skills[4], { align: 'center' })
          .moveDown()
        doc.text(dbUser.user.skills[7] === undefined ? " " : dbUser.user.skills[7], { align: 'center' })
    
        doc
          .moveUp(5)
          .text(dbUser.user.skills[2] === undefined ? " " : dbUser.user.skills[2], { align: 'right' })
          .moveDown()
        doc.text(dbUser.user.skills[5] === undefined ? " " : dbUser.user.skills[5], { align: 'right' })
          .moveDown()
        doc.text(dbUser.user.skills[8] === undefined ? " " : dbUser.user.skills[8], { align: 'right' })
      }


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
    let jobEndOne = (dbUser.user.job_1.job_end === "" ? "Current" : dbUser.user.job_1.job_end.slice(0, 4));

    doc
      .fillColor('black')
      .font('Times-Bold', 12)
      .moveDown(1)
      .text(dbUser.user.job_1.job_name_1, {
        width: 412,
        align: 'left',
        indent: 0,
        columns: 1,
        height: 500,
        ellipsis: true
      })
      .moveUp(1)
      .font('Times-Italic', 12)
      .text(dbUser.user.job_1.job_start.slice(0, 4) + " " + "-" + " " + jobEndOne, {
        align: 'right',
      })
    doc
      .fillColor('black')
      .font('Times-Italic', 12)
      .text(dbUser.user.job_1.job_title_1, {
        width: 412,
        align: 'left',
        indent: 0,
        columns: 1,
        height: 500,
        ellipsis: true
      })

    let jobDutiesOne = dbUser.user.job_1.job_1_duty === null ? false : dbUser.user.job_1.job_1_duty.map((item) => item.replace(/(\r\n|\n|\r)/gm, ""));

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
    let jobEndTwo = (dbUser.user.job_2.job_end === "" ? "Current" : dbUser.user.job_2.job_end.slice(0, 4))

    doc
      .fillColor('black')
      .font('Times-Bold', 12)
      .moveDown(1)
      .text(dbUser.user.job_2.job_name_2, {
        width: 412,
        align: 'left',
        indent: 0,
        columns: 1,
        height: 500,
        ellipsis: true
      })
      .moveUp(1)
      .font('Times-Italic', 12)
      .text(dbUser.user.job_2.job_start.slice(0, 4) + " " + "-" + " " + jobEndTwo, {
        align: 'right',
      })

    doc
      .fillColor('black')
      .font('Times-Italic', 12)
      .text(dbUser.user.job_2.job_title_2, {
        width: 412,
        align: 'left',
        indent: 0,
        columns: 1,
        height: 500,
        ellipsis: true
      })

    let jobDutiesTwo = dbUser.user.job_2.job_2_duty === null ? false : dbUser.user.job_2.job_2_duty.map((item) => item.replace(/(\r\n|\n|\r)/gm, ""));
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
      `${dbUser.user.school_1.degree}` + ":" + " " + `${dbUser.user.school_1.school}`,
      `${dbUser.user.school_2.degree}` + ":" + " " + `${dbUser.user.school_2.school}`,
      `${dbUser.user.school_3.degree}` + ":" + " " + `${dbUser.user.school_3.school}`
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
      .text(`${dbUser.user.school_1.start === "" && dbUser.user.school_1.end === "" ? "" : dbUser.user.school_1.start === "" ? "Current" : dbUser.user.school_1.start.slice(0, 4) + " " + "-" + " "}` + `${dbUser.user.school_1.start === "" && dbUser.user.school_1.end === "" ? false : dbUser.user.school_1.end === "" ? "Current" : dbUser.user.school_1.end.slice(0, 4)}`, { align: 'right' })
    doc.text(`${dbUser.user.school_2.start === "" && dbUser.user.school_2.end === "" ? "" : dbUser.user.school_2.start === "" ? "Current" : dbUser.user.school_2.start.slice(0, 4) + " " + "-" + " "}` + `${dbUser.user.school_2.start === "" && dbUser.user.school_2.end === "" ? false : dbUser.user.school_2.end === "" ? "Current" : dbUser.user.school_2.end.slice(0, 4)}`, { align: 'right' })
    doc.text(`${dbUser.user.school_3.start === "" && dbUser.user.school_3.end === "" ? "" : dbUser.user.school_3.start === "" ? "Current" : dbUser.user.school_3.start.slice(0, 4) + " " + "-" + " "}` + `${dbUser.user.school_3.start === "" && dbUser.user.school_3.end === "" ? false : dbUser.user.school_3.end === "" ? "Current" : dbUser.user.school_3.end.slice(0, 4)}`, { align: 'right' })

    doc.end();

    // res.redirect('/user/profile')
    }
  }
}

export default pdfBuilder;