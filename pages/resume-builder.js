import SideNav from "../components/sidenav";
import Builder from "../components/user/builder";
import MobileNav from "../components/mobilenav";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/dist/frontend";
import { useUser } from "@auth0/nextjs-auth0";
import Head from "next/head";

export default withPageAuthRequired(function Dashboard() {
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
          <Builder user={user} />
        </div>
      </div>
    </>
  )
})