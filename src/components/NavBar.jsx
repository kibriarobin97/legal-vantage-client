import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/services'>Services</NavLink></li>
                        <li>
                            <a>Dashboard</a>
                            <ul className="p-2">
                                <li><a>Add Service</a></li>
                                <li><a>Manage Service</a></li>
                                <li><a>Booked-Services</a></li>
                                <li><a>Service-To-Do</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/services'>Services</NavLink></li>
                    <li>
                        <details>
                            <summary>Dashboard</summary>
                            <ul className="p-1 w-40">
                                <li><a>Add Service</a></li>
                                <li><a>Manage Service</a></li>
                                <li><a>Booked-Services</a></li>
                                <li><a>Service-To-Do</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/login' className="btn bg-[#83B582] text-white font-bold hover:bg-orange-400 duration-300">Login</Link>
            </div>
        </div>
    );
};

export default NavBar;