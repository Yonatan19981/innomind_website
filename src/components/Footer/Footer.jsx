import React, {useState} from "react";
import style from "./style.module.css";

import logo from "../../assets/img/logo/innomind_logo.png";
import {Link} from "react-router-dom";
import {IoIosMenu} from "react-icons/io";
import {IoCloseOutline} from "react-icons/io5";

export default function Footer(){

    const [isOpen,setOpen] = useState(false);

 
    return<>
                 <>
            <div className={'w-full h-[200px] bg-[#07215B]'}>
                {/* Your footer content */}
                <div className="text-center text-white py-4">
                    Images by <a href="www.freepik.com" className="underline">freepik</a>
                </div>
                <div className="text-center text-white py-4">
                   Design by <a href="" className="">Noa Meiri</a>
                </div>
            </div>
        </>
    
    </>
}