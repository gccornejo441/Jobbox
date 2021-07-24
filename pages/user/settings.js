import Head from "next/head";
import { useUser } from "@auth0/nextjs-auth0";
import UserSettings from "../../components/user/UserSettings";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/dist/frontend";

export default withPageAuthRequired(function settings() {
    // importing user form auth0
    const { user } = useUser();

    return (
        <>
            <Head>
                <title>Jobbox - Settings</title>
            </Head>
            <div className="flex">
                <div className="w-screen">
                    <UserSettings user={user}/>
                </div>
            </div>
        </>
    )
})

