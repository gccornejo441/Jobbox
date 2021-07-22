const Intern = (props) => {
    return (
        <>
            {props.resume.map((data, index) => {
                if (data.username === props.user.nickname) {
                    return (
                            <div key={index}>
                                <div className="border-b-4 border-regal-blue">
                                    <h1 className="text-2xl text-regal-blue uppercase font-bold pl-4 pt-4">Internships & Volunteer Work</h1>
                                </div>
                                <div>
                                    <div className="flex flex-col text-base pl-4 pt-2">
                                        {data.volunteer.map((item, index) => {
                                            return (
                                                <ul key={index}>
                                                    <li>
                                                        <p className="text-regal-blue">
                                                            {item.volunteer_1}
                                                        </p>
                                                        <p className="text-blue-700">{item.volunteer_1_year}</p>
                                                    </li>
                                                    <li>
                                                        <p className="text-regal-blue">
                                                            {item.volunteer_2}
                                                        </p>
                                                        <p className="text-blue-700">{item.volunteer_2_year}</p>
                                                    </li>
                                                    <li>
                                                        <p className="text-regal-blue">
                                                            {item.volunteer_3}
                                                        </p>
                                                        <p className="text-blue-700">{item.volunteer_3_year}</p>
                                                    </li>
                                                </ul>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                    )
                }
            }
            )}
        </>
    );
}

export default Intern;