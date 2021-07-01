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
                    <div class="bg-gray-50 bg-opacity-30 w-full flex justify-center">
                        <div class="container z-10 flex flex-row-reverse pr-3 sm:pr-0">
                            <div class="flex flex-col mt-36 md:my-12 sm:mr-12  md:mr-24 xl:mr-24 pr-4 sm:pr-8 text-right">
                                <h1 class="text-6xl md:text-7xl lg:text-8xl text-regal-blue font-bold my-2">Jobster</h1>
                                <p class="text-regal-blue text-md md:text-2xl my-2">Display your skills and talents</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="h-full">
                <ul class="md:grid md:grid-cols-3 gap-10 md:place-items-center">
                    <li class="text-center md:text-left p-10 bg-regal-blue m-12 rounded-lg md:py-40">
                        <ChatIcon class="w-16 h-16 text-green-300 mx-auto md:mx-0" />
                        <h2 class="text-2xl text-green-300">Showcase your talents</h2>
                        <p class="text-md text-green-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </li>
                    <li class="text-center md:text-left  p-10 bg-regal-blue m-12 rounded-lg md:py-40">
                        <UserGroupIcon class="w-16 h-16 text-green-300 mx-auto md:mx-0" />
                        <h2 class="text-2xl text-green-300">Showcase your talents</h2>
                        <p class="text-md text-green-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </li>
                    <li class="text-center md:text-left p-10 bg-regal-blue m-12 rounded-lg md:py-40">
                        <BriefcaseIcon class="w-16 h-16 text-green-300 mx-auto md:mx-0" />
                        <h2 class="text-2xl text-green-300">Showcase your talents</h2>
                        <p class="text-md text-green-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default MainBody;