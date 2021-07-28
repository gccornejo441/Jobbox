const Skills = (props) => {
    const userInDB = props.resume.find((data) => data.username === props.user.nickname);
    return (
        <>
            {userInDB != undefined ? props.resume.map((data, index) => {
                if (data.username === props.user.nickname) {
                    return (
                        <div key={index}>
                            <div className="border-b-4 mb-4 border-regal-blue">
                                <h3 className="text-regal-blue text-3xl font-bold">Skills</h3>
                            </div>
                            {data.skills !== null ? (data.skills.map((skill, index) => {
                                return (
                                    <ul key={index} >
                                        <li className="bg-regal-blue text-white rounded-lg p-2 my-4 w-max tracking-widest">
                                            {skill}
                                        </li>
                                    </ul>
                                );
                            })
                            ) : ("")
                            }
                        </div>
                    );
                };
            }
            ) : (
                <div >
                    <div className="border-b-4 mb-4 border-regal-blue">
                        <h3 className="text-regal-blue text-3xl font-bold">Skills</h3>
                    </div>
                    <ul >
                        <li className="bg-regal-blue text-white rounded-lg p-2 my-4 w-max tracking-widest">
                            Payroll
                        </li>
                        <li className="bg-regal-blue text-white rounded-lg p-2 my-4 w-max tracking-widest">
                            Oral Communications
                        </li>
                        <li className="bg-regal-blue text-white rounded-lg p-2 my-4 w-max tracking-widest">
                            Detailed and Organized
                        </li>
                        <li className="bg-regal-blue text-white rounded-lg p-2 my-4 w-max tracking-widest">
                            Customer Service
                        </li>
                        <li className="bg-regal-blue text-white rounded-lg p-2 my-4 w-max tracking-widest">
                            Team Building & Leadership
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
}

export default Skills;