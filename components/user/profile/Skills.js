const Skills = (props) => {
    return (
        <>
            {props.resume.map((data) => {
                if (data.username === props.user.nickname) {
                    return (
                        <>
                            <div className="border-b-4 mb-4 border-regal-blue">
                                <h3 className="text-regal-blue text-3xl font-bold">Skills</h3>
                            </div>
                            {data.skills !== null ? (data.skills.map((skill) => {
                                return (
                                    <ul>
                                        <li className="bg-regal-blue text-white rounded-lg p-2 my-4 w-max tracking-widest">
                                            {skill}
                                        </li>
                                    </ul>
                                )
                            })
                            ) : (
                                ""
                            )
                            }
                        </>
                    );
                };
            }
            )}
        </>
    );
}

export default Skills;