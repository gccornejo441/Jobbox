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
      <div className="flex">
        <div className="h-screen px-4 pt-3 bg-regal-blue grid place-content-between hidden lg:block">
          <SideNav resume={resume} user={user} />
        </div>
        <div className="w-screen flex justify-center">
          <FeedbackTextBox/>
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
