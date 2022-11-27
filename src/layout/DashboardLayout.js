import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthProvider';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Navbar from '../Pages/Navbar/Navbar';

const DashboardLayout = () => {
    const logdata = useLoaderData();
    console.log(logdata);
    const menuItems = <>
        {/* { <li><Link to='/dashboard'>Home</Link></li>
    <li><Link to='/dashboard'>Blog</Link></li>} */}
        {<li><Link to='/dashboard'>My Orders</Link></li>}
    </>

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex">
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