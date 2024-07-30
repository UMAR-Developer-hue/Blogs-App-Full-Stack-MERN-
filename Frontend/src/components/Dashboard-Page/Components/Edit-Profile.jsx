// EditProfile.jsx

import React from 'react';
import Profile from '../Profile';
import img from '../../../Images/Dashboard/Bachiii.jpg'
const EditProfile = () => {
    return (
        <Profile>



            <div class="container">
                <div class="row mt-5">
                    <div class="col col-1">
                        <img src={img} height={130} width={132} style={{ borderRadius: '400px' }} alt="" />
                    </div>
                    <div class="col col-11 ">
                        <div className='ms-5 ps-5'>


                            <form class="row g-3">
                                {/* _____________________________________________________________ */}
                                <div class="col-md-6">

                                    <label for="inputEmail4" class="form-label fs-5 ">Your Name</label>
                                    <input type="name" class="form-control rounded-4 h-75" placeholder='Charlene Reed' id="inputEmail4" />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputPassword4" class="form-label fs-5 ">User Name</label>
                                    <input type="name" class="form-control rounded-4 h-75" placeholder='Charlene Reed' id="inputPassword4" />
                                </div>
                                {/* _____________________________________________________________ */}
                                <div class="col-md-6 mt-5">

                                    <label for="inputEmail4" class="form-label fs-5 ">Email</label>
                                    <input type="email" class="form-control rounded-4 h-75" placeholder='charlenereed@gmail.com' id="inputEmail4" />
                                </div>
                                <div class="col-md-6 mt-5">
                                    <label for="inputPassword4" class="form-label fs-5 ">Password</label>
                                    <input type="password" class="form-control rounded-4 h-75" placeholder='***********' id="inputPassword4" />
                                </div>
                                {/* _____________________________________________________________ */}
                                <div class="col-md-6 mt-5">

                                    <label for="inputEmail4" class="form-label fs-5 ">Date of Birth</label>
                                    <input type="date" class="form-control rounded-4 h-75" placeholder='25 January 1990' id="inputEmail4" />
                                </div>
                                <div class="col-md-6 mt-5">
                                    <label for="inputPassword4" class="form-label fs-5 ">Present Address</label>
                                    <input type="password" class="form-control rounded-4 h-75" placeholder='San Jose, California, USA' id="inputPassword4" />
                                </div>
                                {/* _____________________________________________________________ */}

                                <div class="col-md-6 mt-5">
                                    <label for="inputPassword4" class="form-label fs-5 ">Permanent Address</label>
                                    <input type="text" class="form-control rounded-4 h-75" placeholder='San Jose, California, USA' id="inputPassword4" />
                                </div>
                                <div class="col-md-6 mt-5">

                                    <label for="inputEmail4" class="form-label fs-5 ">City</label>
                                    <input type="Address" class="form-control rounded-4 h-75" placeholder='San Jose' id="inputEmail4" />
                                </div>
                                {/* _____________________________________________________________ */}


                                <div class="col-md-6 mt-5">
                                    <label for="inputPassword4" class="form-label fs-5 ">Postal Code</label>
                                    <input type="Number" class="form-control rounded-4 h-75" placeholder='45962' id="inputPassword4" />
                                </div>
                                <div class="col-md-6 mt-5">

                                    <label for="inputEmail4" class="form-label fs-5 ">Country</label>
                                    <input type="Text" class="form-control rounded-4 h-75" placeholder='USA' id="inputEmail4" />
                                </div>
                                {/* _____________________________________________________________ */}
                                <div className="d-flex justify-content-end">
                                    <button className="btn col-2 py-2 mt-5 text-light rounded-4" style={{ backgroundColor: '#1814F3' }}>Save</button>
                                </div>


                            </form>


                        </div>
                    </div>

                </div>
            </div>




        </Profile>
    );
};

export default EditProfile;
