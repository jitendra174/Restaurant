import React from 'react'
import { Link } from 'react-scroll'
import "../styles/style.css"
import { FaInstagram, FaMeta, FaXTwitter, FaRegCopyright } from 'react-icons/fa6'
import { CiCalendarDate } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";


function Footer() {
    return (
        <>
            <div className="footer-section" id='footer'>
                <div className="footer-box">
                    <div className="footer-company">
                        <p className="footer-title1">South Indian</p>
                        <p className="footer-title2">Restaurant</p>
                    </div>

                    <div className="footer-menu">
                        <p className="footer-title3">Quick Links</p>
                        <nav>
                            <ul className='footer-menuitems'>
                                <Link className="fmenu" to='home' spy={true} smooth={true} offset={-120} duration={500}>Home</Link>
                                <Link className="fmenu" to='service' spy={true} smooth={true} offset={-100} duration={500}>Service</Link>
                                <Link className="fmenu" to='menu' spy={true} smooth={true} offset={-65} duration={500}>Menu</Link>
                                <Link className="fmenu" to='reservation' spy={true} smooth={true} offset={-90}>Reservation</Link>
                                <Link className="fmenu" to='about' spy={true} smooth={true} offset={-100}>About Us</Link>
                            </ul>
                        </nav>
                    </div>

                    <div className="footer-social">
                        <p className="footer-title3">Follow us</p>
                        <div className="footer-flex">
                            <FaInstagram className='footer-icon' />
                            <p className="media-text">Instagram</p>
                        </div>
                        <div className="footer-flex">
                            <FaMeta className='footer-icon' />
                            <p className="media-text">Meta</p>
                        </div>
                        <div className="footer-flex">
                            <FaXTwitter className='footer-icon' />
                            <p className="media-text">Twitter</p>
                        </div>
                    </div>

                    <div className="footer-hours">
                        <p className="footer-title3">Open Hours</p>
                        <div className="Hours">
                            <CiCalendarDate className='footer-icon' />
                            <p className="hour-title">Mon - Sun</p>
                        </div>
                        <div className="Hours">
                            <IoTimeOutline className='footer-icon' />
                            <p className="hour-title">10:00 AM - 11:00 PM</p>
                        </div>
                    </div>

                </div>
                <div className="footer-line"></div>
                <div className="copyright">
                    <FaRegCopyright className='copy-icon' />
                    South Indian 2024. All Rights Reserved.
                </div>
            </div>
        </>
    )
}

export default Footer