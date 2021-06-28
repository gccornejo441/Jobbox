import Image from 'next/image';
import {
    UserGroupIcon,
    BriefcaseIcon,
    ChatIcon
} from '@heroicons/react/outline'
import Head from 'next/head'

const MainBody = () => {
    return (
        <>
            <Head>
                <title>Jobster</title>
            </Head>
            <div class="flex flex-col my-16 relative w-screen h-huge">
                <div class="bg-hero-pattern h-screen bg-cover bg-center flex justify-center">
                    <div class="container z-30 flex flex-row-reverse">
                    <div class="flex flex-col mt-36 md:my-12 sm:mr-12  md:mr-24 xl:mr-24 pr-4 sm:pr-5">
                        <h1 class="text-6xl md:text-7xl lg:text-8xl text-regal-blue font-bold">Jobster</h1>
                        <p class="text-gray-50 text-md md:text-2xl">Display your skills and talents</p>
                    </div>
                </div>
                </div>
                <div class="opacity-40 md:opacity-95 hidden">
                    <Image src="/images/people-working.jpg" alt="A picture of a theater room" height={900} width={1400} />
                </div>
            </div>
            <div class="h-full">
                <ul class="md:grid md:grid-cols-3 gap-10  md:place-items-center">
                    <li class="text-center md:text-start p-10 bg-green-200 m-12 rounded-lg md:py-40">
                        <ChatIcon class="w-16 h-16 text-green-700 mx-auto md:mx-0" />
                        <h2 class="text-2xl text-green-700">Showcase your talents</h2>
                        <p class="text-md text-green-700">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </li>
                    <li class="text-center md:text-start p-10 bg-red-200 m-12 rounded-lg md:py-40">
                        <UserGroupIcon class="w-16 h-16 text-red-700 mx-auto md:mx-0" />
                        <h2 class="text-2xl text-red-700">Showcase your talents</h2>
                        <p class="text-md text-red-700">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </li>
                    <li class="text-center md:text-start p-10 bg-violet-200 m-12 rounded-lg md:py-40">
                        <BriefcaseIcon class="w-16 h-16 text-violet-700 mx-auto md:mx-0" />
                        <h2 class="text-2xl text-violet-700">Showcase your talents</h2>
                        <p class="text-md text-violet-700">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default MainBody;