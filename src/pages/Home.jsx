import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from "swiper/modules";
import Items from "../components/items";

export default function Home() {
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
                <div className=" text-center"> 
                    <h1 className="h1-custom mt-[4rem] mb-8 p-2 bg-gradient-to-r from-[#ffd21f] via-[#ff4089] to-indigo-400 text-transparent bg-clip-text hue-custom">Protein Powder Advent Calendar</h1>
                    <h2 className="h2-custom">Discover a new flavour every month!</h2>
                </div>
                <Items />
                
            </div>
        )


    
}
