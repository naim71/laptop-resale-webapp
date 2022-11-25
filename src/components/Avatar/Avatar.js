import React from 'react';

const Avatar = ({user}) => {
    return (
        <div className="avatar">
            <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user.photoURL} alt='user' />
            </div>
        </div>
    );
};

export default Avatar;