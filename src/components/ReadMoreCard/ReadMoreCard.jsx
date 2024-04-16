import React from "react";
import style from "./style.module.css";
import pills_bottle from "../../assets/img/layer/pills.png";
import {LuMoveRight} from "react-icons/lu";
import {Link} from "react-router-dom";

export default function ReadMoreCard({title,description,link,index}) {

    return<>
        <div key={index} className={'bg-white max-[500px]:w-[280px] w-[350px] h-[450px] flex flex-col items-start p-8 rounded-2xl shadow text-start '}>
           {/* <img className={'w-16 h-24 object-contain'} src={pills_bottle} alt={'pills'}/>*/}
            <div className={style.title}>{title}</div>
            <div className={style.description}>{description}</div>
            <Link onClick={()=>window.scrollTo(0,0)} to={link} className={style.read_more}><div>Read more</div>  <LuMoveRight className={'ml-2 translate-y-0.5'} /> </Link>
        </div>
    </>
}