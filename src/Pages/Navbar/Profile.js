import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../components/Avatar/Avatar';

const Profile = ({ user, logOut }) => {

    return (
        <div>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} className="menu menu-compac p-2 w-24 flex flex-row justify-between items-center">
                    <Avatar user={user} />
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>

                    </div>
                </div>
                <ul tabIndex={0} className="dropdown-content menu px-2 py-1 shadow bg-base-100 rounded-box w-52">
                    <li className='px-2 mt-2'>{user.displayName}</li>
                    <li className='text-sm px-2'>{user.email}</li>
                    <div className="divider my-1"></div>
                    <Link onClick={logOut} className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-sm normal-case border-neutral md:w-44 justify-items-center">Logout</Link>
                </ul>

            </div>
        </div>
    );
};

export default Profile;