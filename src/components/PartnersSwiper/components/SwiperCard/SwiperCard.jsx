import React from "react";
import style from "./style.module.css";

export default function SwiperCard({img,review,author}) {

    return<>
        <div className={'flex flex-col items-end justify-end w-[314px] h-[300px] pb-4'}>

            <div className={'flex flex-col items-start text-start w-[314px] h-[236px] px-5 border rounded-2xl shadow relative'}>
                <div className={'w-16 h-16 bg-gray-100 shadow border absolute -top-8 rounded-full overflow-hidden relative flex flex-col items-center justify-center'}>

                    <img className={'w-full h-fit object-contain'} src={img} alt={'innomind partner'}/>

                </div>

                <div className={`${style.review} -translate-y-4`}>{review}</div>
                <div className={`${style.author} absolute bottom-3 left-4`}>{author}</div>
            </div>



        </div>
    </>
}