import React, {useState} from "react";
import style from "./style.module.css";

import logo from "../../assets/img/logo/innomind_logo.png";
import {Link} from "react-router-dom";
import {IoIosMenu} from "react-icons/io";
import {IoCloseOutline} from "react-icons/io5";

export default function Header(){

    const [isOpen,setOpen] = useState(false);

    const NAV_LINKS = [
        {
            title: "Home",
            to : '/'
        },
        {
            title: "About us",
            to : '/about_us'
        },
        {
            title: "Projects",
            to : '/projects'
        },
        // {
        //     title: "Contact",
        //     to : '/contact'
        // },
        
    ]

    return<>
        <div className={'w-full h-20 absolute top-0 left-0 z-50'}>

            <div className={'w-full h-full relative flex flex-col items-center max-[600px]:px-2 px-20'}>

                <div className={'w-full h-auto flex flex-row items-center justify-between'}>

                    {/*logo*/}
                    <Link to={'/'} className={'w-auto h-auto flex flex-row items-center'}>

                        <img className={'w-20 h-20 object-contain'} src={logo} alt={'Innomind logo'}/>

                        <span className={style.logo_text}>INNOMIND</span>

                    </Link>

                    <div className={'w-auto flex flex-row items-center gap-12 max-[1000px]:hidden'}>

                        {NAV_LINKS.map((value, index)=> <Link onClick={()=>window.scrollTo(0,0)} className={style.nav_links} to={value.to}>{value.title}</Link>)}

                        <Link to={"/contact"} className={style.button}><div>Contact us</div> </Link>

                    </div>

                    <div onClick={()=>setOpen(!isOpen)} className={'min-[1000px]:hidden absolute top-3 right-4 h-12 w-12 text-3xl flex flex-col items-center justify-center'}>
                        <IoIosMenu />
                    </div>

                </div>

                <div className={` ${isOpen? `right-0` : `-right-[100vw]`} ease-in-out duration-500 w-full h-[340px] bg-[#AD72FF] fixed top-0 flex flex-col`}>

                    <div className={'relative w-full flex flex-col items-end p-5'}>

                        <IoCloseOutline onClick={()=>setOpen(false)} className={'text-3xl text-white'} />

                        <div className={'w-full flex flex-col items-end pt-6 gap-3'}>

                            {NAV_LINKS.map((value, index)=> <Link style={{fontFamily: `Assistant, sans-serif`,}} className={'text-white text-[24px]'} to={value.to}>{value.title}</Link>)}

                            <Link to={"/contact"} className={style.button}><div>Contact us</div> </Link>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    </>
}