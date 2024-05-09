import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <footer className="px-4 py-8 bg-slate-200">
            <div className="container max-w-7xl flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between my-5 sm:space-y-0">
                <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
                    <div className="flex items-center justify-center flex-shrink-0  h-12 rounded-full">
                            <div className="flex flex-col justify-center items-center gap-2">
                                <img className="w-12 h-12" src={logo} alt="" />
                                <p className="text-xl font-bold">Legal-Vantage</p>
                            </div>
                    </div>
                    <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
                        <li>
                            <a rel="noopener noreferrer" href="#">Terms of Use</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#">Privacy</a>
                        </li>
                    </ul>
                </div>
                <ul className="flex flex-wrap pt-5 lg:pt-0 space-x-4 sm:space-x-8">
                    <li>
                        <a rel="noopener noreferrer" href="#">Instagram</a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" href="#">Facebook</a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" href="#">Twitter</a>
                    </li>
                </ul>
            </div>
            <div className="pt-6 text-sm text-center dark:text-gray-600">© 2024 Legal-Vantage. All Rights Reserved.</div>
        </footer>
    );
};

export default Footer;