import Builder from "../components/ResumeNow/Builder";
import Head from "next/head";

const ResumeNow = () => {
    return (
        <>
            <Head>
                <title>Resume Now</title>
            </Head>
            <div>
                <Builder />
            </div>
        </>
    );
}

export default ResumeNow;