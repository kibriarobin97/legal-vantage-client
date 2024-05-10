import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import defaultPhoto from "../assets/user.png";
import logo from "../assets/logo.png"
import toast from "react-hot-toast";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext)
    console.log(user)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("Successfully Logout")
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to='/'  className={({ isActive }) => isActive ? "font-bold bg-[#83B582] hover:bg-[#83B582] text-white rounded-md" : "font-bold"}>Home</NavLink></li>
                        <li><NavLink to='/services' className={({ isActive }) => isActive ? "font-bold bg-[#83B582] hover:bg-[#83B582] text-white rounded-md" : "font-bold"}>Services</NavLink></li>
                        {
                            user && <li>
                                <a className="font-bold hover:bg-[#83B582] hover:text-white">Dashboard</a>
                                <ul className="p-2">
                                    <li><a>Add Service</a></li>
                                    <li><a>Manage Service</a></li>
                                    <li><a>Booked-Services</a></li>
                                    <li><a>Service-To-Do</a></li>
                                </ul>
                            </li>
                        }
                    </ul>
                </div>
                <Link to='/' className="btn">
                    <img className="w-12 h-12" src={logo} alt="" />
                    <p className="text-xl font-bold">Legal-Vantage</p>
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/' className={({ isActive }) => isActive ? "font-bold bg-[#83B582] hover:bg-[#83B582] text-white rounded-md" : "font-bold"}>Home</NavLink></li>
                    <li><NavLink to='/services' className={({ isActive }) => isActive ? "font-bold bg-[#83B582] hover:bg-[#83B582] text-white rounded-md" : "font-bold"}>Services</NavLink></li>
                    {
                        user && <li>
                            <details>
                                <summary className="font-bold hover:bg-[#83B582] hover:text-white">Dashboard</summary>
                                <ul className="p-1 w-40">
                                    <li><a>Add Service</a></li>
                                    <li><a>Manage Service</a></li>
                                    <li><a>Booked-Services</a></li>
                                    <li><a>Service-To-Do</a></li>
                                </ul>
                            </details>
                        </li>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="User Photo" src={user?.photoURL || defaultPhoto} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-50 p-2 shadow menu menu-sm dropdown-content bg-gray-400 rounded-lg w-32 mx-auto">
                            <li className="hover:font-bold hover:bg-[#83B582] hover:text-white rounded-md"><Link to='/myList'>
                                {user?.displayName ? user.displayName : 'User'}
                            </Link></li>
                            <li className="hover:font-bold hover:bg-[#83B582] hover:text-white rounded-md "><button onClick={handleLogOut}>Logout</button></li>
                        </ul>
                    </div>
                        :
                        <Link to='/login' className="btn bg-[#83B582] text-white font-bold hover:bg-orange-400 duration-300">Login</Link>
                }

            </div>
        </div>
    );
};

export default NavBar;