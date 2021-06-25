import Image from 'next/image';
import {
    UserGroupIcon,
    BriefcaseIcon,
    ChatIcon
} from '@heroicons/react/outline'

const MainBody = () => {
    return (
        <>
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
            <div class="bg-green-300 h-full">
                <ul class="grid grid-cols-3 gap-10 place-items-center">
                    <li class="text-center p-10">
                        <UserGroupIcon class="w-16 h-16 mx-auto text-gray-50" />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </li>
                    <li class="text-center p-10">
                        <BriefcaseIcon class="w-16 h-16 mx-auto text-gray-50" />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </li>
                    <li class="text-center p-10">
                        <ChatIcon class="w-16 h-16 mx-auto text-gray-50" />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default MainBody;