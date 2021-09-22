const FeedbackTextBox = () => {
    return (
        <>
            <div className="w-full flex justify-center mt-12 sm:mt-28 mx-3">
                <form action="" className="flex flex-col">
                    <label for="feedback" className="text-center text-2xl text-regal-blue font-semibold p-4">Feedback</label>
                    <textarea id="feedback" name="feedback" className="resize border pl-3 rounded-md w-full py-2 focus:outline-none" cols="100" rows="10" placeholder="Help us out by submitting any issues, or just let us know how we're doing.">
                    </textarea>
                    <button type="submit" className="w-max mx-auto mt-4 flex py-2 px-4 text-md tracking-widest font-medium text-white rounded-md bg-regal-blue hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">Submit Feeback</button>
                </form>
            </div>
        </>
    );
}

export default FeedbackTextBox;