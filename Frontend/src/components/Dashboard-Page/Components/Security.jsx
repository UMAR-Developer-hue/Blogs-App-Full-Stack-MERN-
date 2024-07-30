import React from 'react'
import Link from 'antd/es/typography/Link';
import SideBar from '../Sidebar';
import { Form, Switch } from 'antd';
const Security = ({ children }) => {
    return (
        <>

            <SideBar title="Profile">
                <div className="d-flex border-bottom">
                <Link to='/dashboard/user-profile'> <h6 className='fs-5 text-secondary ms-4'>Edit Profile</h6></Link>                    {/* <Link to='/preferences'> <h6 className='fs-5 text-secondary ms-4'>Preferences</h6></Link> */}
                    <Link to='/dashboard/user-profile/security'>  <h6 className='fs-5 text-secondary ms-4'>Security</h6></Link>
                </div>
                {children}


                <div className='mt-3 ms-3'>

                    <h5>Two-factor Authentication</h5>
                    <Form.Item label="" valuePropName="checked">
                        <Switch /> <span className='ms-2 mt-1'>Enable or disable Two-factor Authentication
                        </span>
                    </Form.Item>

                    <h5 className='fw-bold'>Change Password</h5>

                    <form class="row g-3">
                        <div class="col-md-5 ">
                            <label for="inputPassword4" class="form-label fs-5 ms-1">Current Password</label>
                            <input type="password" class="form-control h-75 rounded-4" placeholder='***********' id="inputPassword4" />
                        </div>
                    </form>
                    <form class="row g-3">
                        <div class="col-md-5 mt-5">
                            <label for="inputPassword4" class="form-label fs-5 ms-1">New Password</label>
                            <input type="password" class="form-control h-75 rounded-4" placeholder='***********' id="inputPassword4" />
                        </div>
                    </form>
                    <form class="row g-3">
                        <div class="col-md-5 mt-5">
                            <label for="inputPassword4" class="form-label fs-5 ms-1">Confirm New Password</label>
                            <input type="password" class="form-control h-75 rounded-4" placeholder='***********' id="inputPassword4" />
                        </div>
                    </form>
                    <div className="d-flex justify-content-end">
                        <button className="btn col-12 col-sm-2 col-md-2 col-lg-2 col-xl-2 py-2 mt-5 text-light rounded-4" style={{ backgroundColor: '#1814F3' }}>Save</button>
                    </div>
                </div>

            </SideBar>

        </>
    )
}

export default Security