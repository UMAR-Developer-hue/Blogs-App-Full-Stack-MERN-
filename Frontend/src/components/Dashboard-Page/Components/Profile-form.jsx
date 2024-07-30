import React from 'react'
import img from '../../../Images/Dashboard/Bachiii.jpg'
import '../Dashboard.css'

const Profileform = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12 col-md-3 col-lg-2 text-center text-md-left">
          <img src={img} height={130} width={132} style={{ borderRadius: '400px' }} alt="" />
        </div>
        <div className="col-12 col-md-9 col-lg-10">
          <div className='ms-md-5 ps-md-5'>
            <form className="row g-3">
              {/* _____________________________________________________________ */}
              <div className="col-12 col-md-6 form-lables">
                <label htmlFor="inputName" className="form-label fs-5">Your Name</label>
                <input type="text" className="form-control rounded-4 h-75" placeholder='Charlene Reed' id="inputName" />
              </div>
              <div className="col-12 col-md-6 form-lables">
                <label htmlFor="inputUsername" className="form-label fs-5">User Name</label>
                <input type="text" className="form-control rounded-4 h-75" placeholder='Charlene Reed' id="inputUsername" />
              </div>
              {/* _____________________________________________________________ */}
              <div className="col-12 col-md-6 mt-3 mt-md-5 form-lables">
                <label htmlFor="inputEmail" className="form-label fs-5">Email</label>
                <input type="email" className="form-control rounded-4 h-75" placeholder='charlenereed@gmail.com' id="inputEmail" />
              </div>
              <div className="col-12 col-md-6 mt-3 mt-md-5 form-lables">
                <label htmlFor="inputPassword" className="form-label fs-5">Password</label>
                <input type="password" className="form-control rounded-4 h-75" placeholder='***********' id="inputPassword" />
              </div>
              {/* _____________________________________________________________ */}
              <div className="col-12 col-md-6 mt-3 mt-md-5 form-lables">
                <label htmlFor="inputDob" className="form-label fs-5">Date of Birth</label>
                <input type="date" className="form-control rounded-4 h-75" id="inputDob" />
              </div>
              <div className="col-12 col-md-6 mt-3 mt-md-5 form-lables">
                <label htmlFor="inputPresentAddress" className="form-label fs-5">Present Address</label>
                <input type="text" className="form-control rounded-4 h-75" placeholder='San Jose, California, USA' id="inputPresentAddress" />
              </div>
              {/* _____________________________________________________________ */}
              <div className="col-12 col-md-6 mt-3 mt-md-5 form-lables">
                <label htmlFor="inputPermanentAddress" className="form-label fs-5">Permanent Address</label>
                <input type="text" className="form-control rounded-4 h-75" placeholder='San Jose, California, USA' id="inputPermanentAddress" />
              </div>
              <div className="col-12 col-md-6 mt-3 mt-md-5 form-lables">
                <label htmlFor="inputCity" className="form-label fs-5">City</label>
                <input type="text" className="form-control rounded-4 h-75" placeholder='San Jose' id="inputCity" />
              </div>
              {/* _____________________________________________________________ */}
              <div className="col-12 col-md-6 mt-3 mt-md-5 form-lables">
                <label htmlFor="inputPostalCode" className="form-label fs-5">Postal Code</label>
                <input type="number" className="form-control rounded-4 h-75" placeholder='45962' id="inputPostalCode" />
              </div>
              <div className="col-12 col-md-6 mt-3 mt-md-5 form-lables">
                <label htmlFor="inputCountry" className="form-label fs-5">Country</label>
                <input type="text" className="form-control rounded-4 h-75" placeholder='USA' id="inputCountry" />
              </div>
              {/* _____________________________________________________________ */}
              <div className="d-flex justify-content-end col-12 mt-3 mt-md-5">
                <button type="submit" className="btn col-12 col-md-2 py-2 text-light rounded-4 myButton" style={{ backgroundColor: '#1814F3' }}>Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profileform
