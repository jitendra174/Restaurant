import React from 'react'
import "../styles/style.css"

import pic1 from "../Assets/pic1.jpg"
import pic2 from "../Assets/pic2.jpg"
import pic3 from "../Assets/pic3.jpg"
import pic4 from "../Assets/pic4.jpg"

export default function AboutUs() {
    return (
        <>
            <div className="about-section" id='about'>
                <div className="titles">
                    <p className="title">About Us</p>
                    <p className="title-text">Passionate About Flavor, Committed to Excellence Welcome to Our Culinary Story</p>
                </div>

                <div className="about-container">
                    <div className="about-left">
                        <div className="pic-box">
                            <img src={pic1} alt="about-img" width="330px" height="300px" className='about-img' />
                            <img src={pic2} alt="about-img" width="330px" height="300px" className='about-img' />
                            <img src={pic3} alt="about-img" width="330px" height="300px" className='about-img' />
                            <img src={pic4} alt="about-img" width="330px" height="300px" className='about-img' />
                        </div>
                    </div>
                    <div className="about-right">
                        <p className="story-title">Our Story</p>
                        <p className="story-content">
                            Welcome to our South Indian haven, where tradition meets innovation on every plate.
                            Immerse yourself in a culinary tale spun with aromatic spices, handed down through
                            generations. At our restaurant, we blend the authenticity of ancestral recipes with a
                            contemporary twist, creating an unforgettable dining experience. Join us in celebrating the rich
                            tapestry of South Indian flavors that bring families and friends together, making each meal a cherished memory.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
