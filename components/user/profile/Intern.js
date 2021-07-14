const Intern = (props) => {
    return (
        <>
            {props.resume.map((data) => {
                if (data.username === props.user.nickname) {
                    return (
                        <>
                            <div>
                                <div class="border-b-4 border-regal-blue">
                                    <h1 class="text-2xl text-regal-blue uppercase font-bold pl-4 pt-4">Internships & Volunteer Work</h1>
                                </div>
                                <div>
                                    <div class="flex flex-col text-base pl-4 pt-2">
                                        {data.volunteer.map((item) => {
                                            return (
                                                <ul>
                                                    <li>
                                                        <p class="text-regal-blue">
                                                            {item.volunteer_1}
                                                        </p>
                                                        <p class="text-blue-700">{item.volunteer_1_year}</p>
                                                    </li>
                                                    <li>
                                                        <p class="text-regal-blue">
                                                            {item.volunteer_2}
                                                        </p>
                                                        <p class="text-blue-700">{item.volunteer_2_year}</p>
                                                    </li>
                                                    <li>
                                                        <p class="text-regal-blue">
                                                            {item.volunteer_3}
                                                        </p>
                                                        <p class="text-blue-700">{item.volunteer_3_year}</p>
                                                    </li>
                                                </ul>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
            }
            )}
        </>
    );
}

export default Intern;