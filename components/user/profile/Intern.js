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
                                    <ul>
                                        <li>
                                            <div class="flex flex-col text-base pl-4 pt-2">
                                                <p class="text-regal-blue">{data.school_1}</p>
                                                <p class="text-blue-700">09/2020</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="flex flex-col text-base pl-4 pt-2">
                                                <p class="text-regal-blue">Connected Camps Monitor</p>
                                                <p class="text-blue-700">11/2020</p>
                                            </div>
                                        </li>
                                    </ul>
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