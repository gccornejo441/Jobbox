
const menu = ["Dashboard", "Statistics", "Activity", "Job Update", "Schedule", "Chat", "Setting"]

const SideNav = () => {

    let menuItems = menu.map(item => (
        <div class="border-2 border-gray-900">
            <span><h3>{item}</h3></span>
        </div>
    ))
    return (
        <>
            <div class="border-2 border-gray-900">
                <div>
                    <div>
                        <div>
                            <div class="border-2 border-gray-900">
                                <span><h1>Racket</h1></span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div class="border-2 border-gray-900">
                                <span><h2>Menu</h2></span>
                            </div>
                            <div>
                                {menuItems}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SideNav;