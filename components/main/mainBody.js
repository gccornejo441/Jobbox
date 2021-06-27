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
            <div class="grid grid-cols-2 gap-4 my-24">
                <div>
                    <Image src="/images/man-drilling.jpg" alt="A picture of a theater room" height={900} width={1400} />
                </div>
                <div>
                    <div class="flex flex-col my-12">
                        <h1 class="text-4xl font-bold">Jobster</h1>
                        <p>Display your skills and talents</p>
                    </div>
                </div>
            </div>
            <div class="h-full">
                <ul class="grid md:grid-cols-3 gap-10 place-items-center">
                    <li class="text-start p-10 bg-green-200 py-40">
                        <ChatIcon class="w-16 h-16 text-regal-blue" />
                        <h2 class="text-2xl text-regal-blue">Showcase your talents</h2>
                        <p class="text-md text-regal-blue">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </li>
                    <li class="text-start p-10 bg-red-200 py-40">
                        <UserGroupIcon class="w-16 h-16 text-regal-blue" />
                        <h2 class="text-2xl text-regal-blue">Showcase your talents</h2>
                        <p class="text-md text-regal-blue">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </li>
                    <li class="text-start p-10 bg-violet-200 py-40">
                        <BriefcaseIcon class="w-16 h-16 text-regal-blue" />
                        <h2 class="text-2xl text-regal-blue">Showcase your talents</h2>
                        <p class="text-md text-regal-blue">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default MainBody;