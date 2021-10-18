import Builder from "../components/ResumeNow/Builder";
import Head from "next/head";
import Navbar from "../components/ResumeNow/NavBar";

const ResumeNow = () => {
    return (
        <>
            <Head>
                <title>Resume Now</title>
            </Head>
            <div>
                <Navbar />
                <div className="mt-10">
                    <Builder />
                </div>
            </div>
        </>
    );
}

export default ResumeNow;