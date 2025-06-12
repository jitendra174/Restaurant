import React, { useState } from 'react';
import "../styles/style.css";
import { toast } from 'react-toastify';

import { IoPersonCircleOutline, IoMailOpenOutline, IoTimeOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { HiOutlineUserGroup } from "react-icons/hi2";

function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { guests, time } = formData;

    if (!guests || !time) {
      toast.error("Please fill out all fields");
      return;
    }

    toast.success(`✅ Successfully booked your table for ${guests} at ${time}`, {
      position: "top-center",
      autoClose: 3000,
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      date: '',
      time: '',
      guests: '',
    });
  };

  return (
    <>
      <div className="reservation" id='reservation'>
        <form className="reservation-form" onSubmit={handleSubmit}>
          <div className="res-center">
            <h2>Reservation</h2>
            <h3 className="ftitle1">Book Your Table</h3>

            <div className="group">
              <IoPersonCircleOutline className='symbol' />
              <input
                type="text"
                className="group-field"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="group">
              <IoMailOpenOutline className='symbol' />
              <input
                type="email"
                className="group-field"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="group">
              <CiCalendarDate className='symbol' />
              <input
                type="text"
                className="group-field"
                placeholder="16/01/2025"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="group">
              <IoTimeOutline className='symbol' />
              <input
                type="text"
                className="group-field"
                placeholder="06:30 PM"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>

            <div className="group">
              <HiOutlineUserGroup className='symbol' />
              <input
                type="text"
                className="group-field"
                placeholder="4 people"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
              />
            </div>

            <center>
              <button type="submit" className="res-btn">Book now</button>
            </center>
          </div>
        </form>
      </div>
    </>
  );
}

export default Reservation;
