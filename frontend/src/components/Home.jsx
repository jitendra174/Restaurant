import React from 'react';
import "../styles/style.css";
import "swiper/swiper-bundle.css";

import home2 from "../Assets/home2.png";
import home1 from "../Assets/home1.png";
import home3 from "../Assets/home3.png";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

function Home() {
  const scrollToReservation = () => {
    const section = document.getElementById("reservation");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="home" id="home">
        <div className="home-slider">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slider">
                <div className="slide-left">
                  <p className="small-title">Our Special Dish</p>
                  <h2 className="main-title">Fish Fry</h2>
                  <p className="slide-words">
                    Delight in the crispy allure of our golden fish fry, a tantalizing journey from ocean to plate that promises a crunch of pure indulgence.
                  </p>
                  <button className="home-btn" onClick={scrollToReservation}>
                    Book a table
                  </button>
                </div>
                <div className="slide-right">
                  <img src={home2} className="home-img" alt="Fish Fry" width="600px" height="540px" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="slider-center">
              <div className="slider">
                <div className="slide-left">
                  <p className="small-title">Our Special Dish</p>
                  <h2 className="main-title">Grill Chicken</h2>
                  <p className="slide-words">
                    Experience grilled chicken like never before, a symphony of flavors that'll make your taste buds dance with joy.
                  </p>
                  <button className="home-btn" onClick={scrollToReservation}>
                    Book a table
                  </button>
                </div>
                <div className="slide-right">
                  <img src={home1} className="home-img" alt="Grill Chicken" width="600px" height="540px" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="slider-center">
              <div className="slider">
                <div className="slide-left">
                  <p className="small-title">Our Special Dish</p>
                  <h2 className="main-title">Paneer Noodles</h2>
                  <p className="slide-words">
                    Savor the irresistible twirls of perfectly cooked noodles, a symphony of flavors dancing on your palate with every bite.
                  </p>
                  <button className="home-btn" onClick={scrollToReservation}>
                    Book a table
                  </button>
                </div>
                <div className="slide-right">
                  <img src={home3} className="home-img" alt="Paneer Noodles" width="600px" height="540px" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Home;
