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
                <div>
                    <Builder />
                </div>
            </div>
        </>
    );
}

export default ResumeNow;