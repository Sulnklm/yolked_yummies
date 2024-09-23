import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from "swiper/modules";

export default function HomeSlider() {
        return (

            
            <div>
                <div className="hidden lg:block z-10">
                    <Swiper 
                        spaceBetween={50} 
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ 
                            delay: 4000, 
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}>
                            <SwiperSlide><div><img src="img/banner1.jpg" alt="Banner 1"></img></div></SwiperSlide>
                            <SwiperSlide><div><img src="img/banner2.jpg" alt="Banner 2"></img></div></SwiperSlide>
                            <SwiperSlide><div><img src="img/banner3.jpg" alt="Banner 3"></img></div></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        )


    
}
