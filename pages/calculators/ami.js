import * as React from 'react';
import Navbar from "../../components/ResumeNow/NavBar";
import Head from "next/head";

const calculate = (med, size, per) => {
    const value = ''
    const newMed = med * per;

    switch (size){
        case '1':
            value = newMed * 0.70;
            break;
        case '2':
            value = newMed * 0.80;
            break;
        case '3':
            value = newMed * 0.90;
            break;
        case '4':
            value = newMed * 1;
            break;
        case '5':
            value = newMed * 1.08;
            break;
        case '6':
            value = newMed * 1.16;
            break;
        case '7':
            value = newMed * 1.24;
            break;
        case '8':
            value = newMed * 1.32;
            break;
        case '9':
            value = newMed * 1.40;
            break;
        default:
            console.log("size too large");
    }
    return value
}

const ami = () => {
    const [value, setValue] = React.useState({});
    const [median, setMedian] = React.useState("");
    const [size, setSize] = React.useState("");
    const [percent, setPercent] = React.useState("");

    const handleChange = (evt) => {
        evt.preventDefault();
        const input = evt.target.value;

        if (evt.target.name == "median") {
            setMedian(input);
        } else if (evt.target.name == "percent") {
            setPercent(input);
        } else {
            setSize(input);
        }
    }

    console.log("goood: ", calculate(median, size, percent))
    
 
    return (
        <>
            <Head>
                <title>AMI Calculator</title>
            </Head>
            <div className="bg-tess-pattern bg-cover bg-center h-screen">
                <Navbar />
                <div>
                    <div className="mt-10 sm:mt-0 flex justify-center">
                        <div className="container mt-28 md:mt-56 lg:w-1/3 px-6">
                            <div className="mt-5 md:mt-0 md:col-span-2">
                                <form action="#" method="POST">
                                    <div className="shadow overflow-hidden sm:rounded-md">
                                        <div className="px-4 py-5 bg-white sm:p-6">
                                            <div className="text-center text-lg md:text-2xl text-regal-blue py-4 font-bold">
                                                <h1>Area Median Income Calculator</h1>
                                            </div>
                                            <div className="grid grid-cols-1 gap-6">
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="median" className="block text-lg md:text-2xl font-medium text-gray-700">
                                                        Median Income
                                                    </label>
                                                    <input
                                                        type="number"
                                                        name="median"
                                                        id="median"
                                                        autoComplete="median-name"
                                                        className="border-2 border-gray-900"
                                                        onChange={e => handleChange(e)}
                                                    />
                                                </div>
                                                <div>
                                                    <p>of</p>
                                                </div>
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="percent" className="block text-lg md:text-2xl font-medium text-gray-700">
                                                        Percent
                                                    </label>
                                                    <select
                                                        type="text"
                                                        name="percent"
                                                        id="percent"
                                                        autoComplete="percent-name"
                                                        className="border-2 border-gray-900"
                                                        onChange={e => handleChange(e)}
                                                    >
                                                        <option value="0.80">80%</option>
                                                        <option value="1">100%</option>
                                                        <option value="1.20">120%</option>
                                                    </select>
                                                </div>

                                                <div>
                                                    <p>for</p>
                                                </div>

                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="household" className="block text-lg md:text-2xl font-medium text-gray-700">
                                                        Household Size
                                                    </label>
                                                    <select
                                                        type="text"
                                                        name="household"
                                                        id="household"
                                                        autoComplete="household-name"
                                                        className="border-2 border-gray-900"
                                                        onChange={e => handleChange(e)}
                                                    >
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                        <option>6</option>
                                                        <option>7</option>
                                                        <option>8</option>
                                                        <option>9</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-4 py-3 bg-gray-100 text-right sm:px-6">
                                            <button
                                                type="submit"
                                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-regal-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-regal-blue"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ami;