import React from "react";
import style from "./style.module.css";
import linkedin from "../../assets/img/logo/linkedin_logo.png";

export default function LinkedInCard({index,image,name,role,linkedin_url}) {

    return<>
        <div key={index} className={'flex flex-col items-center '}>

            <div className={style.image_wrapper}>

                <img className={'w-full h-fit object-contain '} src={image} alt={'innomind people'}/>

            </div>

            <div className={`${style.people_name} mt-2`}>{name}</div>
            <div className={`${style.role} mt-4`}>{role}</div>

            <a href={linkedin_url} className={'mt-4'} >
                <img className={'w-[30px] h-[30px] object-contain'} src={linkedin} alt={`innomind linkedin`}/>
            </a>

        </div>
    </>
}