import PDFDocument from 'pdfkit';

const builderNow = async (req, res) => {

    console.log("REA.BODY: ", req.body);

    if (req.method === "POST") {
        const doc = new PDFDocument();

        // https://stackoverflow.com/questions/44731255/send-pdf-file-made-with-pdfkit-to-the-client-for-display/67017960#67017960
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", `inline; filename=${req.body.first_name}_resume.pdf`);

        doc.pipe(res)

        // and some justified text wrapped into columns
        doc
            .fillColor('black')
            .font('Times-Bold', 16)
            .moveUp(1.6)
            .text(req.body.first_name + " " + req.body.last_name, {
                width: 412,
                align: 'center',
                indent: 40,
                columns: 1,
                height: 500,
                ellipsis: true
            })

        // and some justified text wrapped into columns
        let { phone, email } = req.body;
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
        let { state } = req.body;
        const locationState = () => state == "" ? ("") : (state + "," + " ");

        doc
            .fillColor('black')
            .font('Times-Roman', 12)
            .moveDown()
            .moveUp()
            .text(req.body.city + " " + locationState() + req.body.zip, {
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
        // .text("Portfolio:" + " " + "www." + req.body.github, {
        //   width: 412,
        //   align: 'center',
        //   indent: 30,
        //   columns: 1,
        //   ellipsis: true
        // })

        let box = { about: req.body.about_me.replace(/\n/g, ' ') }
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


        // if (req.body.skills !== null && typeof req.body.skills != 'string') {
        //     doc
        //         .moveDown()
        //         .text(req.body.skills === undefined ? " " : req.body.skills[0], { align: 'left' })
        //         .moveDown()
        //     doc.text(req.body.skills === undefined ? " " : req.body.skills[3], { align: 'left' })
        //         .moveDown()
        //     doc.text(req.body.skills === undefined ? " " : req.body.skills[6], { align: 'left' })

        //     doc
        //         .moveUp(5)
        //         .text(req.body.skills === undefined ? " " : req.body.skills[1], { align: 'center' })
        //         .moveDown()
        //     doc.text(req.body.skills === undefined ? " " : req.body.skills[4], { align: 'center' })
        //         .moveDown()
        //     doc.text(req.body.skills === undefined ? " " : req.body.skills[7], { align: 'center' })

        //     doc
        //         .moveUp(5)
        //         .text(req.body.skills === undefined ? " " : req.body.skills[2], { align: 'right' })
        //         .moveDown()
        //     doc.text(req.body.skills === undefined ? " " : req.body.skills[5], { align: 'right' })
        //         .moveDown()
        //     doc.text(req.body.skills === undefined ? " " : req.body.skills[8], { align: 'right' })
        // } else {
        //     doc
        //         .moveDown()
        //         .text(req.body.skills === undefined ? " " : req.body.skills, { align: 'left' })
        // }

        if (req.body.skills !== null && typeof req.body.skills != 'string') {
            doc
                .moveDown()
                .text(req.body.skills === undefined ? " " : req.body.skills[0], { 
                    align: 'left',
                    width: "950"
                 })
                .moveUp()
            doc.text(req.body.skills === undefined ? " " : req.body.skills[1], {
                 align: 'center', 
                })
                .moveUp()
            doc.text(req.body.skills === undefined ? " " : req.body.skills[2], { 
                align: 'right' 
            })
            doc
                .moveDown()
                .text(req.body.skills === undefined ? " " : req.body.skills[3], { 
                    align: 'left',
                 })
            doc
            .moveUp(1)
            .text(req.body.skills === undefined ? " " : req.body.skills[4], {
                 align: 'center',
                })
            doc
            .moveUp(1)
            .text(req.body.skills === undefined ? " " : req.body.skills[5], { align: 'right' })
            doc
                .moveDown()
                .text(req.body.skills === undefined ? " " : req.body.skills[6], { 
                    align: 'left',
                 })
            doc
            .moveUp(1)
            .text(req.body.skills === undefined ? " " : req.body.skills[7], {
                 align: 'center',
                })
               
            doc
            .moveUp(1)
            .text(req.body.skills === undefined ? " " : req.body.skills[8], { 
                align: 'right', 
            })
        } else {
            doc
                .moveDown()
                .text(req.body.skills === undefined ? " " : req.body.skills, { align: 'left' })
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
        let {
            job_name_1,
            job_title_1,
            job_date_start_1,
            job_date_end_1,
            job_1_duty,
            job_name_2,
            job_title_2,
            job_date_start_2,
            job_date_end_2,
            job_2_duty
        } = req.body;

        // Checks to if end data is available.
        let jobEndOne = (job_name_1 == undefined ? "" : job_name_1 == "" ? "" : job_date_end_1 === "" ? " " + "-" + " " + "Current" : " " + "-" + " " + job_date_end_1.slice(0, 4));

        doc
            .fillColor('black')
            .font('Times-Bold', 12)
            .moveDown(1)
            .text(job_name_1 == undefined ? "" : job_name_1, {
                width: 412,
                align: 'left',
                indent: 0,
                columns: 1,
                height: 500,
                ellipsis: true
            })
            .moveUp(1)
            .font('Times-Italic', 12)
            .text(job_name_1 == undefined ? "" : job_date_start_1.slice(0, 4) + jobEndOne, {
                align: 'right',
            })
        doc
            .fillColor('black')
            .font('Times-Italic', 12)
            .text(job_name_1 == undefined ? "" : job_title_1, {
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
                let jobDuties = job_1_duty.map((item) => item.replace(/(\r\n|\n|\r)/gm, ''));
                let dutiesToDisplay = jobDuties.filter((item) => item != '');
                return dutiesToDisplay;
            } catch (err) {
                console.log(err);
            }
        }

        doc
            .font('Times-Roman', 12)
            .moveDown()
            .list(jobDutySearch() == undefined ? false : jobDutySearch(), {
                bulletRadius: 2,
                width: 412,
                align: 'left',
                columns: 1,
                height: 500,
                ellipsis: true
            });

        // Second job entry
        // Checks to if end data is available.
        let jobEndTwo = (job_name_2 == undefined ? "" : job_name_2 == "" ? "" : job_date_end_2 === "" ? " " + "-" + " " + "Current" : " " + "-" + " " + job_date_end_2.slice(0, 4));

        doc
            .fillColor('black')
            .font('Times-Bold', 12)
            .moveDown(1)
            .text(job_name_2 == undefined ? "" : job_name_2, {
                width: 412,
                align: 'left',
                indent: 0,
                columns: 1,
                height: 500,
                ellipsis: true
            })
            .moveUp(1)
            .font('Times-Italic', 12)
            .text(job_name_2 == undefined ? "" : job_date_start_2.slice(0, 4) + jobEndTwo, {
                align: 'right',
            })

        doc
            .fillColor('black')
            .font('Times-Italic', 12)
            .text(job_name_2 == undefined ? "" : job_title_2, {
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
                let jobDuties = job_2_duty.map((item) => item.replace(/(\r\n|\n|\r)/gm, ''));
                let dutiesToDisplay = jobDuties.filter((item) => item != '');
                return dutiesToDisplay;
            } catch (err) {
                console.log(err);
            }
        }

        doc
            .font('Times-Roman', 12)
            .moveDown()
            .list(jobDutyTwoSearch() == undefined ? false : jobDutyTwoSearch(), {
                bulletRadius: 2,
                width: 412,
                align: 'left',
                columns: 1,
                height: 500,
                ellipsis: true
            });

        //school objs: degree and school
        let {
            school_1,
            school_degree,
            school_1_start,
            school_1_end,
            school_2,
            school_2_start,
            school_2_end, school_3,
            school_3_start,
            school_3_end
        } = req.body;

        const schoo1_dates =`${school_1_start === "" && school_1_end === "" ? "" : school_1_start === "" ? "Current" : school_1_start.slice(0, 4) + " " + "-" + " "}` + `${school_1_start === "" && school_1_end === "" ? "" : school_1_end === "" ? "Current" : school_1_end.slice(0, 4)}`;
        const schoo2_dates = `${school_2_start === "" && school_2_end === "" ? "" : school_2_start === "" ? "Current" : school_2_start.slice(0, 4) + " " + "-" + " "}` + `${school_2_start === "" && school_2_end === "" ? "" : school_2_end === "" ? "Current" : school_2_end.slice(0, 4)}`;
        const schoo3_dates = `${school_3_start === "" && school_3_end === "" ? "" : school_3_start === "" ? "Current" : school_3_start.slice(0, 4) + " " + "-" + " "}` + `${school_3_start === "" && school_3_end === "" ? "" : school_3_end === "" ? "Current" : school_3_end.slice(0, 4)}`;

        const educComp = [
                `${school_degree[0]}` + " " + `${school_degree[1]}` +  ":" + " " + `${schoo1_dates}`,
                `${school_degree[2]}` + " " + `${school_degree[3]}` +  ":" + " " + `${schoo2_dates}`,
                `${school_degree[4]}` + " " + `${school_degree[5]}` +  ":" + " " + `${schoo3_dates}`,
            ];
    
        const education = () => {
            if (school_1 == "" && school_2 == "" && school_3 == "") {
                return [];
            } else if (typeof school_1 == "string" && school_2 == "" && school_3 == "") {
                return [school_1, educComp[0]];
            } else if (typeof school_1 == "string" && typeof school_2 == "string" && school_3 == "") {
                return [school_1, educComp[0], school_2, educComp[1]];
            } else {
                return [school_1, educComp[0], school_2, educComp[1], school_3, educComp[2]];
            }
        };

        doc
            .fillColor('black')
            .font('Times-Bold', 12)
            .moveDown()
            .text("Education", {
                width: 412,
                align: 'left',
                indent: 0,
                columns: 1,
                height: 500,
                ellipsis: true
            });

        doc
            .moveDown(1)
            .list(education(), {
                bulletRadius: 1,
                width: 412,
                align: 'left',
              })

        doc.end();
    }

}

export default builderNow;