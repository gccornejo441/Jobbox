import SideNav from "../components/sidenav";
import Builder from "../components/user/builder";
import MobileNav from "../components/mobilenav";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/dist/frontend";
import { useUser } from "@auth0/nextjs-auth0";
import Head from "next/head";
import { connectToDatabase } from "../util/mongodb";

export default withPageAuthRequired(function Dashboard({ resume }) {
  // importing user form auth0
  const { user } = useUser();

  return (
    <>
      <Head>
        <title>Jobbox - Resume Builder</title>
      </Head>
      <div className="lg:hidden">
        <MobileNav />
      </div>
      <div className="flex">
        <div className="h-auto px-4 pt-3 bg-regal-blue grid place-content-between hidden lg:block">
          <SideNav />
        </div>
        <div className="w-screen">
          <Builder user={user} resume={resume} />
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
