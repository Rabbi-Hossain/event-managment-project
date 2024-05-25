import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../AuthContext/AuthContext";

const Header = () => {

    const { user, logOut } = useContext(UserContext)


    const HandleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li><NavLink to='/' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
        }>Home</NavLink></li>

        <li><NavLink to='/login' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
        }>Login</NavLink></li>

        <li><NavLink to='/register' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
        }>Register</NavLink></li>



    </>

    return (
        <div className="bg-red-400">
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">SPORTEVENT</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>

                <div className="navbar-end">
                    {
                        user ? <div>
                            
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                         {user.displayName}  
                                        </a>
                                    </li>
                                    <li><a>{user.email}</a></li>
                                    <li onClick={HandleLogOut} ><a>Logout</a></li>
                                </ul>
                            </div>
                        </div>
                            :
                            <Link className="btn btn-warning" to="/login">Log In</Link>
                    }

                </div>

            </div>
        </div>
    );
};

export default Header;