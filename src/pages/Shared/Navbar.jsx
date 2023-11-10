import { Link } from 'react-router-dom';
import logo from '../../assets/blog.png'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import toast from 'react-hot-toast';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);



    const navItems = <>

        <li><Link to="/">Home</Link></li>
        <li><Link to="/addblog">Add Blog</Link></li>
        <li><Link to="/allblogs">All BLogs</Link></li>
        <li><Link to="/featuredblogs">Featured Blogs</Link></li>
        <li><Link to="/wishlistblogs">Wishlist</Link></li>

    </>

const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success('logout successfully')
      })
      .catch(() => {});
  };

    return (
        <div className="navbar bg-base-100 shadow-2xl rounded-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/"> <img className='w-42 h-20' src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            {
                user?.email ? <div className="navbar-end">
                    <img className='w-12 h-12 rounded-full mr-4' src={user?.photoURL} alt="" />
                    <button onClick={handleLogout} className='btn btn-primary '>logout</button>
                </div> : <div className="navbar-end">
               <Link to = '/login'><button className='btn btn-primary '>login</button></Link>
            </div>
            }
        </div>
    );
};

export default Navbar;