import PDFDocument from 'pdfkit';

const resumeNow = async (req, res) => {
    if (req.method === 'POST') {

        const doc = new PDFDocument();

        // https://stackoverflow.com/questions/44731255/send-pdf-file-made-with-pdfkit-to-the-client-for-display/67017960#67017960
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", `attachment; filename=${req.body.first_name}_resume.pdf`);

        doc.pipe(res);
        
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
            school_degree,
            school_1_start,
            school_1_end,
            school_2,
            school_2_start,
            school_2_end,
            school_3,
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
        } = req.body

        //formating phone if 1234567890
        let newPhoneNum;
        const formatPhone = () => {
            if (phone.length == 10) {
                newPhoneNum = phone.slice(0, 3) + "-" + phone.slice(3, 6) + "-" + phone.slice(6, 10);
                return newPhoneNum;
            } else {
                return phone;
            }
        }

        const cleanedSkills = [...new Set(skills)];

        const entry = {
            first_name: first_name,
            last_name: last_name,
            state: state,
            city: city,
            zip: zip,
            email: email,
            phone: formatPhone(),
            about_me: about_me,
            school_1: {
                school: school_1,
                degree: school_degree[0] + " " + school_degree[1],
                start: school_1_start,
                end: school_1_end,
            },
            school_2: {
                school: school_2,
                degree: school_degree[2] + " " + school_degree[3],
                start: school_2_start,
                end: school_2_end,
            },
            school_3: {
                school: school_3,
                degree: school_degree[4] + " " + school_degree[5],
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
            skills: cleanedSkills,
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
        };


        // and some justified text wrapped into columns
        doc
            .fillColor('black')
            .font('Times-Bold', 16)
            .moveUp(1.6)
            .text(entry.first_name + " " + entry.last_name, {
                width: 412,
                align: 'center',
                indent: 40,
                columns: 1,
                height: 500,
                ellipsis: true
            })

        // and some justified text wrapped into columns


        const contactMe = () => {
            if (entry.phone == "" && entry.email == "") {
                return;
            } else if (entry.phone == "" && typeof entry.email == "string") {
                return "Email:" + " " + entry.email;
            } else if (typeof entry.phone == "string" && entry.email == "") {
                return "Phone:" + " " + entry.phone;
            } else {
                return "Phone:" + " " + entry.phone + " " + "Email:" + " " + entry.email;
            }
        }

        const locationState = () => entry.state == "" ? ("") : (entry.state + "," + " ");

        doc
            .fillColor('black')
            .font('Times-Roman', 12)
            .moveDown()
            .moveUp()
            .text(entry.city + " " + locationState() + entry.zip, {
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

        let box = { about: entry.about_me.replace(/\n/g, ' ') }
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


        if (entry.skills !== null && typeof entry.skills != 'string') {
            doc
                .moveDown()
                .text(entry.skills[0] === undefined ? " " : entry.skills[0], { align: 'left' })
                .moveDown()
            doc.text(entry.skills[3] === undefined ? " " : entry.skills[3], { align: 'left' })
                .moveDown()
            doc.text(entry.skills[6] === undefined ? " " : entry.skills[6], { align: 'left' })

            doc
                .moveUp(5)
                .text(entry.skills[1] === undefined ? " " : entry.skills[1], { align: 'center' })
                .moveDown()
            doc.text(entry.skills[4] === undefined ? " " : entry.skills[4], { align: 'center' })
                .moveDown()
            doc.text(entry.skills[7] === undefined ? " " : entry.skills[7], { align: 'center' })

            doc
                .moveUp(5)
                .text(entry.skills[2] === undefined ? " " : entry.skills[2], { align: 'right' })
                .moveDown()
            doc.text(entry.skills[5] === undefined ? " " : entry.skills[5], { align: 'right' })
                .moveDown()
            doc.text(entry.skills[8] === undefined ? " " : entry.skills[8], { align: 'right' })
        } else {
            doc
                .moveDown()
                .text(entry.skills === undefined ? " " : entry.skills, { align: 'left' })
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

    
        // Checks to if end data is available.
        let jobEndOne = (entry.job_1.job_name_1 == "" ? "" : entry.job_1.job_end === "" ? " " + "-" + " " + "Current" : " " + "-" + " " + entry.job_1.job_end.slice(0, 4));

        doc
            .fillColor('black')
            .font('Times-Bold', 12)
            .moveDown(1)
            .text(entry.job_1.job_name_1, {
                width: 412,
                align: 'left',
                indent: 0,
                columns: 1,
                height: 500,
                ellipsis: true
            })
            .moveUp(1)
            .font('Times-Italic', 12)
            .text(entry.job_1.job_start.slice(0, 4) + jobEndOne, {
                align: 'right',
            })
        doc
            .fillColor('black')
            .font('Times-Italic', 12)
            .text(entry.job_1.job_title_1, {
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
                const jobDuty = entry.job_1.job_1_duty;
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
        // Checks to if end data is available.
        let jobEndTwo = (entry.job_2.job_name_2 == "" ? "" : entry.job_2.job_end === "" ? " " + "-" + " " + "Current" : " " + "-" + " " + entry.job_2.job_end.slice(0, 4));

        doc
            .fillColor('black')
            .font('Times-Bold', 12)
            .moveDown(1)
            .text(entry.job_2.job_name_2, {
                width: 412,
                align: 'left',
                indent: 0,
                columns: 1,
                height: 500,
                ellipsis: true
            })
            .moveUp(1)
            .font('Times-Italic', 12)
            .text(entry.job_2.job_start.slice(0, 4) + jobEndTwo, {
                align: 'right',
            })

        doc
            .fillColor('black')
            .font('Times-Italic', 12)
            .text(entry.job_2.job_title_2, {
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
                const jobDutyTwo = entry.job_2.job_2_duty;
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



        const educComp = [
            `${entry.school_1.degree}` + ":" + " " + `${entry.school_1.school}`,
            `${entry.school_2.degree}` + ":" + " " + `${entry.school_2.school}`,
            `${entry.school_3.degree}` + ":" + " " + `${entry.school_3.school}`
        ];

        const education = () => {
            if (entry.school_1.school == "" && entry.school_2.school == "" && entry.school_3.school == "") {
                return [];
            } else if (typeof entry.school_1.school == "string" && entry.school_2.school == "" && entry.school_3.school == "") {
                return [educComp[0]];
            } else if (typeof entry.school_1.school == "string" && typeof entry.school_2.school == "string" && entry.school_3.school == "") {
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
            if (typeof entry.school_1.start == 'string' && entry.school_2.start == "" && entry.school_3.start == "") {
                return 1;
            } else if (typeof entry.school_1.start == 'string' && typeof entry.school_2.start == 'string' && entry.school_3.start == "") {
                return 2;
            } else if (typeof entry.school_1.start == 'string' && typeof entry.school_2.start == 'string' && typeof entry.school_3.start == 'string') {
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
            .text(`${entry.school_1.start === "" && entry.school_1.end === "" ? "" : entry.school_1.start === "" ? "Current" : entry.school_1.start.slice(0, 4) + " " + "-" + " "}` + `${entry.school_1.start === "" && entry.school_1.end === "" ? "" : entry.school_1.end === "" ? "Current" : entry.school_1.end.slice(0, 4)}`, {
                align: 'right'
            })
            .text(`${entry.school_2.start === "" && entry.school_2.end === "" ? "" : entry.school_2.start === "" ? "Current" : entry.school_2.start.slice(0, 4) + " " + "-" + " "}` + `${entry.school_2.start === "" && entry.school_2.end === "" ? "" : entry.school_2.end === "" ? "Current" : entry.school_2.end.slice(0, 4)}`, {
                align: 'right'
            })
            .text(`${entry.school_3.start === "" && entry.school_3.end === "" ? "" : entry.school_3.start === "" ? "Current" : entry.school_3.start.slice(0, 4) + " " + "-" + " "}` + `${entry.school_3.start === "" && entry.school_3.end === "" ? "" : entry.school_3.end === "" ? "Current" : entry.school_3.end.slice(0, 4)}`, {
                align: 'right'
            })

        doc.end();
    }
}

export default resumeNow;