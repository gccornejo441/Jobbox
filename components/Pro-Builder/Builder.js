import { CogIcon } from "@heroicons/react/solid";
import { Formik, Form, Field, useField, ErrorMessage } from 'formik';
import { dataValue } from "../../lib/schema";
import ExpBox from "../../components/user/ExpBox";
import SkillsModal from "../../components/user/SkillsModal";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
    first_name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    last_name: Yup.string()
        .min(6, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
})

const Builder = (props) => {
    const userInfo = props.resume.find((data) => data.username === props.user.nickname);

    const MyTextInput = ({ label, ...props }) => {
        // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
        // which we can spread on <input> and alse replace ErrorMessage entirely.
        const [field, meta] = useField(props);
        return (
            <>
                <label htmlFor={props.id || props.name}>{label}</label>
                <input className="text-input text-lg p-1 font-bold text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2" {...field} {...props} />
                {meta.touched && meta.error ? (
                    <div className="error text-red-500">{meta.error}</div>
                ) : null}
            </>
        );
    };


    return (
        <>
            <div className="flex flex-col w-screen md:w-auto">
                <div className="pt-16 xl:px-4 flex justify-center">
                    <div className="md:bg-white md:rounded-lg md:shadow-md w-full md:w-max xl:px-12 mb-12">
                        <div className="p-5 mt-8 mx-8 xl:p-10 bg-regal-blue rounded-lg">
                            <h1 className="text-2xl text-gray-50 tracking-widest">Resume Builder <span className="text-xs">by Jobbox</span></h1>
                        </div>
                        <div className="border-b border-gray-300 md:px-10 w-screen md:w-auto">
                            <Formik
                                initialValues={{
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
                                    username: props.user.nickname
                                }}

                                onSubmit={(values, { setSubmitting }) => {
                                    setTimeout(() => {
                                        alert(JSON.stringify(values, null, 2));
                                        setSubmitting(false);
                                    }, 400);
                                    const res = fetch(
                                        '/api/register',
                                        {
                                            body: JSON.stringify(values),
                                            headers: {
                                                'Content-Type': 'application/json'
                                            },
                                            method: 'POST'
                                        }
                                    );

                                }}
                                validationSchema={SignupSchema}
                            >
                                {({ values, isSubmitting, }) => (
                                    <Form>
                                        <span className="inline-block align-middle text-2xl text-regal-blue">General Information</span>
                                        <span className="xl:grid grid-cols-2 gap-5">
                                            <div className="flex flex-col">
                                                <MyTextInput
                                                    label="First Name"
                                                    name="first_name"
                                                    type="text"
                                                    placeholder=""
                                                    defaultValue={values.first_name}
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <MyTextInput
                                                    defaultValue={values.last_name}
                                                    label="Last Name"
                                                    name="last_name"
                                                    type="text"
                                                    placeholder=""
                                                />
                                            </div>
                                        </span>
                                        <span className="xl:grid grid-cols-3 gap-5">
                                            <div className="flex flex-col">
                                                <MyTextInput
                                                    defaultValue={values.city}
                                                    label="City"
                                                    name="city"
                                                    type="text"
                                                    placeholder=""
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <MyTextInput
                                                    defaultValue={values.state}
                                                    label="State"
                                                    name="state"
                                                    type="text"
                                                    placeholder=""
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <MyTextInput
                                                    defaultValue={values.zip}
                                                    label="Zip Code"
                                                    name="zip"
                                                    type="text"
                                                    placeholder=""
                                                />
                                            </div>
                                        </span>
                                        <span className="xl:grid grid-cols-2 gap-5">
                                            <div className="flex flex-col">
                                                <MyTextInput
                                                    defaultValue={values.email}
                                                    label="Email"
                                                    name="email"
                                                    type="text"
                                                    placeholder=""
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <MyTextInput
                                                    defaultValue={values.zip}
                                                    label="zip"
                                                    name="zip"
                                                    type="text"
                                                    placeholder=""
                                                />
                                            </div>
                                        </span>
                                        <span className="xl:grid grid-cols-1 gap-5">
                                            <div className="flex flex-col">
                                                <label className="py-2" htmlFor="about_me">About Me</label>
                                                <Field className="text-lg font-bold text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2" defaultValue={values.about_me} as="textarea" name="about_me" placeholder="Last Name" />
                                            </div>
                                        </span>
                                        <div className="border-b border-gray-200 w-full my-5"></div>
                                        <div>
                                            <span className="inline-block align-middle text-2xl text-regal-blue">Education</span>
                                            <div className="xl:grid grid-cols-2 gap-2">
                                                <div className="flex flex-col">
                                                    <MyTextInput
                                                        label="School 1"
                                                        name="school_1"
                                                        type="text"
                                                        placeholder=""
                                                        value={values.school_1.school}
                                                    />
                                                    <MyTextInput
                                                        defaultValue={values.school_1.degree}
                                                        label="Degree"
                                                        name="school_degree_1"
                                                        type="text"
                                                        placeholder="B.S. in Biological Sciences"
                                                    />
                                                </div>
                                                <div className="sm:grid grid-cols-2 gap-2">
                                                    <div className="flex flex-col">
                                                        <MyTextInput
                                                            defaultValue={values.school_1.start}
                                                            label="Year Started"
                                                            name="school_1_start"
                                                            type="date"
                                                            placeholder=""
                                                        />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <MyTextInput
                                                            defaultValue={values.school_1.end}
                                                            label="Year Ended"
                                                            name="school_1_end"
                                                            type="date"
                                                            placeholder=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col">
                                                    <MyTextInput
                                                        value={values.school_2.school}
                                                        label="School 2"
                                                        name="school_2"
                                                        type="text"
                                                        placeholder=""
                                                    />
                                                    <MyTextInput
                                                        defaultValue={values.school_2.degree}
                                                        label="Degree"
                                                        name="school_degree_2"
                                                        type="text"
                                                        placeholder="M.S. in Biological Sciences"
                                                    />
                                                </div>
                                                <div className="sm:grid grid-cols-2 gap-2">
                                                    <div className="flex flex-col">
                                                        <MyTextInput
                                                            defaultValue={values.school_2.start}
                                                            label="Year Started"
                                                            name="school_2_start"
                                                            type="date"
                                                            placeholder=""
                                                        />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <MyTextInput
                                                            defaultValue={values.school_2.end}
                                                            label="Year Ended"
                                                            name="school_2_end"
                                                            type="date"
                                                            placeholder=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col">
                                                    <MyTextInput
                                                        value={values.school_3.school}
                                                        label="School 3"
                                                        name="school_3"
                                                        type="text"
                                                        placeholder=""
                                                    />
                                                    <MyTextInput
                                                        defaultValue={values.school_3.degree}
                                                        label="Degree"
                                                        name="school_degree_3"
                                                        type="text"
                                                        placeholder="Ph.D. in Biological Sciences"
                                                    />
                                                </div>
                                                <div className="sm:grid grid-cols-2 gap-2">
                                                    <div className="flex flex-col">
                                                        <MyTextInput
                                                            defaultValue={values.school_3.start}
                                                            label="Year Started"
                                                            name="school_3_start"
                                                            type="date"
                                                            placeholder=""
                                                        />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <MyTextInput
                                                            defaultValue={values.school_3.end}
                                                            label="Year Ended"
                                                            name="school_3_end"
                                                            type="date"
                                                            placeholder=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* EXPERIENCE - START */}
                                        <div className="border-b border-gray-200 w-full my-5"></div>
                                        <span className="inline-block align-middle text-2xl text-regal-blue">Experience</span>

                                        <ExpBox userInfo={userInfo} />
                                        {/* EXPERIENCE - END */}

                                        <div className="border-b border-gray-200 w-full my-5"></div>

                                        {/* SKILLS - START */}

                                        <SkillsModal userInfo={userInfo} />
                                        {/* SKILLS - START */}
                                        <div className="border-b border-gray-200 w-full my-5"></div>
                                        <span className="inline-block align-middle text-2xl text-regal-blue">Socials</span>
                                        <span className="xl:grid grid-cols-3 gap-5 pb-12">
                                            <div className="flex flex-col">
                                                <MyTextInput
                                                    defaultValue={values.linkedin}
                                                    label="Linkedin"
                                                    name="linkedin"
                                                    type="text"
                                                    placeholder=""
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <MyTextInput
                                                    defaultValue={values.twitter}
                                                    label="Twitter"
                                                    name="twitter"
                                                    type="text"
                                                    placeholder=""
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <MyTextInput
                                                    defaultValue={values.github}
                                                    label="Github"
                                                    name="github"
                                                    type="text"
                                                    placeholder=""
                                                />
                                            </div>
                                        </span>
                                        <div className="border-b border-gray-200 w-full my-5"></div>
                                        <span className="inline-block align-middle text-2xl text-regal-blue">Internships & Volunteer Work</span>

                                        <span className="xl:grid grid-cols-2 gap-5 pb-12">
                                            <div className="flex flex-col">
                                                <MyTextInput
                                                    defaultValue={values.internship[0].internship_1}
                                                    label="Internship 1"
                                                    name="internship_1"
                                                    type="text"
                                                    placeholder=""
                                                />                                        </div>
                                            <div className="sm:grid grid-cols-2 gap-2">
                                                <div className="flex flex-col">
                                                    <MyTextInput
                                                        defaultValue={values.internship[0].internship_year}
                                                        label="Year"
                                                        name="internship_1_year"
                                                        type="date"
                                                        placeholder=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                <MyTextInput
                                                    defaultValue={values.internship[1].internship_2}
                                                    label="Internship 2"
                                                    name="internship_2"
                                                    type="text"
                                                    placeholder=""
                                                />                                        </div>
                                            <div className="sm:grid grid-cols-2 gap-2">
                                                <div className="flex flex-col">
                                                    <MyTextInput
                                                        defaultValue={values.internship[1].internship_year}
                                                        label="Year"
                                                        name="internship_2_year"
                                                        type="date"
                                                        placeholder=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                <MyTextInput
                                                    defaultValue={values.internship[2].internship_3}
                                                    label="Internship 3"
                                                    name="internship_3"
                                                    type="text"
                                                    placeholder=""
                                                />                                        </div>
                                            <div className="sm:grid grid-cols-2 gap-2">
                                                <div className="flex flex-col">
                                                    <MyTextInput
                                                        defaultValue={values.internship[2].internship_year}
                                                        label="Year"
                                                        name="internship_3_year"
                                                        type="date"
                                                        placeholder=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                <MyTextInput
                                                    defaultValue={values.volunteer[0].volunteer_1}
                                                    label="Volunteer 1"
                                                    name="volunteer_1"
                                                    type="text"
                                                    placeholder=""
                                                />
                                            </div>
                                            <div className="sm:grid grid-cols-2 gap-2">
                                                <div className="flex flex-col">
                                                    <MyTextInput
                                                        defaultValue={values.volunteer[0].volunteer_year}
                                                        label="Year"
                                                        name="volunteer_1_year"
                                                        type="date"
                                                        placeholder=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                <MyTextInput
                                                    defaultValue={values.volunteer[1].volunteer_2}
                                                    label="Volunteer 2"
                                                    name="volunteer_2"
                                                    type="text"
                                                    placeholder=""
                                                />
                                            </div>
                                            <div className="sm:grid grid-cols-2 gap-2">
                                                <div className="flex flex-col">
                                                    <MyTextInput
                                                        defaultValue={values.volunteer[1].volunteer_year}
                                                        label="Year"
                                                        name="volunteer_2_year"
                                                        type="date"
                                                        placeholder=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                <MyTextInput
                                                    defaultValue={values.volunteer[2].volunteer_3}
                                                    label="Volunteer 3"
                                                    name="volunteer_3"
                                                    type="text"
                                                    placeholder=""
                                                />
                                            </div>
                                            <div className="sm:grid grid-cols-2 gap-2">
                                                <div className="flex flex-col">
                                                    <MyTextInput
                                                        defaultValue={values.volunteer[2].volunteer_year}
                                                        label="Year"
                                                        name="volunteer_3_year"
                                                        type="date"
                                                        placeholder=""
                                                    />
                                                </div>
                                            </div>
                                        </span>

                                        <div className="flex justify-center border-t border-gray-200 pt-16 pb-12">
                                            <div className="flex flex-col invisible hidden">
                                                <MyTextInput
                                                    label="Year"
                                                    name="username"
                                                    type="text"
                                                    value={props.user.nickname}
                                                    placeholder=""
                                                />
                                            </div>
                                            <button type="submit" disabled={isSubmitting} className="w-max flex py-2 px-4 text-md tracking-widest font-medium text-white rounded-md bg-regal-blue hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"><CogIcon className="h-6 pr-3 text-gray-50" />Generate</button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Builder;