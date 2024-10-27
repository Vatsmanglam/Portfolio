import React from 'react'
import "./Portfolio.css"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import Sidebar from "../../img/MentalHealtth.jpeg"
import Ecommerce from "../../img/BRTS.jpeg"
import HOC from "../../img/parampara.png"
import {themeContext} from "../../Context"
import {useContext} from "react"


const Portfolio = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
  return (
    <div className="portfolio" id='Portfolio'>
        {/* Heading */}
        <span style={{color: darkMode?"white":""}}>Recent Projects</span>
        <span>Portfolio</span>
        {/* Slider */}
        <Swiper
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className="portfolio-slider"
        >
            <SwiperSlide>
                <img src={Sidebar} alt="sidebar" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommerce} alt="Ecommerce" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={HOC} alt="HOC" />
            </SwiperSlide>
             
        </Swiper>
    </div>
  )
}

export default Portfolio