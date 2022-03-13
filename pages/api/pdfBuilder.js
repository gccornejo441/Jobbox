import PDFDocument from 'pdfkit';
import { connectToDatabase } from "../../util/mongodb";

const pdfBuilder = async (req, res) => {
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
        res.setHeader("Content-Disposition", `attachment; filename=${dbUser.user.first_name}_resume.pdf`);

        doc.pipe(res)

        // and some justified text wrapped into columns
        doc
          .fillColor('black')
          .font('Times-Bold', 16)
          .moveUp(1.6)
          .text(dbUser.user.first_name + " " + dbUser.user.last_name, {
            width: 412,
            align: 'center',
            indent: 40,
            columns: 1,
            height: 500,
            ellipsis: true
          })

        // and some justified text wrapped into columns


        let { phone, email } = dbUser.user;
        const contactMe = () => {
          if (phone == "" && email == "") {
            return;
          } else if (phone == "" && typeof email == "string") {
            return "Email:" + " " + email;
          } else if (typeof phone == "string" && email == "") {
            return "Phone:" + " " + phone;
          } else {
            return "Phone:" + " " + phone + " " + "Email:" + " " + email;
          }
        }
        let { state } = dbUser.user;
        const locationState = () => state == "" ? ("") : (state + "," + " ");

        doc
          .fillColor('black')
          .font('Times-Roman', 12)
          .moveDown()
          .moveUp()
          .text(dbUser.user.city + " " + locationState() + dbUser.user.zip, {
            width: 412,
            align: 'center',
            indent: 40,
            columns: 1,
            ellipsis: true
          })
          .text(contactMe(), {
            width: 412,
            align: 'center',
            indent: 40,
            columns: 1,
            ellipsis: true
          })
        // .text("Portfolio:" + " " + "www." + dbUser.user.github, {
        //   width: 412,
        //   align: 'center',
        //   indent: 30,
        //   columns: 1,
        //   ellipsis: true
        // })

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


        if (dbUser.user.skills !== null && typeof dbUser.user.skills != 'string') {
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
        } else {
          doc
          .moveDown()
          .text(dbUser.user.skills === undefined ? " " : dbUser.user.skills, { align: 'left' })
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
          let { job_1 } = dbUser.user;
        // Checks to if end data is available.
        let jobEndOne = (job_1.job_name_1 == "" ? "" : job_1.job_end === "" ? " " + "-" + " " + "Current" : " " + "-" + " " + job_1.job_end.slice(0, 4));

        doc
          .fillColor('black')
          .font('Times-Bold', 12)
          .moveDown(1)
          .text(job_1.job_name_1, {
            width: 412,
            align: 'left',
            indent: 0,
            columns: 1,
            height: 500,
            ellipsis: true
          })
          .moveUp(1)
          .font('Times-Italic', 12)
          .text(job_1.job_start.slice(0, 4) + jobEndOne, {
            align: 'right',
          })
        doc
          .fillColor('black')
          .font('Times-Italic', 12)
          .text(job_1.job_title_1, {
            width: 412,
            align: 'left',
            indent: 0,
            columns: 1,
            height: 500,
            ellipsis: true
          })

        /**
      * This function searches & removes unnecessarynun characters,
      * then filters out duties with empty entries.
      */
        const jobDutySearch = () => {
          try {
            const jobDuty = job_1.job_1_duty;
            let jobDuties = jobDuty.map((item) => item.replace(/(\r\n|\n|\r)/gm, ''));
            let dutiesToDisplay = jobDuties.filter((item) => item != '');
            return dutiesToDisplay;
          } catch (err) {
            console.log(err);
          }
        }

        doc
          .font('Times-Roman', 12)
          .moveDown()
          .list(jobDutySearch(), {
            bulletRadius: 2,
            width: 412,
            align: 'left',
            columns: 1,
            height: 500,
            ellipsis: true
          });

        // Second job entry
        let { job_2 } = dbUser.user;
        // Checks to if end data is available.
        let jobEndTwo = (job_2.job_name_2 == "" ? "" : job_2.job_end === "" ? " " + "-" + " " + "Current" : " " + "-" + " " + job_2.job_end.slice(0, 4));

        doc
          .fillColor('black')
          .font('Times-Bold', 12)
          .moveDown(1)
          .text(job_2.job_name_2, {
            width: 412,
            align: 'left',
            indent: 0,
            columns: 1,
            height: 500,
            ellipsis: true
          })
          .moveUp(1)
          .font('Times-Italic', 12)
          .text(job_2.job_start.slice(0, 4) + jobEndTwo, {
            align: 'right',
          })

        doc
          .fillColor('black')
          .font('Times-Italic', 12)
          .text(job_2.job_title_2, {
            width: 412,
            align: 'left',
            indent: 0,
            columns: 1,
            height: 500,
            ellipsis: true
          })


        /**
         * This function searches & removes unnecessarynun characters,
         * then filters out duties with empty entries.
         */
        const jobDutyTwoSearch = () => {
          try {
            const jobDutyTwo = job_2.job_2_duty;
            let jobDuties = jobDutyTwo.map((item) => item.replace(/(\r\n|\n|\r)/gm, ''));
            let dutiesToDisplay = jobDuties.filter((item) => item != '');
            return dutiesToDisplay;
          } catch (err) {
            console.log(err);
          }
        }

        doc
          .font('Times-Roman', 12)
          .moveDown()
          .list(jobDutyTwoSearch(), {
            bulletRadius: 2,
            width: 412,
            align: 'left',
            columns: 1,
            height: 500,
            ellipsis: true
          });

          
          //school objs: degree and school
          let { school_1, school_2, school_3 } = dbUser.user;
          
          const educComp = [
            `${school_1.degree}` + ":" + " " + `${school_1.school}`,
            `${school_2.degree}` + ":" + " " + `${school_2.school}`,
            `${school_3.degree}` + ":" + " " + `${school_3.school}`
          ];
          
          const education = () => {
            if (school_1.school == "" && school_2.school == "" && school_3.school == "") {
              return [];
            } else if (typeof school_1.school == "string" && school_2.school == "" && school_3.school == "") {
              return [educComp[0]];
          } else if (typeof school_1.school == "string" && typeof school_2.school == "string" && school_3.school == "") {
            return [educComp[0], educComp[1]];
          } else {
            return [educComp[0], educComp[1], educComp[2]];
          }
        };
        
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
          });


          const numOfSchools = () => {
            if ( typeof school_1.start == 'string' && school_2.start == "" && school_3.start == "" ) {
              return 1;
            } else if ( typeof school_1.start == 'string' && typeof school_2.start == 'string' && school_3.start == "" ) {
              return 2;
            } else if ( typeof school_1.start == 'string' && typeof school_2.start == 'string' && typeof school_3.start == 'string' ) {
              return 3;
            } else {
              return;
            }
          };


        doc
        .list(education(), {
          bulletRadius: 2,
          width: 412,
          align: 'left',
          columns: 1,
          height: 500,
          ellipsis: true
        })
        .moveUp(numOfSchools())
        .text(`${school_1.start === "" && school_1.end === "" ? "" : school_1.start === "" ? "Current" : school_1.start.slice(0, 4) + " " + "-" + " "}` + `${school_1.start === "" && school_1.end === "" ? "" : school_1.end === "" ? "Current" : school_1.end.slice(0, 4)}`, { 
          align: 'right' 
        })
        .text(`${school_2.start === "" && school_2.end === "" ? "" : school_2.start === "" ? "Current" : school_2.start.slice(0, 4) + " " + "-" + " "}` + `${school_2.start === "" && school_2.end === "" ? "" : school_2.end === "" ? "Current" : school_2.end.slice(0, 4)}`, { 
          align: 'right' 
        })
        .text(`${school_3.start === "" && school_3.end === "" ? "" : school_3.start === "" ? "Current" : school_3.start.slice(0, 4) + " " + "-" + " "}` + `${school_3.start === "" && school_3.end === "" ? "" : school_3.end === "" ? "Current" : school_3.end.slice(0, 4)}`, { 
          align: 'right' 
        })
        
        doc.end();
      }
    }
  }
}

export default pdfBuilder;