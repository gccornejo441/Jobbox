import { CogIcon } from "@heroicons/react/solid";
import ExpBox from "./ExpBox";
import SkillsModal from "./SkillsModal";


const Builder = (props) => {
    const userInfo = props.resume.find((data) => data.username === props.user.nickname);

    // This handles user phone format
    const changeNum = (e) => {
        e.preventDefault();
        if (e.target.value == e.target.value.match("[0-9]{3}-[0-9]{3}-[0-9]{4}")) {
            e.target.pattern = "[0-9]{3}-[0-9]{3}-[0-9]{4}";
        } else {
            return;
        }
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
                            <form action="/api/handler" method="POST" className="m-5 grid grid-cols-1">
                                <div className="py-3 xl:px-4 md:w-auto">
                                    <span className="inline-block align-middle text-2xl text-regal-blue">General Information</span>
                                    <span className="xl:grid grid-cols-2 gap-5">
                                        <div className="flex flex-col">
                                            <label className="py-2" htmlFor="first_name">First Name*</label>
                                            <input className="text-lg p-1 font-bold text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2" defaultValue={userInfo ? userInfo.first_name : ''} type="text" name="first_name" required />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="py-2" htmlFor="last_name">Last Name</label>
                                            <input className="text-lg p-1 font-bold text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2" defaultValue={userInfo ? userInfo.last_name : ''} type="text" name="last_name" />
                                        </div>
                                    </span>

                                    <span className="xl:grid grid-cols-3 gap-5">
                                        <div className="flex flex-col">
                                            <label className="py-2" htmlFor="city">City</label>
                                            <input className="text-lg p-1 font-bold text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2" defaultValue={userInfo ? userInfo.city : ''} type="text" name="city" />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="py-2" htmlFor="state">State</label>
                                            <input className="text-lg p-1 font-bold text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2" defaultValue={userInfo ? userInfo.state : ''} type="text" name="state" />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="py-2" htmlFor="zip">Zip Code</label>
                                            <input className="text-lg p-1 font-bold text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2" defaultValue={userInfo ? userInfo.zip : ''} type="text" name="zip" />
                                        </div>
                                    </span>
                                    <span className="xl:grid grid-cols-2 gap-5">
                                        <div className="flex flex-col">
                                            <label className="py-2" htmlFor="email">Email</label>
                                            <input className="text-lg p-1 font-bold text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2" defaultValue={userInfo ? userInfo.email : ''} type="email" name="email" />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="py-2" htmlFor="phone">Phone</label>
                                            <input className="text-lg p-1 font-bold text-blue-900 text-regal-blue md:bg-gray-100 border border-gray-200 rounded-md pl-2" pattern={"[0-9]{10}|[0-9]{3}-[0-9]{3}-[0-9]{4}"} onChange={e => changeNum(e)} defaultValue={userInfo ? userInfo.phone : ''} type="tel" name="phone" placeholder="123-456-7890 or 1234567890" />
                                        </div>
                                    </span>
                                    <span className="xl:grid grid-cols-1 gap-5">
                                        <div className="flex flex-col">
                                            <label className="py-2" htmlFor="about_me">About Me</label>
                                            <textarea className="text-lg font-bold text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2" defaultValue={userInfo ? userInfo.about_me : ''} type="text" name="about_me" />
                                        </div>
                                    </span>
                                    <div className="border-b border-gray-200 w-full my-5"></div>
                                    <div>
                                        <span className="inline-block align-middle text-2xl text-regal-blue">Education</span>
                                        <div className="xl:grid grid-cols-2 gap-2">
                                            <div className="flex flex-col">
                                                <label className="py-2" htmlFor="school_1">School 1</label>
                                                <input className="p-1 inline-block align-middle text-lg font-medium text-blue-900 mr-2 md:bg-gray-100 border border-gray-200 rounded-md pl-2" defaultValue={userInfo ? userInfo.school_1.school : ''} name="school_1" />
                                                <label className="py-2" htmlFor="school_degree_1">Degree</label>
                                                <input placeholder="B.S. in Biological Sciences" className="p-1 inline-block align-middle text-lg font-medium text-blue-900 mr-2 md:bg-gray-100 border border-gray-200 rounded-md pl-2" defaultValue={userInfo ? userInfo.school_1.degree : ''} name="school_degree_1" />
                                            </div>
                                            <div className="sm:grid grid-cols-2 gap-2">
                                                <div className="flex flex-col">
                                                    <label className="py-2" htmlFor="school_1_start">Year Started</label>
                                                    <input className="p-2 inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2" defaultValue={userInfo ? userInfo.school_1.start : ''} type="date" name="school_1_start" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <label className="py-2" htmlFor="school_1_end">Year Ended</label>
                                                    <input className="p-2 inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2" defaultValue={userInfo ? userInfo.school_1.end : ''} type="date" name="school_1_end" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="xl:grid grid-cols-2 gap-2">
                                            <div className="flex flex-col">
                                                <label className="py-2" htmlFor="school_2">School 2</label>
                                                <input className="p-1 inline-block align-middle text-lg font-medium text-blue-900 mr-2 md:bg-gray-100 border border-gray-200 rounded-md pl-2" defaultValue={userInfo ? userInfo.school_2.school : ''} name="school_2" />
                                                <label className="py-2" htmlFor="school_degree_2">Degree</label>
                                                <input placeholder="M.S. in Biological Sciences" className="p-1 inline-block align-middle text-lg font-medium text-blue-900 mr-2 md:bg-gray-100 border border-gray-200 rounded-md pl-2" defaultValue={userInfo ? userInfo.school_2.degree : ''} name="school_degree_2" />
                                            </div>
                                            <div className="sm:grid grid-cols-2 gap-2">
                                                <div className="flex flex-col">
                                                    <label className="py-2" htmlFor="school_2_start">Year Started</label>
                                                    <input className="p-2 inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2" defaultValue={userInfo ? userInfo.school_2.start : ''} type="date" name="school_2_start" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <label className="py-2" htmlFor="school_2_end">Year Ended</label>
                                                    <input className="p-2 inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2" defaultValue={userInfo ? userInfo.school_2.end : ''} type="date" name="school_2_end" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="xl:grid grid-cols-2 gap-2">
                                            <div className="flex flex-col">
                                                <label className="py-2" htmlFor="school_3">School 3</label>
                                                <input className="p-1 inline-block align-middle text-lg font-medium text-blue-900 mr-2 md:bg-gray-100 border border-gray-200 rounded-md pl-2" defaultValue={userInfo ? userInfo.school_3.school : ''} name="school_3" />
                                                <label className="py-2" htmlFor="school_degree_3">Degree</label>
                                                <input placeholder="Ph.D. in Biological Sciences" className="p-1 inline-block align-middle text-lg font-medium text-blue-900 mr-2 md:bg-gray-100 border border-gray-200 rounded-md pl-2" defaultValue={userInfo ? userInfo.school_3.degree : ''} name="school_degree_3" />
                                            </div>
                                            <div className="sm:grid grid-cols-2 gap-2">
                                                <div className="flex flex-col">
                                                    <label className="py-2" htmlFor="school_3_start">Year Started</label>
                                                    <input className="p-2 inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2" defaultValue={userInfo ? userInfo.school_3.start : ''} type="date" name="school_3_start" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <label className="py-2" htmlFor="school_3_end">Year Ended</label>
                                                    <input className="p-2 inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2" defaultValue={userInfo ? userInfo.school_3.end : ''} type="date" name="school_3_end" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* EXPERIENCE - START */}
                                    <div className="border-b border-gray-200 w-full my-5"></div>
                                    <span className="inline-block align-middle text-2xl text-regal-blue">Experience</span>

                                    {/* EXPERIENCE - START */}

                                    <ExpBox userInfo={userInfo} />

                                    {/* EXPERIENCE - END */}

                                    <div className="border-b border-gray-200 w-full my-5"></div>
                                    <SkillsModal userInfo={userInfo} />
                                    <div className="border-b border-gray-200 w-full my-5"></div>
                                    <span className="inline-block align-middle text-2xl text-regal-blue">Socials</span>
                                    <span className="xl:grid grid-cols-3 gap-5 pb-12">
                                        <div className="flex flex-col">
                                            <label className="py-2" htmlFor="linkedin">LinkedIn</label>
                                            <input className="text-lg p-1 font-bold text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2" defaultValue={userInfo ? userInfo.linkedin : ''} type="text" name="linkedin" />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="py-2" htmlFor="twitter">Twitter</label>
                                            <input className="text-lg p-1 font-bold text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2" defaultValue={userInfo ? userInfo.twitter : ''} type="text" name="twitter" />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="py-2" htmlFor="github">Github</label>
                                            <input className="text-lg p-1 font-bold text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2" defaultValue={userInfo ? userInfo.github : ''} type="text" name="github" />
                                        </div>
                                    </span>
                                    <div className="border-b border-gray-200 w-full my-5"></div>
                                    <span className="inline-block align-middle text-2xl text-regal-blue">Internships & Volunteer Work</span>
                                    <span className="xl:grid grid-cols-2 gap-5 pb-12">
                                        <div className="flex flex-col">
                                            <label className="py-2" htmlFor="internship_1">Internship 1</label>
                                            <input className="p-1 inline-block align-middle text-lg font-medium text-blue-900 mr-2 md:bg-gray-100 border border-gray-200 rounded-md pl-2" defaultValue={userInfo ? userInfo.internship[0].internship_1 : ''} name="internship_1" />
                                        </div>
                                        <div className="sm:grid grid-cols-2 gap-2">
                                            <div className="flex flex-col">
                                                <label className="py-2" htmlFor="internship_1_year">Year</label>
                                                <input className="p-2 inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2" defaultValue={userInfo ? userInfo.internship[0].internship_year : ''} type="date" name="internship_1_year" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="py-2" htmlFor="internship_2">Internship 2</label>
                                            <input className="p-1 inline-block align-middle text-lg font-medium text-blue-900 mr-2 md:bg-gray-100 border border-gray-200 rounded-md pl-2" defaultValue={userInfo ? userInfo.internship[1].internship_2 : ''} name="internship_2" />
                                        </div>
                                        <div className="sm:grid grid-cols-2 gap-2">
                                            <div className="flex flex-col">
                                                <label className="py-2" htmlFor="internship_2_year">Year</label>
                                                <input className="p-2 inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2" defaultValue={userInfo ? userInfo.internship[1].internship_year : ''} type="date" name="internship_2_year" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="py-2" htmlFor="internship_3">Internship 3</label>
                                            <input className="p-1 inline-block align-middle text-lg font-medium text-blue-900 mr-2 md:bg-gray-100 border border-gray-200 rounded-md pl-2" defaultValue={userInfo ? userInfo.internship[2].internship_3 : ''} name="internship_3" />
                                        </div>
                                        <div className="sm:grid grid-cols-2 gap-2">
                                            <div className="flex flex-col">
                                                <label className="py-2" htmlFor="internship_3_year">Year</label>
                                                <input className="p-2 inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2" defaultValue={userInfo ? userInfo.internship[2].internship_year : ''} type="date" name="internship_3_year" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="py-2" htmlFor="volunteer_1">Volunteer 1</label>
                                            <input className="p-1 inline-block align-middle text-lg font-medium text-blue-900 mr-2 md:bg-gray-100 border border-gray-200 rounded-md pl-2" defaultValue={userInfo ? userInfo.volunteer[0].volunteer_1 : ''} name="volunteer_1" />
                                        </div>
                                        <div className="sm:grid grid-cols-2 gap-2">
                                            <div className="flex flex-col">
                                                <label className="py-2" htmlFor="volunteer_1_year">Year</label>
                                                <input className="p-2 inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2" defaultValue={userInfo ? userInfo.volunteer[0].volunteer_year : ''} type="date" name="volunteer_1_year" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="py-2" htmlFor="volunteer_2">Volunteer 2</label>
                                            <input className="p-1 inline-block align-middle text-lg font-medium text-blue-900 mr-2 md:bg-gray-100 border border-gray-200 rounded-md pl-2" defaultValue={userInfo ? userInfo.volunteer[1].volunteer_2 : ''} name="volunteer_2" />
                                        </div>
                                        <div className="sm:grid grid-cols-2 gap-2">
                                            <div className="flex flex-col">
                                                <label className="py-2" htmlFor="volunteer_2_year">Year</label>
                                                <input className="p-2 inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2" defaultValue={userInfo ? userInfo.volunteer[1].volunteer_year : ''} type="date" name="volunteer_2_year" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="py-2" htmlFor="volunteer_3">Volunteer 3</label>
                                            <input className="p-1 inline-block align-middle text-lg font-medium text-blue-900 mr-2 md:bg-gray-100 border border-gray-200 rounded-md pl-2" defaultValue={userInfo ? userInfo.volunteer[2].volunteer_3 : ''} name="volunteer_3" />
                                        </div>
                                        <div className="sm:grid grid-cols-2 gap-2">
                                            <div className="flex flex-col">
                                                <label className="py-2" htmlFor="volunteer_3_year">Year</label>
                                                <input className="p-2 inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2" defaultValue={userInfo ? userInfo.volunteer[2].volunteer_year : ''} type="date" name="volunteer_3_year" />
                                            </div>
                                        </div>
                                    </span>
                                </div>
                                <div className="flex justify-center border-t border-gray-200 pt-16 pb-12">
                                    <div className="flex flex-col invisible hidden">
                                        <label className="py-2" htmlFor="user"></label>
                                        <input type="text" name="username" value={props.user.nickname} />
                                    </div>
                                    <button type="submit" className="w-max flex py-2 px-4 text-md tracking-widest font-medium text-white rounded-md bg-regal-blue hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"><CogIcon className="h-6 pr-3 text-gray-50" />Generate</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Builder;