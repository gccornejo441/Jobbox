import { useUser } from '@auth0/nextjs-auth0';

const SignIn = () => {
    const { user, error, isLoading } = useUser();
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
    alert("user: ", user.name)
    return (
        <>
            <div class="flex justify-center mt-32 md:mt-72">
                <div class="w-full max-w-xs">
                    <form action="/api/userbase" method="POST" class="bg-regal-blue shadow-md rounded-md px-8 pt-6 pb-8 mb-4">
                        <div class="mb-4">
                            <label class="block text-gray-50 text-sm font-bold mb-2" for="username">
                                Username
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-50 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                        </div>
                        <div class="mb-6">
                            <label class="block text-gray-50 text-sm font-bold mb-2" for="password">
                                Password
                            </label>
                            <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-50 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" id="password" type="password" placeholder="******************" />
                            <p class="text-red-500 text-xs italic">Please choose a password.</p>
                        </div>
                        <div class="flex items-center justify-between">
                            <button class="bg-green-400 hover:bg-green-300 text-regal-blue font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
                                Sign In
                            </button>
                            <div>
                                Welcome {user.name}! <a href="/api/auth/login" data-testid="login">Login</a>
                            </div>
                            <a class="inline-block align-baseline font-bold text-sm text-gray-50 hover:text-green-300" href="#">
                                Forgot Password?
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignIn;