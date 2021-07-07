const ExpBox = ({ elements, det }) => {
    const incrementDet = det.map((item) => {
        return (
            <>
                <div class="grid">
                    <label for={item.id}>Experience{' '}{item.count}</label>
                    <input id={item.id} name={"exp_" + item.count} type="text" class="text-lg font-bold text-blue-900 bg-gray-1000 border border-gray-200 rounded-md md:w-1/2" rows="4" cols="70" />
                </div>
            </>
        )
    })
    const divElement = elements.map((item) => {
        return (
            <>
                <div class="grid grid-cols-2 gap-5">
                    <div class="flex flex-col">
                        <label for={item.id}>Job{' '}{item.count}</label>
                        <input id={item.id} name={"job_" + item.count} class="text-lg font-bold text-blue-900 bg-gray-50 border border-gray-200 rounded-md" rows="4" cols="70" />
                    </div>
                    <div class="grid grid-cols-2 gap-5">
                    <div class="flex flex-col">
                        <label for="school_3_start">Year Started</label>
                        <input class="inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2 " type="date" name={"exp_" + item.count} placeholder="" />
                    </div>
                    <div class="flex flex-col">
                        <label for="school_3_end">Year Ended</label>
                        <input class="inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2 " type="date" name={"exp_" + item.count} placeholder="" />
                    </div>

                    </div>
                    <span>{incrementDet}</span>
                </div>
            </>
        )
    })


    return (
        <>
            <div class="flex flex-col">
                <span>
                    {divElement}
                </span>
            </div>
        </>
    )
}

export default ExpBox;