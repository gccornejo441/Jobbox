import * as React from 'react';

    export const dataValue = (props) => {
        const [ value, setValue ] = React.useState(INITIAL_VALUES);
        const userInfo = props.resume.find((data) => data.username === props.user.nickname);
        const INITIAL_VALUES = {
            first_name: userInfo ? userInfo.first_name : '',
            last_name: userInfo ? userInfo.last_name : '',
            state: userInfo ? userInfo.state : '',
            city: userInfo ? userInfo.city : '',
            zip: userInfo ? userInfo.zip : '',
            email: userInfo ? userInfo.email : '',
            phone: userInfo ? userInfo.phone : '',
            about_me: userInfo ? userInfo.about_me : '',
            school_1: {
                school: userInfo ? userInfo.school_1.school : '',
                degree: userInfo ? userInfo.school_1.degree : '',
                start: userInfo ? userInfo.school_1.start : '',
                end: userInfo ? userInfo.school_1.end : ''
            },
            school_2: {
                school: userInfo ? userInfo.school_2.school : '',
                degree: userInfo ? userInfo.school_2.degree : '',
                start: userInfo ? userInfo.school_2.start : '',
                end: userInfo ? userInfo.school_2.end : ''
            },
            school_3: {
                school: userInfo ? userInfo.school_3.school : '',
                degree: userInfo ? userInfo.school_3.degree : '',
                start: userInfo ? userInfo.school_3.start : '',
                end: userInfo ? userInfo.school_3.end : ''
            },
            job_1: {
                job_name_1: userInfo ? userInfo.job_1.job_name_1 : "",
                job_title_1: userInfo ? userInfo.job_1.job_title_1 : "",
                job_date_start_1: userInfo ? userInfo.job_1.job_start : "",
                job_date_end_1: userInfo ? userInfo.job_1.job_end : "",
                job_1_duty: [
                    userInfo ? userInfo.job_1.job_1_duty[0] : "",
                    userInfo ? userInfo.job_1.job_1_duty[1] : "",
                    userInfo ? userInfo.job_1.job_1_duty[2] : "",
                    userInfo ? userInfo.job_1.job_1_duty[3] : "",
                ],
            },
            job_2: {
                job_name_2: userInfo ? userInfo.job_2.job_name_2 : "",
                job_title_2: userInfo ? userInfo.job_2.job_title_2 : "",
                job_date_start_2: userInfo ? userInfo.job_2.job_start : "",
                job_date_end_2: userInfo ? userInfo.job_2.job_end : "",
                job_2_duty: [
                    userInfo ? userInfo.job_2.job_2_duty[0] : "",
                    userInfo ? userInfo.job_2.job_2_duty[1] : "",
                    userInfo ? userInfo.job_2.job_2_duty[2] : "",
                    userInfo ? userInfo.job_2.job_2_duty[3] : "",
                ],
            },
            job_3: {
                job_name_3: userInfo ? userInfo.job_3.job_name_3 : "",
                job_title_3: userInfo ? userInfo.job_3.job_title_3 : "",
                job_date_start_3: userInfo ? userInfo.job_3.job_start : "",
                job_date_end_3: userInfo ? userInfo.job_3.job_end : "",
                job_3_duty: [
                    userInfo ? userInfo.job_3.job_3_duty[0] : "",
                    userInfo ? userInfo.job_3.job_3_duty[1] : "",
                    userInfo ? userInfo.job_3.job_3_duty[2] : "",
                    userInfo ? userInfo.job_3.job_3_duty[3] : "",
                ],
            },
            skills: [],
            linkedin: userInfo ? userInfo.linkedin : '',
            twitter: userInfo ? userInfo.twitter : '',
            github: userInfo ? userInfo.github : '',
            internship: [
                {
                    internship_1: userInfo ? userInfo.internship[0].internship_1 : '',
                    internship_year: userInfo ? userInfo.internship[0].internship_year : ''
                },
                {
                    internship_2: userInfo ? userInfo.internship[1].internship_2 : '',
                    internship_year: userInfo ? userInfo.internship[1].internship_year : ''
                },
                {
                    internship_3: userInfo ? userInfo.internship[2].internship_3 : '',
                    internship_year: userInfo ? userInfo.internship[2].internship_year : ''
                },
            ],
            volunteer: [
                {
                    volunteer_1: userInfo ? userInfo.volunteer[0].volunteer_1 : '',
                    volunteer_1_year: userInfo ? userInfo.volunteer[0].volunteer_year : ''
                },
                {
                    volunteer_2: userInfo ? userInfo.volunteer[1].volunteer_2 : '',
                    volunteer_2_year: userInfo ? userInfo.volunteer[1].volunteer_year : ''
                },
                {
                    volunteer_3: userInfo ? userInfo.volunteer[2].volunteer_3 : '',
                    volunteer_3_year: userInfo ? userInfo.volunteer[2].volunteer_year : ''
                },
            ],
        }

    }    
    
