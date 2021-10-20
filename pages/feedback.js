import SideNav from "../components/sidenav";
import FeedbackTextBox from "../components/feedbackTextBox";
import MobileNav from "../components/mobilenav";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/dist/frontend";
import { useUser } from "@auth0/nextjs-auth0";
import Head from "next/head";
import { connectToDatabase } from "../util/mongodb";

export default withPageAuthRequired(function Feedback({ resume }) {
  // importing user form auth0
  const { user } = useUser();

  return (
    <>
      <Head>
        <title>Jobbox - Feedback</title>
      </Head>
      <div className="lg:hidden">
        <MobileNav resume={resume} user={user} />
      </div>
      <div className="flex h-screen bg-tess-pattern bg-cover bg-center">
        <div className="flex flex-col justify-between bg-regal-blue hidden xl:flex">
          <div className="px-4 pt-3 bg-regal-blue grid place-content-between hidden xl:block">
            <SideNav resume={resume} user={user} />
          </div>
          <div className="text-center mb-10 text-gray-100 text-xs">
            <div>
              <h2>&copy; 2021 Jobbox.me</h2>
              <div>
                <a href="/privacy-policy" >Privacy Policy</a>
              </div>
              <div>
                <a href="/terms-of-service" >Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-screen flex justify-center">
          <FeedbackTextBox />
        </div>
      </div>
    </>
  )
});

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const resume = await db
    .collection(process.env.MONGO_USER_COLLECTION)
    .find()
    .toArray();

  return {
    props: {
      resume: JSON.parse(JSON.stringify(resume)),
    },
  };
}
