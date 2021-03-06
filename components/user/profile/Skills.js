const Skills = (props) => {
    return (
        <>
            {props.resume.map((data, index) => {
                if (data.username === props.user.nickname) {
                    return (
                        <div key={index}>
                            <div className="border-b-4 mb-4 border-regal-blue">
                                <h3 className="text-regal-blue text-3xl font-bold">Skills</h3>
                            </div>
                            {typeof data.skills != 'string' && data.skills == null ? ( false ) : (
                                <>
                                    {data.skills.map((skill, index) => {
                                        return (
                                            <ul key={index}>
                                                <li className="bg-regal-blue text-white rounded-lg p-2 my-4 w-max tracking-widest">
                                                    {skill}
                                                </li>
                                            </ul>
                                        );
                                    })}
                                </>
                            )}
                        </div>
                    );
                };
            }
            )}
        </>
    );
}

export default Skills;