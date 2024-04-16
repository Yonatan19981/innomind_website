import React from "react";

import placeholder_man from "../../assets/img/people/placeholder_man.png";

import 'swiper/css';
import 'swiper/css/navigation';

import {Navigation, Pagination} from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCard from "./components/SwiperCard/SwiperCard";
import {GrNext, GrPrevious} from "react-icons/gr";

export default function PartnersSwiper() {


    const REVIEWS = [
        {
            img:placeholder_man,
            quote: 'Collaborating with INNOMIND was great. Collaborating with INNOMIND was great.',
            author: "Avi Cohen, Haifa University"
        },
        {
            img:placeholder_man,
            quote: 'Collaborating with INNOMIND was great. Collaborating with INNOMIND was great.',
            author: "Avi Cohen, Haifa University"
        },
        {
            img:placeholder_man,
            quote: 'Collaborating with INNOMIND was great. Collaborating with INNOMIND was great.',
            author: "Avi Cohen, Haifa University"
        },
        {
            img:placeholder_man,
            quote: 'Collaborating with INNOMIND was great. Collaborating with INNOMIND was great.',
            author: "Avi Cohen, Haifa University"
        },
    ]

    return<>
        <div className={'w-full h-[300px] flex flex-col items-center justify-end relative'}>

            <div className={'prev absolute max-[500px]:-left-0 -left-10 m-auto top-36 text-black/60 text-3xl z-10 select-none'}><GrPrevious /></div>
            <div className={'next absolute max-[500px]:-right-0 -right-10 m-auto top-36 text-black/60 text-3xl z-10 select-none'}><GrNext /></div>

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
                className="w-full h-full flex items-end "
            >
                {REVIEWS.map((value, index)=> <SwiperSlide className={'w-[314px] h-[300px]'}>
                    <div className={'w-full h-full flex items-end justify-center'}>
                        <SwiperCard author={value.author} review={value.quote} img={value.img}/>
                    </div>
                </SwiperSlide>)}

            </Swiper>

        </div>
    </>
}