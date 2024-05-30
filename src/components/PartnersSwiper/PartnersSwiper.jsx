import React from "react";

import placeholder_man from "../../assets/img/people/placeholder_man.png";
import ARC from "../../assets/img/partners/sheba.png";
import health from "../../assets/img/partners/health.png";
import rafael from "../../assets/img/partners/rafael.png";
import technion from "../../assets/img/partners/technion.png";
import baar_yaacov from "../../assets/img/partners/baar_yaacov.png";
import code_for_israel from "../../assets/img/partners/code_for_israel.png";
import 'swiper/css';
import 'swiper/css/navigation';

import {Navigation, Pagination} from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCard from "./components/SwiperCard/SwiperCard";
import {GrNext, GrPrevious} from "react-icons/gr";

export default function PartnersSwiper() {

    const PARTNERS = [
        {
            img:ARC
           
        },
        {
            img:baar_yaacov
           
        },
        {
            img:code_for_israel
           
        },
        {
            img:health
           
        },
        {
            img:rafael
        },
        {
            img:technion
        },
    ]

    return<>
        <div className={'w-full h-[310px]flex flex-col items-center justify-end relative'}>
        <div className="relative w-full">
  <div className="prev absolute left-0 m-auto top-1/2 transform -translate-y-1/2 text-black/60 text-3xl z-10 select-none">
    <GrPrevious />
  </div>
  <div className="next absolute right-0 m-auto top-1/2 transform -translate-y-1/2 text-black/60 text-3xl z-10 select-none">
    <GrNext />
  </div>
</div>


            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: false,
                }}
                freeMode={true}
                // grabCursor={true}
                centeredSlides={true}
                modules={[Pagination,Navigation]}
                navigation={{
                    nextEl: ".next",
                    prevEl: ".prev",
                    disabledClass: "swiper-button-disabled"
                }}
                breakpoints={{
                    1000: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    },
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    1: {
                        slidesPerView:1 ,
                        spaceBetween:10
                    }
                }}
                className="h-full flex items-end "
            >


                {PARTNERS.map((value, index)=> <SwiperSlide className={'w-[314px] h-[300px]'}>
                    <div className={'w-full h-full flex items-end justify-center'}>
                        <SwiperCard  img={value.img}/>
                    </div>
                </SwiperSlide>)}

            </Swiper>

        </div>
    </>
}