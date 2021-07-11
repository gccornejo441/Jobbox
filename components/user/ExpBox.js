import DutyBox from './DutyBox';


const ExpBox = ({ elements }) => {

    const divElement = elements.map((item) => {
        return (
            <>
                <div class="flex flex-row-reverse">
                </div>
                <div class="md:grid grid-cols-2 gap-5">
                    <div class="md:grid grid-cols-2 gap-5">
                        <div class="flex flex-col">
                            <label for={item.id}>{item.title}{' '}{item.count}</label>
                            <input id={item.id} name={item.count ? "job_" + item.count : "job_current"} class="text-lg font-bold text-blue-900 bg-gray-50 border border-gray-200 rounded-md" rows="4" cols="70" />
                        </div>
                        <div class="flex flex-col">
                            <label for={item.id}>{item.current}{' '}{item.count}</label>
                            <input id={item.id} name={item.count ? "job_" + item.count : "job_current"} class="text-lg font-bold text-blue-900 bg-gray-50 border border-gray-200 rounded-md" rows="4" cols="70" />
                        </div>
                    </div>
                    <div class="md:grid grid-cols-2 gap-5 mt-4 md:mt-0 md:mb-0  mb-7">
                        <div class="flex flex-col">
                            <label for="job_date_start">Year Started</label>
                            <input class="inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2 " type="date" name={item.count ? "job_date_start_" + item.count : "job_date_start_current"} placeholder="" />
                        </div>
                        <div class="flex flex-col">
                            <label for="job_date_end">Year Ended</label>
                            <input class="inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2 " type="date" name={item.count ? "job_date_end_" + item.count : "job_date_end_current"} placeholder="" />
                        </div>
                    </div>
                </div>
                <div class="mb-6">
                    <DutyBox count={item.count} />
                </div>
            </>
        );
    });


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