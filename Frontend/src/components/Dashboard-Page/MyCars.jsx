import React from 'react'
import myCarsData from '../../Mock-Data/myCarsData';
// import { CardsData } from '../../fakedata/ProductData';
import SideBar from './Sidebar';
import './Dashboard.css'
const MyCars = () => {


    return (
        <>
            <SideBar title="My Cars">

                <div className="d-flex">
                    <div class="container ">
                        <div class="row">
                            {myCarsData.map((car) => {
                                return(
                                    <>
                                    <div class="col mx-1 Cars-Full-Card">
                                    <div class="Cars-Card" style={{ width: "23rem" }}>
                                        <img src={car.image} class="card-img-top img-fluid Card-Cars-Image rounded-3" style={{height:'188px', width:'356px'}} alt="..." />
                                        <div class="card-body card-img-overlay border rounded-3" style={{ top: '-30px' }}>

                                            <span className='fw-bold ms-0' style={{ fontSize: '13px' }}>{car.model}</span>
                                            <div className="d-flex justify-content-between">
                                                <div style={{ fontSize: '10px' }}>
                                                    <i class="fa-solid fa-wheelchair"></i> {car.seats}
                                                    <i class="fa-solid fa-arrows-rotate ms-1"></i><span className='ms-1'>{car.auto}</span>
                                                    <i class="fa-solid fa-road-circle-check ms-1"></i><span className='ms-1'>{car.mileage}</span>
                                                </div>
                                                <div style={{ fontSize: '10px' }}>
                                                    <i class="fa-solid fa-pencil me-2" style={{ fontSize: '12px', color: "#2F6EA9" }}></i>
                                                    <i class="fa-solid fa-trash " style={{ fontSize: '12px', color: '#FE5C73' }}></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div></>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </SideBar>
        </>
    )
}

export default MyCars