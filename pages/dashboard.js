import SideNav from "../components/sidenav";
import SearchBar from "../components/searchbar";
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
        <title>Jobbox - Dashboard</title>
      </Head>
      <div className="lg:hidden">
        <MobileNav />
      </div>
      <div className="flex">
        <div className="h-screen px-4 pt-3 bg-regal-blue grid place-content-between hidden lg:block">
          <SideNav user={user} />
        </div>
        <div className="w-screen">
          <SearchBar />
        </div>
      </div>
    </>
  )
})