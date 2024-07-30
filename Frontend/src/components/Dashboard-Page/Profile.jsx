import React from 'react'
import { DatePicker, Select } from 'antd';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

import img from '../../Images/Dashboard/Bachiii.jpg'
import Profileform from './Components/Profile-form';

// const onChange = (date, dateString) => {
//     console.log(date, dateString);
// };


const Profile = ({ children }) => {
    return (
        <>
            <Sidebar title="Profile">
                <div className="d-flex border-bottom">
                    <Link to='/dashboard/user-profile'> <h6 className='fs-5 text-secondary ms-4'>Edit Profile</h6></Link>
                    {/* <Link to='/preferences'> <h6 className='fs-5 text-secondary ms-4'>Preferences</h6></Link> */}
                    <Link to='/dashboard/user-profile/security'>  <h6 className='fs-5 text-secondary ms-4'>Security</h6></Link>
                </div>
                {children}
                <Profileform />
            </Sidebar>
        </>
    )
}

export default Profile