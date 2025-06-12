import React from 'react'
import "../styles/style.css"

import { IoPersonCircleOutline, IoMailOpenOutline, IoTimeOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { HiOutlineUserGroup } from "react-icons/hi2";



function Reservation() {
    return (
        <>
            <div className="reservation" id='reservation'>
                <div className="reservation-form">
                    <div className="res-center">
                        <p className="ftitle">Reservation</p>
                        <p className="ftitle1">Book Your Table</p>
                        <div className="group">
                            <IoPersonCircleOutline className='symbol' />
                            <input type="text" className="group-field" placeholder='Name' />
                        </div>
                        <div className="group">
                            <IoMailOpenOutline className='symbol' />
                            <input type="email" className="group-field" placeholder='Email' />
                        </div>
                        <div className="group">
                            <CiCalendarDate className='symbol' />
                            <input type="text" className="group-field" placeholder='16/01/2024' />
                        </div>
                        <div className="group">
                            <IoTimeOutline className='symbol' />
                            <input type="text" className="group-field" placeholder='06:30 PM' />
                        </div>
                        <div className="group">
                            <HiOutlineUserGroup className='symbol' />
                            <input type="text" className="group-field" placeholder='4 people' />
                        </div>
                        <center><button className='res-btn'>Book now</button></center>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reservation