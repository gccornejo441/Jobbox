import { useRef } from 'react';
import { useFetchUser } from '../../lib/auth0/user';
// import Layout from '../../components/layout'

const SignIn = () => {

    const showpass = useRef();
    const showpass_two = useRef();

    // This is to show password click of 'show' button.

    const showPwd = () => {
        showpass.current.type === 'password' ? showpass.current.type = 'text' : showpass.current.type = 'password';
        showpass_two.current.type === 'password' ? showpass_two.current.type = 'text' : showpass_two.current.type = 'password';
    }

    const { user, loading } = useFetchUser()

    return (
        <Layout user={user} loading={loading}>
            {/* <div class="flex justify-center mt-32 md:mt-72"> */}
            {loading && <p>Loading login info...</p>}

            {!loading && !user && (
                <>
                    <p>
                        To test the login click in <i>Login</i>
                    </p>
                    <p>
                        Once you have logged in you should be able to click in{' '}
                        <i>Profile</i> and <i>Logout</i>
                    </p>
                </>
            )}

            {user && (
                <>
                    <h4>Rendered user info on the client</h4>
                    <img src={user.picture} alt="user picture" />
                    <p>nickname: {user.nickname}</p>
                    <p>name: {user.name}</p>
                </>
            )}
            {/* <div class="w-full max-w-xs">
                    <form action="/api/userbase" method="POST" class="bg-regal-blue shadow-md rounded-md px-8 pt-6 pb-8 mb-4">
                        <div class="mb-4">
                            <label class="block text-gray-50 text-sm font-bold mb-2" for="username">
                                Username
                            </label>
                            <input id="username" type="text" placeholder="Username" name="username" class="shadow appearance-none border border-green-300 rounded w-full py-2 px-3 text-regal-blue leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div class="mb-1">
                            <label for="email" class="block text-gray-50 text-sm font-bold mb-2">Email address</label>
                            <input type="email" id="email" name="email" class="shadow appearance-none border border-green-300 rounded w-full py-2 px-3 text-regal-blue mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email Address"
                                required autofocus />
                        </div>
                        <div class="mb-1">
                            <div class="flex flex-row-reverse">
                                <button class="border border-green-300 bg-gray-50 rounded-md p-2" type="button" onClick={() => showPwd()}>Show</button>
                            </div>
                            <label class="block text-gray-50 text-sm font-bold mb-2" for="password">
                                Password
                            </label>
                            <input ref={showpass} class="shadow appearance-none border border-green-300 rounded w-full py-2 px-3 text-regal-blue mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" id="password" type="password" placeholder="******************" />
                            <p class="text-green-300 text-xs italic">Eight or more characters.</p>
                        </div>
                        <div class="mb-6">
                            <label class="block text-gray-50 text-sm font-bold mb-2" for="password">
                                Comfirm Password
                            </label>
                            <input ref={showpass_two} class="shadow appearance-none border border-green-300 rounded w-full py-2 px-3 text-regal-blue mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" id="password" type="password" placeholder="******************" />
                            <p class="text-green-300 text-xs italic">Please comfirm your password password.</p>
                        </div>
                        <div class="flex items-center justify-between">
                            <button class="bg-green-400 hover:bg-green-300 text-regal-blue font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
                                Register
                            </button>
                            <a class="inline-block align-baseline font-bold text-sm text-gray-50 hover:text-green-300" href="#">
                                Forgot Password?
                            </a>
                        </div>
                    </form>
                </div>
            </div> */}
            </Layout>
            )
}

export default SignIn;