import { CogIcon } from "@heroicons/react/solid";
import Experience from "../ResumeNow/Experience";
import SkillsModal from "../../components/user/SkillsModal";
import * as yup from "yup";
import * as React from "react";
import MajorOpt from "../user/majorOpt";

const Builder = (props) => {
    const [errors, setError] = React.useState([]);
    const [ value, setValue ] = React.useState({ first_name: ""})

    // This handles user phone format
    const changeNum = (e) => {
        e.preventDefault();
        if (e.target.value == e.target.value.match("[0-9]{3}-[0-9]{3}-[0-9]{4}")) {
            e.target.pattern = "[0-9]{3}-[0-9]{3}-[0-9]{4}";
        } else {
            return;
        }
    };

    const phoneRegExp = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/

    let schema = yup.object().shape({
        phoneNumber: yup.string().matches(phoneRegExp, 'Phone number is not valid')
    });

    const valueValidation = async (e) => {
        let err = await schema.validate({ phoneNumber: e.target.value }).catch((err) => {
            return err;
        });

        if (err.errors != undefined) {
            setError(err.errors);
        } else {
            setError([])
        }
    }

    const postData = async (data) => {
        const res = await fetch('/api/builderNow', {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Content-Disposition": "inline; filename=_resume.pdf",
            },
            body: JSON.stringify(data)
        }); 
    }

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postData(value);
    }

    console.log("props: ", props);


    return (
        <>
            <div className="h-screen xl:flex xl:justify-center">
                <div className="flex flex-col pt-16 xl:pt-8 xl:bg-white rounded-lg xl:shadow-md xl:my-12 overflow-auto h-screen xl:h-auto">
                    <div className="border-b border-gray-300 px-4 xl:px-10">
                        <div className="p-5 mt-8 xl:mt-xl:mx-8 xl:p-10 bg-regal-blue rounded-lg">
                            <h1 className="sm:text-lg xl:text-2xl text-gray-50 tracking-widest">Resume Builder <span className="text-xs">by Jobbox</span></h1>
                        </div>
                        <form action="/api/builderNow" method="POST" className="md:mx-20 grid grid-cols-1">
                            <div className="py-3 xl:px-4 md:w-auto">
                                <span className="inline-block align-middle text-2xl text-regal-blue">General Information</span>
                                <span className="xl:grid grid-cols-2 gap-5">
                                    <div className="flex flex-col">
                                        <label className="py-2" htmlFor="first_name">First Name*</label>
                                        <input
                                        onChange={(e) => handleChange(e)} 
                                        className="text-sm p-1 font-normal text-blue-900 xl:bg-gray-100 border border-gray-200 rounded-md pl-2" 
                                        type="text" 
                                        name="first_name" 
                                        required 
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="py-2" htmlFor="last_name">Last Name</label>
                                        <input 
                                        onChange={(e) => handleChange(e)}
                                        className="text-sm p-1 font-normal text-blue-900 xl:bg-gray-100 border border-gray-200 rounded-md pl-2" 
                                        type="text" 
                                        name="last_name" />
                                    </div>
                                </span>

                                <span className="xl:grid grid-cols-3 gap-5">
                                    <div className="flex flex-col">
                                        <label className="py-2" htmlFor="city">City</label>
                                        <input className="text-sm p-1 font-normal text-blue-900 xl:bg-gray-100 border border-gray-200 rounded-md pl-2" type="text" name="city" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="py-2" htmlFor="state">State</label>
                                        <input className="text-sm p-1 font-normal text-blue-900 xl:bg-gray-100 border border-gray-200 rounded-md pl-2" type="text" name="state" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="py-2" htmlFor="zip">Zip Code</label>
                                        <input className="text-sm p-1 font-normal text-blue-900 xl:bg-gray-100 border border-gray-200 rounded-md pl-2" type="text" name="zip" />
                                    </div>
                                </span>
                                <span className="xl:grid grid-cols-2 gap-5">
                                    <div className="flex flex-col">
                                        <label className="py-2" htmlFor="email">Email</label>
                                        <input className="text-sm p-1 font-normal text-blue-900 xl:bg-gray-100 border border-gray-200 rounded-md pl-2" type="email" name="email" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="py-2" htmlFor="phone">Phone</label>
                                        <input className="text-sm p-1 font-normal text-blue-900 text-regal-blue xl:bg-gray-100 border border-gray-200 rounded-md pl-2" pattern={"[0-9]{10}|[0-9]{3}-[0-9]{3}-[0-9]{4}"} onChange={e => valueValidation(e)} type="tel" name="phone" placeholder="123-456-7890 or 1234567890" />
                                        <span className="text-xs text-red-500">{errors.map((err) => { return err })}</span>
                                    </div>
                                </span>
                                <span className="xl:grid grid-cols-1 gap-5">
                                    <div className="flex flex-col">
                                        <label className="py-2" htmlFor="about_me">About Me</label>
                                        <textarea className="text-sm font-normal text-blue-900 xl:bg-gray-100 border border-gray-200 rounded-md pl-2" type="text" name="about_me" />
                                    </div>
                                </span>
                                <div className="border-b border-gray-200 w-full my-5"></div>
                                <div>
                                    <span className="inline-block align-middle text-2xl text-regal-blue">Education</span>
                                    <div className="xl:grid grid-cols-2 gap-2">
                                        <div className="flex flex-col">
                                            <label className="py-2" htmlFor="school_1">School 1</label>
                                            <input maxlength="50" className="p-1 inline-block align-middle text-sm font-medium text-blue-900 mr-2 xl:bg-gray-100 border border-gray-200 rounded-md pl-2" name="school_1" />
                                            <MajorOpt />
                                        </div>
                                        <div className="sm:grid grid-cols-2 gap-2">
                                            <div className="flex flex-col">
                                                <label className="py-2" htmlFor="school_1_start">Year Started</label>
                                                <input className="p-2 inline-block align-middle text-sm font-medium text-blue-900 xl:bg-gray-100 border border-gray-200 rounded-md pl-2" type="date" name="school_1_start" />
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="py-2" htmlFor="school_1_end">Year Ended</label>
                                                <input className="p-2 inline-block align-middle text-sm font-medium text-blue-900 xl:bg-gray-100 border border-gray-200 rounded-md pl-2" type="date" name="school_1_end" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:grid grid-cols-2 gap-2">
                                        <div className="flex flex-col">
                                            <label className="py-2" htmlFor="school_2">School 2</label>
                                            <input maxlength="50" className="p-1 inline-block align-middle text-sm font-medium text-blue-900 mr-2 xl:bg-gray-100 border border-gray-200 rounded-md pl-2" name="school_2" />
                                            <MajorOpt />
                                        </div>
                                        <div className="sm:grid grid-cols-2 gap-2">
                                            <div className="flex flex-col">
                                                <label className="py-2" htmlFor="school_2_start">Year Started</label>
                                                <input className="p-2 inline-block align-middle text-sm font-medium text-blue-900 xl:bg-gray-100 border border-gray-200 rounded-md pl-2" type="date" name="school_2_start" />
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="py-2" htmlFor="school_2_end">Year Ended</label>
                                                <input className="p-2 inline-block align-middle text-sm font-medium text-blue-900 xl:bg-gray-100 border border-gray-200 rounded-md pl-2" type="date" name="school_2_end" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:grid grid-cols-2 gap-2">
                                        <div className="flex flex-col">
                                            <label className="py-2" htmlFor="school_3">School 3</label>
                                            <input maxlength="50" className="p-1 inline-block align-middle text-sm font-medium text-blue-900 mr-2 xl:bg-gray-100 border border-gray-200 rounded-md pl-2" name="school_3" />
                                            <MajorOpt />
                                        </div>
                                        <div className="sm:grid grid-cols-2 gap-2">
                                            <div className="flex flex-col">
                                                <label className="py-2" htmlFor="school_3_start">Year Started</label>
                                                <input className="p-2 inline-block align-middle text-sm font-medium text-blue-900 xl:bg-gray-100 border border-gray-200 rounded-md pl-2" type="date" name="school_3_start" />
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="py-2" htmlFor="school_3_end">Year Ended</label>
                                                <input className="p-2 inline-block align-middle text-sm font-medium text-blue-900 xl:bg-gray-100 border border-gray-200 rounded-md pl-2" type="date" name="school_3_end" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* EXPERIENCE - START */}
                                <div className="border-b border-gray-200 w-full my-5"></div>
                                <span className="inline-block align-middle text-2xl text-regal-blue">Experience</span>

                                <Experience />
                                {/* EXPERIENCE - END */}

                                <div className="border-b border-gray-200 w-full my-5"></div>
                                <SkillsModal />
                                <div className="border-b border-gray-200 w-full my-5"></div>
                                <span className="inline-block align-middle text-2xl text-regal-blue">Socials</span>
                                <span className="xl:grid grid-cols-3 gap-5 pb-12">
                                    <div className="flex flex-col">
                                        <label className="py-2" htmlFor="linkedin">LinkedIn</label>
                                        <input className="text-sm p-1 font-normal text-blue-900 xl:bg-gray-100 border border-gray-200 rounded-md pl-2" type="text" name="linkedin" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="py-2" htmlFor="twitter">Twitter</label>
                                        <input className="text-sm p-1 font-normal text-blue-900 xl:bg-gray-100 border border-gray-200 rounded-md pl-2" type="text" name="twitter" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="py-2" htmlFor="github">Github</label>
                                        <input className="text-sm p-1 font-normal text-blue-900 xl:bg-gray-100 border border-gray-200 rounded-md pl-2" type="text" name="github" />
                                    </div>
                                </span>
                                <div className="border-b border-gray-200 w-full my-5"></div>
                                <span className="inline-block align-middle text-2xl text-regal-blue">Internships & Volunteer Work</span>
                                <span className="xl:grid grid-cols-2 gap-5 pb-12">
                                    <div className="flex flex-col">
                                        <label className="py-2" htmlFor="internship_1">Internship 1</label>
                                        <input className="p-1 inline-block align-middle text-sm font-medium text-blue-900 mr-2 xl:bg-gray-100 border border-gray-200 rounded-md pl-2" name="internship_1" />
                                    </div>
                                    <div className="sm:grid grid-cols-2 gap-2">
                                        <div className="flex flex-col">
                                            <label className="py-2" htmlFor="internship_1_year">Year</label>
                                            <input className="p-2 inline-block align-middle text-sm font-medium text-blue-900 xl:bg-gray-100 border border-gray-200 rounded-md pl-2" type="date" name="internship_1_year" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="py-2" htmlFor="internship_2">Internship 2</label>
                                        <input className="p-1 inline-block align-middle text-sm font-medium text-blue-900 mr-2 xl:bg-gray-100 border border-gray-200 rounded-md pl-2" name="internship_2" />
                                    </div>
                                    <div className="sm:grid grid-cols-2 gap-2">
                                        <div className="flex flex-col">
                                            <label className="py-2" htmlFor="internship_2_year">Year</label>
                                            <input className="p-2 inline-block align-middle text-sm font-medium text-blue-900 xl:bg-gray-100 border border-gray-200 rounded-md pl-2" type="date" name="internship_2_year" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="py-2" htmlFor="internship_3">Internship 3</label>
                                        <input className="p-1 inline-block align-middle text-sm font-medium text-blue-900 mr-2 xl:bg-gray-100 border border-gray-200 rounded-md pl-2" name="internship_3" />
                                    </div>
                                    <div className="sm:grid grid-cols-2 gap-2">
                                        <div className="flex flex-col">
                                            <label className="py-2" htmlFor="internship_3_year">Year</label>
                                            <input className="p-2 inline-block align-middle text-sm font-medium text-blue-900 xl:bg-gray-100 border border-gray-200 rounded-md pl-2" type="date" name="internship_3_year" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="py-2" htmlFor="volunteer_1">Volunteer 1</label>
                                        <input className="p-1 inline-block align-middle text-sm font-medium text-blue-900 mr-2 xl:bg-gray-100 border border-gray-200 rounded-md pl-2" name="volunteer_1" />
                                    </div>
                                    <div className="sm:grid grid-cols-2 gap-2">
                                        <div className="flex flex-col">
                                            <label className="py-2" htmlFor="volunteer_1_year">Year</label>
                                            <input className="p-2 inline-block align-middle text-sm font-medium text-blue-900 xl:bg-gray-100 border border-gray-200 rounded-md pl-2" type="date" name="volunteer_1_year" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="py-2" htmlFor="volunteer_2">Volunteer 2</label>
                                        <input className="p-1 inline-block align-middle text-sm font-medium text-blue-900 mr-2 xl:bg-gray-100 border border-gray-200 rounded-md pl-2" name="volunteer_2" />
                                    </div>
                                    <div className="sm:grid grid-cols-2 gap-2">
                                        <div className="flex flex-col">
                                            <label className="py-2" htmlFor="volunteer_2_year">Year</label>
                                            <input className="p-2 inline-block align-middle text-sm font-medium text-blue-900 xl:bg-gray-100 border border-gray-200 rounded-md pl-2" type="date" name="volunteer_2_year" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="py-2" htmlFor="volunteer_3">Volunteer 3</label>
                                        <input className="p-1 inline-block align-middle text-sm font-medium text-blue-900 mr-2 xl:bg-gray-100 border border-gray-200 rounded-md pl-2" name="volunteer_3" />
                                    </div>
                                    <div className="sm:grid grid-cols-2 gap-2">
                                        <div className="flex flex-col">
                                            <label className="py-2" htmlFor="volunteer_3_year">Year</label>
                                            <input className="p-2 inline-block align-middle text-sm font-medium text-blue-900 xl:bg-gray-100 border border-gray-200 rounded-md pl-2" type="date" name="volunteer_3_year" />
                                        </div>
                                    </div>
                                </span>
                            </div>
                            <div className="flex justify-center border-t border-gray-200 pt-16 pb-12">
                                <button
                                    type="submit"
                                    className="w-max flex py-2 px-4 text-md tracking-widest font-medium text-white rounded-md bg-regal-blue hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                    <CogIcon className="h-6 pr-3 text-gray-50" />
                                    Generate
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Builder;
