import SideNav from "../../components/sidenav";
import Builder from "../../components/Pro-Builder/Builder";
import MobileNav from "../../components/mobilenav";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/dist/frontend";
import { useUser } from "@auth0/nextjs-auth0";
import Head from "next/head";
import { connectToDatabase } from "../../util/mongodb";


export default withPageAuthRequired(function Dashboard({ resume }) {
  // importing user form auth0
  const { user } = useUser();

  return (
    <>
      <Head>
        <title>Jobbox - Resume Builder</title>
      </Head>
      <div className="xl:hidden absolute w-full xl:relative xl:w-auto">
        <MobileNav resume={resume} user={user} />
      </div>
      <div className="flex">
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
        <div className="w-full">
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
