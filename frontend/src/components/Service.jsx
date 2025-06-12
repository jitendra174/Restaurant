import React from 'react'
import "../styles/style.css"
import bestfood from "../Assets/bestfood.jpg"
import partyhall from "../Assets/partyhall.jpg"
import fooddelivery from "../Assets/fooddelivery.jpg"

function Service() {
    return (
        <>
            <div className="service-section" id='service'>
                <div className="titles">
                    <p className="title">Our Service</p>
                    <p className="title-text"> Unparalleled Services for Unforgettable Occasions</p>

                </div>

                <div className="service-center">
                    <div className="service-border">
                        <div className='service-layer'>
                            <div className="party-hall">
                                <img src={partyhall} alt="img" className='service-img' />
                                <div className="service-msg">
                                    <p className="service-text1">Book Our Party Hall for Unforgettable Gatherings</p>
                                </div>
                            </div>
                            <p className="service-text">Party Hall</p>
                        </div>
                        <div className='service-layer'>
                            <div className="best-food">
                                <img src={bestfood} alt="img" className='service-img' />
                                <div className="service-msg">
                                    <p className="service-text1"> Where Flavor Meets Perfection on Every Plate!</p>
                                </div>
                            </div>
                            <p className="service-text">Best food in town</p>
                        </div>
                        <div className='service-layer'>
                            <div className="home-delivery">
                                <img src={fooddelivery} alt="img" className='service-img' />
                                <div className="service-msg">
                                    <p className="service-text1">Experience the Ultimate in Home Delivery Delights!</p>
                                </div>
                            </div>
                            <p className="service-text">Food delivery</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service