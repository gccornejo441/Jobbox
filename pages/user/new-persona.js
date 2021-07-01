import Head from 'next/head'
import MobileNav from "../../components/mobilenav"
import SideNav from "../../components/sidenav"
import { useUser } from '@auth0/nextjs-auth0'
import UserCreate from '../../components/user/user-create'

const newPersona = () => {
    // importing user form auth0
    const { user } = useUser();

    return (
        <>
            <Head>
                <title>Jobbox - New Persona</title>
            </Head>
            <div class="lg:hidden">
                <MobileNav />
            </div>
            <div class="flex">
                <div class="h-auto px-4 pt-3 bg-regal-blue grid place-content-between hidden lg:block">
                    <SideNav />
                </div>
                <div class="w-screen">
                    <UserCreate />
                </div>
            </div>
        </>
    )
}

export default newPersona;