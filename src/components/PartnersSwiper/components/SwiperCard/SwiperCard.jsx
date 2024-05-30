import React from "react";
import style from "./style.module.css";

export default function SwiperCard({img,review,author}) {

    return<>
        <div className={'flex flex-col items-end justify-end w-[314px] h-[300px] pb-4'}>

            <div className={'flex flex-col items-start text-start w-[314px] h-[236px] px-5  relative'}>

                    <img className={'w-full h-fit object-contain'} src={img} alt={'innomind partner'}/>

          

            </div>



        </div>
    </>
}