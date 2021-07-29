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
                                         
                                                <ul>
                                                    <li>
                                                        <p className="text-regal-blue">
                                                            {data.volunteer[0].volunteer_1}
                                                        </p>
                                                        <p className="text-blue-700">{data.volunteer[0].volunteer_year.slice(0, -3)}</p>
                                                    </li>
                                                    <li>
                                                        <p className="text-regal-blue">
                                                            {data.volunteer[1].volunteer_2}
                                                        </p>
                                                        <p className="text-blue-700">{data.volunteer[1].volunteer_year.slice(0, -3)}</p>
                                                    </li>
                                                    <li>
                                                        <p className="text-regal-blue">
                                                            {data.volunteer[2].volunteer_3}
                                                        </p>
                                                        <p className="text-blue-700">{data.volunteer[2].volunteer_year.slice(0, -3)}</p>
                                                    </li>
                                                </ul>
                                           
                                      
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