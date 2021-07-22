import Head from "next/head";
import MobileNav from "../../components/mobilenav";
import SideNav from "../../components/sidenav";
import { useUser } from "@auth0/nextjs-auth0";
import Builder from "../../components/user/builder";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/dist/frontend";

export default withPageAuthRequired(function settings() {
    // importing user form auth0
    const { user } = useUser();

    return (
        <>
            <Head>
                <title>Jobbox - Settings</title>
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

