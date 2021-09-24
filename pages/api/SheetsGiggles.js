import PDFDocument from 'pdfkit';
import fs from "fs";
import { connectToDatabase } from "../../util/mongodb";

const SheetsGiggles = async (req, res) => {
  if (req.method === 'POST') {
    // DB Connector
    const { db } = await connectToDatabase();
    const resume = await db
      .collection(process.env.MONGO_USER_COLLECTION)
      .find()
      .toArray();

    let dbUser = { user: resume.find((item) => item.username === req.body.username) };

    if (dbUser.user == undefined) {
      res.redirect('/user/profile');

    } else {
      if (dbUser.user.username !== req.body.username) {
        res.redirect('/user/v2/pro-builder');

      } else {
        const doc = new PDFDocument();

        // https://stackoverflow.com/questions/44731255/send-pdf-file-made-with-pdfkit-to-the-client-for-display/67017960#67017960
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", `inline; filename=${dbUser.user.first_name}_resume.pdf`);

        doc.pipe(res)
        let { phone, email, city, state } = dbUser.user;

        doc
          .fillColor('black')
          .font('Times-Roman', 14)
          .moveUp(1.6)
          .text(email + " " + phone + "  " + city + ", " + state, 35, 75, {
            width: 512,
            indent: 0,
            columns: 1,
            height: 500,
            ellipsis: true
          })

        doc
          .fillColor('black')
          .font('Times-Bold', 26)
          .text(dbUser.user.first_name + " " + dbUser.user.last_name, 35, 50, {
            width: 512,
            indent: 0,
            columns: 1,
            height: 500,
            ellipsis: true
          })

        // LABEL DO NOT REMOVE
        doc
          .fillColor('black')
          .font('Times-Roman', 12)
          .text('WORK EXPERIENCE', 35, 110, {
            align: 'left',
            width: 512,
            indent: 0,
            columns: 1,
            height: 500,
            ellipsis: true
          })

        // LABEL DO NOT REMOVE
        doc
          .text('___________________________________________________________________________________________', 35, 80, {
            align: 'middle',
            width: 712,
            indent: 0,
            columns: 1,
            height: 500,
            ellipsis: true
          })
        // LABEL DO NOT REMOVE
        doc
          .text('___________________________________________________________________________________________', 35, 110, {
            align: 'middle',
            width: 712,
            indent: 0,
            columns: 1,
            height: 500,
            ellipsis: true
          })

        // First job entry.
        let { job_1 } = dbUser.user;
        // Checks to if end data is available.
        let jobEndOne = (job_1.job_name_1 == "" ? "" : job_1.job_end === "" ? " " + "-" + " " + "Current" : " " + "-" + " " + job_1.job_end.slice(0, 4));


        doc
          .fillColor('black')
          .font('Times-Bold', 12)
          .text('Sheets & Giggles', 35, 135, {
            align: 'left',
            indent: 0,
            columns: 1,
            height: 500,
            ellipsis: true
          })

        doc
          .fillColor('black')
          .font('Times-Italic', 12)
          .text('Founder & CEO', 35, 150, {
            align: 'left',
            indent: 0,
            columns: 1,
            height: 500,
            ellipsis: true
          })

        doc
          .fillColor('black')
          .font('Times-Bold', 12)
          .text(jobEndOne, 90, 135, {
            align: 'right',
            width: 485,
            indent: 0,
            columns: 1,
            height: 500,
            ellipsis: true
          })

        doc
          .fillColor('black')
          .font('Times-Italic', 12)
          .text('Denver, CO', 90, 150, {
            align: 'right',
            width: 485,
            indent: 0,
            columns: 1,
            height: 500,
            ellipsis: true
          })

        let firstStr = "S&G is a pun-based, sustainable bedding empire making cooling eucalyptus lyocell sheets (SheetsGiggles.com)."
        let secondStr = "As Founder & CEO, I oversee our core strategies, product roadmap, ops, marketing, and fundraising."
        let thirdStr = "Core responsibility #3. Pretend this is where they stop reading your resume. Whether Work or Education is your top section, the first 3 things they see better be your most impressive stuff, period.";
        let fourthStr = "Core redsponsibility #4. Core responsibility #3. Pretend this is where they stop reading your resume. Whether Work or Education is your top section, the first 3 things they see better be your most impressive stuff, period. Bullets #1 and #2 are for high-level descriptions of the company and/or your role.";

        doc
          .fillColor('black')
          .font('Times-Roman', 12)
          .list([firstStr, secondStr, thirdStr, fourthStr], 35, 170, {
            align: 'left',
            width: 550,
            columns: 1,
            textIndent: 20
          })

        doc
          .fillColor('black')
          .moveDown(5)
          .font('Times-Bold', 12)
          .text('Company Name', 35, 285, {
            align: 'left',
            indent: 0,
            columns: 1,
            height: 500,
            ellipsis: true
          })

        doc
          .fillColor('black')
          .font('Times-Italic', 12)
          .text('Founder & CEO', 35, 300, {
            align: 'left',
            indent: 0,
            columns: 1,
            height: 500,
            ellipsis: true
          })

        doc
          .fillColor('black')
          .font('Times-Bold', 12)
          .text('Oct. 2017 – Present', 90, 285, {
            align: 'right',
            width: 485,
            indent: 0,
            columns: 1,
            height: 500,
            ellipsis: true
          })

        doc
          .fillColor('black')
          .font('Times-Italic', 12)
          .text('Denver, CO', 90, 300, {
            align: 'right',
            width: 485,
            indent: 0,
            columns: 1,
            height: 500,
            ellipsis: true
          })

        doc
          .fillColor('black')
          .font('Times-Roman', 12)
          .list([firstStr, secondStr, thirdStr, fourthStr], 35, 320, {
            align: 'left',
            width: 550,
            columns: 1,
            textIndent: 20
          })
        // THIRD DUTY
        doc
          .fillColor('black')
          .moveDown(5)
          .font('Times-Bold', 12)
          .text('Company Name', 35, 440, {
            align: 'left',
            indent: 0,
            columns: 1,
            height: 500,
            ellipsis: true
          })

        doc
          .fillColor('black')
          .font('Times-Italic', 12)
          .text('Founder & CEO', 35, 455, {
            align: 'left',
            indent: 0,
            columns: 1,
            height: 500,
            ellipsis: true
          })

        doc
          .fillColor('black')
          .font('Times-Bold', 12)
          .text('Oct. 2017 – Present', 90, 440, {
            align: 'right',
            width: 485,
            indent: 0,
            columns: 1,
            height: 500,
            ellipsis: true
          })

        doc
          .fillColor('black')
          .font('Times-Italic', 12)
          .text('Denver, CO', 90, 455, {
            align: 'right',
            width: 485,
            indent: 0,
            columns: 1,
            height: 500,
            ellipsis: true
          })

        doc
          .fillColor('black')
          .font('Times-Roman', 12)
          .list([firstStr, secondStr, thirdStr, fourthStr], 35, 475, {
            align: 'left',
            width: 550,
            columns: 1,
            textIndent: 20,
            height: 200
          })

        doc
          .fillColor('black')
          .font('Times-Roman', 12)
          .text('EDUCATION', 35, 590, {
            align: 'left',
            width: 512,
          })

        doc
          .text('___________________________________________________________________________________________', 35, 590, {
            align: 'middle',
            width: 712,
          })

        doc
          .fillColor('black')
          .font('Times-Bold', 12)
          .text('University of California, Irvine', 35, 615, {
            align: 'left',
          })

        doc
          .fillColor('black')
          .font('Times-Italic', 12)
          .text('B.S. Computer Science', 35, 630, {
            align: 'left',
          })

        doc
          .fillColor('black')
          .font('Times-Bold', 12)
          .text('Dec, 2020', 90, 615, {
            align: 'right',
            width: 485,
            indent: 0,
            columns: 1,
            height: 500,
            ellipsis: true
          })

        doc
          .fillColor('black')
          .font('Times-Italic', 12)
          .text('California, CA', 90, 630, {
            align: 'right',
            width: 485,
            indent: 0,
            columns: 1,
            height: 500,
            ellipsis: true
          })

        doc
          .fillColor('black')
          .font('Times-Roman', 12)
          .list([firstStr, secondStr, thirdStr, fourthStr], 35, 650, {
            align: 'left',
            width: 550,
            columns: 1,
            textIndent: 20
          })
        // SKILLS & INTERNSHIPS
        doc
          .fillColor('black')
          .font('Times-Roman', 12)
          .text('SKILLS', 35, 125, {
            align: 'left',
            width: 512,
          })

        doc
          .text('___________________________________________________________________________________________', 35, 125, {
            align: 'middle',
            width: 712,
          })

        let skills = "Skills (plug in your own): Strategic planning; strategic partnerships; revenue modeling & forecasting; retail partnerships, sales, & distro; contract negotiations; account management; Amazon marketing; channel marketing; crowdfunding; copywriting; content marketing; brand marketing; DTC; Shopify; supply chain management; Keynote / PPT presentation";
        let interests = "Interests (make your own): Puns; sleeping; sustainability; politics; yoga; traveling; fishing; Reddit; beer; Seinfeld";

        doc.font('Times-Bold')
          .text(skills.slice(0, 6), 35, 150, {
            width: 512,
            align: 'left',
            continued: true
          }).font('Times-Roman')
          .text(skills.slice(6, skills.length));

        doc.font('Times-Bold')
          .text(interests.slice(0, 9), {
            width: 512,
            align: 'left',
            continued: true
          }).font('Times-Roman')
          .text(interests.slice(9, interests.length));

        doc.end();
      }
    }
  }
}

export default SheetsGiggles;