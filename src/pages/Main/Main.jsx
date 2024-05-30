import React from "react";
import style from "./style.module.css";

import entrance_layer from "../../assets/img/layer/entrance_layer.png";
import neuro_layer from "../../assets/img/layer/neuron.png";
import back_layer from "../../assets/img/layer/back_layer.png";
import back_layer2 from "../../assets/img/layer/back_layer2.png";
import back_frame_layer_right from "../../assets/img/layer/back_frame_layer_right.png";
import back_frame_layer_left from "../../assets/img/layer/back_frame_layer_left.png";
import ARC from "../../assets/img/partners/sheba.png";
import health from "../../assets/img/partners/health.png";
import rafael from "../../assets/img/partners/rafael.png";
import technion from "../../assets/img/partners/technion.png";
import baar_yaacov from "../../assets/img/partners/baar_yaacov.png";
import code_for_israel from "../../assets/img/partners/code_for_israel.png";
import placeholder from "../../assets/img/people/placeholder_woman.png";
import noa_baruch from "../../assets/img/people/noa_baruch.png";
import nadav from "../../assets/img/people/nadav.png";
import raz from "../../assets/img/people/raz.png";
import sharon from "../../assets/img/people/sharon.png";
import maayan from "../../assets/img/people/maayan.png";
import ReadMoreCard from "../../components/ReadMoreCard/ReadMoreCard";
import ContactUsCard from "../../components/ContactUsCard/ContactUsCard";
import PartnersSwiper from "../../components/PartnersSwiper/PartnersSwiper";
import LinkedInCard from "../../components/LinkedInCard/LinkedInCard";
import {Link} from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation, Pagination} from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCard from "../../components/PartnersSwiper/components/SwiperCard/SwiperCard";
import {GrNext, GrPrevious} from "react-icons/gr";

