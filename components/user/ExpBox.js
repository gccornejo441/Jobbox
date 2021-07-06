

const ExpBox = (props) => {
    const divElement = props.elements.map((item) => {
        return (
            <>
            <div class="grid">
                <label for={item.id}>Job{' '}{item.count}</label>
                <input id={item.id} name={"job_" + item.count} class="text-lg font-bold text-blue-900 bg-gray-50 border border-gray-200 rounded-md" rows="4" cols="70" />

                <label for={item.id}>Experience{' '}{item.count}</label>
                <textarea id={item.id} name={"exp_" + item.count} class="text-lg font-bold text-blue-900 bg-gray-50 border border-gray-200 rounded-md" rows="4" cols="70" />
            </div>
            </>
        )
    })

    return (
        <>
            <div class="flex flex-col">{divElement}</div>
        </>
    )
}

export default ExpBox;