

const ExpBox = (props) => {
    const divElement = props.elements.map(( item ) => {
        return (
            <>
                <label for={item.id}>Experience {item.title}</label>
                <textarea id={item.id} name={item.id} class="text-lg font-bold text-blue-900 bg-gray-50 border border-gray-200 rounded-md" rows="4" cols="70" />
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