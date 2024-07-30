import React from 'react'
import img from '../../../Images/Mercede-C-180/img1.jpeg'
const CarsCard = () => {
    return (
        <div>



            <div>
                <div class="Cars-" style={{ width: "23rem" }}>
                    <img src={img} class="card-img-top img-fluid rounded-3" height={188} width={356} alt="..." />
                    <div class="card-body card-img-overlay border rounded-3" style={{ top: '-30px' }}>

                        <span className='fw-bold ms-0' style={{ fontSize: '13px' }}>Jaguar X-type</span>
                        <div className="d-flex justify-content-between">
                            <div style={{ fontSize: '10px' }}>
                                <i class="fa-solid fa-wheelchair"></i> 4 Seats
                                <i class="fa-solid fa-arrows-rotate ms-1"></i><span className='ms-1'>Manual</span>
                                <i class="fa-solid fa-road-circle-check ms-1"></i><span className='ms-1'>Mileage</span>
                            </div>
                            <div style={{ fontSize: '10px' }}>
                                <i class="fa-solid fa-pencil me-2" style={{ fontSize: '12px', color: "#2F6EA9" }}></i>
                                <i class="fa-solid fa-trash " style={{ fontSize: '12px', color: '#FE5C73' }}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarsCard