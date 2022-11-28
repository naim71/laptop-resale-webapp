import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Navbar from '../Pages/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)

    const menuItems = <>
        <li><Link to='/dashboard'>My Orders</Link></li>
        {isAdmin &&
            <>
                <li><Link to='/dashboard/allsellers'>All Sellers</Link></li>
                <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
            </>
        }
        <li><Link to='/dashboard/addproduct'>Add a Product</Link></li>
        <li><Link to='/dashboard/myproducts'>My Products</Link></li>
    </>

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content mx-5">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        {menuItems}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;