export default function Main() {

    const Pills = [
        {
            title:"Stresogenic stimulation",
            description: "Testing the effect of stress on the physiological reactions of those suffering from PTSD through stickers that absorb designated substances and a smart sensor.",
            link_for_more : "/projects"
        },
        {
            title:"Neurofeedback therapy",
            description: "With Graymeters, we assess neurofeedback treatment for mild to moderate depression, to relieve symptoms of depression and anhedonia. An FDA-approved biofeedback device enhances our innovative approach.",
            link_for_more : "/projects"
        },
        {
            title:"Smartwatch PTSD monitoring",
            description: "With Raphael, we aim to develop an early detection system of anxiety attacks for PTS alerting before attacks and detecting emotional distress intensifications and avoidance behaviors.",
            link_for_more : "/projects"
        },
        // {
        //     title:"PTSD patients and exposure therapy (PE)",
        //     description: "Measuring response and change in the bioenergetic phenotype during prolonged exposure treatment, as part of treatment for post-traumatic stress disorder using a smart watch. \n",
        //     link_for_more : "/projects"
        // },
    ]

    const People = [
        {
            image: raz,
            name: "Dr. Raz Gross",
            role: "CEO",
            linkedin_url: "#"
        },
        {
            image: nadav,
            name: "Dr. Nadav Goldental",
            role: "CEO",
            linkedin_url: "#"
        },
        {
            image: noa_baruch,
            name: "Ms. Noa Baruch",
            role: "Lab Manager",
            linkedin_url: "#"
        },
        {
            image: sharon,
            name: "Ms. Sharon Baltansky",
            role: "Research Assistant",
            linkedin_url: "#"
        },
        {
            image: maayan,
            name: "Ms. Maayan Nur",
            role: "Research Assistant",
            linkedin_url: "#"
        },
        
    ]
   
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
        <div className={'w-full h-auto min-h-screen bg-white flex flex-col items-center pt-20 overflow-x-clip'}>

            <div className={'w-full max-[1000px]:px-5 max-[1300px]:px-12 max-[1500px]:max-w-[1200px] max-[50000px]:max-w-[1500px] min-h-screen h-auto flex flex-col items-center z-0'}>

                {/*Entrance Layer*/}
                <div className={'w-full h-auto min-h-[600px] flex flex-row max-[1000px]:flex-col-reverse max-[1000px]:items-center items-center justify-center gap-8'}>

                    <div className={'max-[1000px]:w-full w-1/2 h-auto flex flex-col max-[1000px]:items-center max-[1000px]:text-center items-start text-start '}>

                        <span className={style.welcome}>WELCOME TO INNOMIND</span>

                        <span className={style.future}>The future of <br/> mental health is here.</span>

                        <span className={style.description}>In this lab, we create innovative solutions for better mental health diagnosis, treatment and monitoring.</span>

                    </div>

                    <div className={' max-[1000px]:w-[250px] w-1/2 h-auto flex flex-col items-center justify-center'}>

                        <img className={'w-full h-fit max-h-[500px] object-contain'} src={entrance_layer} alt={'Innomind'}/>

                    </div>

                </div>

                {/*Neuro */}
                <div className={'w-full h-auto min-h-[600px] flex flex-row-reverse max-[1000px]:flex-col-reverse max-[1000px]:items-center items-center justify-center gap-8'}>

                    <div className={'max-[1000px]:w-full w-1/2 h-auto flex flex-col items-start text-start '}>

                        <span className={`${style.mission}`}>Our mission</span>

                        <span className={style.mental}>Enhancing mental health care through innovation. </span>

                        <span className={style.support}>We support the development of novel diagnostic measures, remote monitoring solutions, and the implementation of cutting-edge clinical tools. <br/><br/> We aim to reshape the landscape of mental health solutions, fostering a brighter and healthier future.</span>

                    </div>

                    <div className={'max-[1000px]:w-[250px] w-1/2 h-auto flex flex-col items-center justify-center'}>

                        <img className={'w-full h-fit max-h-[500px] object-contain'} src={neuro_layer} alt={'Innomind'}/>

                    </div>

                </div>


                <div className={'w-full flex flex-col items-start text-start max-[1000px]:mt-8'}>

                    <div className={style.mission}>Our projects</div>
                    <div className={style.mental}>Advancing psychiatry and mental health. </div>
                    <div className={style.support}>We prioritize the integration of digital tools, including smart sensors capturing physiological, biochemical, EEG, imaging data and more. </div>

                </div>
            </div>

            <div className={'w-full flex flex-row max-[500px]:flex-col max-[500px]:items-center min-[500px]:flex-wrap gap-9 justify-start mt-20 max-[1000px]:gap-3 max-[500px]:px-0 max-[1000px]:px-4 max-[1500px]:px-20 min-[1800px]:pl-52 relative z-0'}>
                {/*back layers*/}
                <img className={'absolute -left-0 -top-16 max-[500px]:w-[200px] w-[550px] h-fit object-contain -z-10'} src={back_layer} alt={'innomind'}/>
                <img className={'absolute -right-36 -bottom-10 max-[500px]:w-[300] w-[650px] h-fit object-contain -z-10'} src={back_layer2} alt={'innomind'}/>

                {Pills.map((value, index)=> <ReadMoreCard
                    index={index}
                    title={value.title}
                    description={value.description}
                    link={value.link_for_more}
                />)}

                <ContactUsCard
                    title={'Work with us on our next project'}
                    description={'We cooperate with start-ups, technology firms, research institutes and universities.Let’s reshape the landscape of mental health solutions.'}
                />

            </div>

            <div className={'w-full h-[750px] max-[500px]:h-[600px] mt-40 relative flex flex-col items-center justify-center'}>

                {/*back layer*/}
                <img className={'absolute right-4 top-0 max-h-[500px] max-[500px]:max-h-[150px] max-[1000px]:max-h-[300px] object-contain'} src={back_frame_layer_right} alt={'innomind'}/>
                <img className={'absolute left-4 bottom-0 max-h-[500px] max-[500px]:max-h-[150px] max-[1000px]:max-h-[300px] object-contain'} src={back_frame_layer_left} alt={'innomind'}/>

                <div className={'flex flex-col items-center max-[1000px]:px-12 z-10 '}>

                    <span className={style.mental}>Working with the best</span>

                    <div className={'w-full h-[300px] flex flex-col items-center justify-end relative'}>

<div className={'prev absolute max-[500px]:-left-0 -left-10 m-auto top-36 text-black/60 text-3xl z-10 select-none'}><GrPrevious /></div>
<div className={'next absolute max-[500px]:-right-0 -right-10 m-auto top-36 text-black/60 text-3xl z-10 select-none'}><GrNext /></div>

{/* <Swiper
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
    {PARTNERS.map((value, index)=> <SwiperSlide className={'w-[314px] h-[300px]'}>
        <div className={'w-full h-full flex items-end justify-center'}>
            <SwiperCard author={value.img} review={value.img} img={value.img}/>
        </div>
    </SwiperSlide>)}

</Swiper> */}

</div>

                    <div className={'flex flex-row items-center justify-center mt-12  gap-0 gap-20 '}>
{/* 
                        <img className={'object-contain h-40'} src={ARC} alt={'innomind'}/>
                        <img className={'object-contain h-40'} src={health} alt={'innomind'}/>
                        <img className={'object-contain h-40'} src={rafael} alt={'innomind'}/>
                        <img className={'object-contain h-40'} src={technion} alt={'innomind'}/>
                        <img className={'object-contain h-40'} src={baar_yaacov} alt={'innomind'}/>
                        <img className={'object-contain h-40'} src={code_for_israel} alt={'innomind'}/> */}

                    </div>

                    <div className={`${style.partner} mt-10 mb-6 `}>You could be our next partner for great projects </div>
                    <Link to={"/contact"}  className={style.button}>Contact us</Link>

                </div>

            </div>

            <div className={'w-full max-[500px]:px-0.5 max-[1300px]:px-12 max-[1500px]:max-w-[1200px] max-[50000px]:max-w-[1500px] h-auto flex flex-col items-center '}>

                <div className={'w-full h-[750px] max-[500px]:h-auto max-[500px]:mt-10 relative flex flex-col items-start justify-center'}>

                    <div className={style.mission}>Our team</div>
                    <div className={style.mental}>It’s all about the people.</div>

                    <div className={'w-full flex flex-col items-center  mt-20'}>

                        <div className={'flex flex-row max-[500px]:flex-col max-[500px]:items-center items-start justify-center gap-10'}>

                            {People.map((value, index)=> <LinkedInCard
                                index={index}
                                name={value.name}
                                image={value.image}
                                linkedin_url={value.linkedin_url}
                                role={value.role}
                            />)}

                        </div>

                    </div>

                    <Link onClick={()=>window.scrollTo(0,0)} to={'/about_us'} className={style.read_more_button}>Read more about us</Link>
                </div>


                {/* <div className={'w-full h-[750px] relative flex flex-col items-start justify-center'}>

                    <div className={' max-[1200px]:w-full  w-[1100px] h-[310px] flex items-end self-center'}>
                        <PartnersSwiper/>
                    </div>

                </div> */}

            </div>

            <div className={'w-full h-[300px] bg-[#DBCCF47D] flex flex-col items-center justify-center gap-8'}>

                <div className={style.amazing}>Let’s make something amazing together.</div>

                <Link to={"/contact"} className={style.button2}>Contact us</Link>
            </div>


        </div>
    </>
}