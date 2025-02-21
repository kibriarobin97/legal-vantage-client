import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <section className="bg-white dark:bg-gray-900 ">
            <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
                <div className="wf-ull lg:w-1/2">
                    <p className="text-sm font-medium text-blue-500 dark:text-blue-400">404 error</p>
                    <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Page not found</h1>
                    <p className="mt-4 text-gray-500 dark:text-gray-400">Sorry, the page you are looking for doesn't exist.Here are some helpful links:</p>

                    <div className="flex items-center mt-6 gap-x-3">
                        <Link to='/'>
                            <button className="w-full px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-[#83B582] font-bold rounded-lg shrink-0 sm:w-auto hover:bg-orange-400">
                                Take me Home
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
                    <img className="w-full max-w-xl lg:mx-auto" src="https://yoast.com/app/uploads/2016/10/404_error_checking_FI.jpg" alt="" />
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;