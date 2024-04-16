import React from "react";
import style from "./style.module.css";
import pills_bottle from "../../assets/img/layer/pills.png";
import {Link} from "react-router-dom";

export default function ContactUsCard({title,description,to}) {

    return<>
        <div className={'max-[500px]:w-[280px] bg-[#AC93D5] w-[350px] h-[450px] flex flex-col items-start p-8 rounded-2xl shadow text-start text-white '}>
            {/*<img className={'w-16 h-24 object-contain'} src={pills_bottle} alt={'pills'}/>*/}
            <div className={style.title}>{title}</div>
            <div className={style.description}>{description}</div>
            <Link to={"/contact"} className={style.contact}><div>Contact us</div> </Link>
        </div>
    </>
}