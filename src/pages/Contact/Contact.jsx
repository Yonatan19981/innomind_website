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
import placeholder from "../../assets/img/people/placeholder_woman.png";
import noa_baruch from "../../assets/img/people/noa_baruch.png";
import nadav from "../../assets/img/people/nadav.png";
import raz from "../../assets/img/people/raz.png";
import sheba from "../../assets/img/logo/sheba.png";
import map from "../../assets/img/layer/newmap.png";
import ReadMoreCard from "../../components/ReadMoreCard/ReadMoreCard";
import ContactUsCard from "../../components/ContactUsCard/ContactUsCard";
import PartnersSwiper from "../../components/PartnersSwiper/PartnersSwiper";
import LinkedInCard from "../../components/LinkedInCard/LinkedInCard";
import {Link} from "react-router-dom";

export default function Contact() {

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



    return<>
        <div className={'w-full h-auto min-h-screen bg-white flex flex-col items-center pt-20 overflow-x-clip'}>

            <div className={''}>

                {/*Entrance Layer*/}
                <div className={'w-full h-auto min-h-[600px] flex flex-row max-[1000px]:flex-col-reverse max-[1000px]:items-center items-center justify-center gap-8'}>

                    <div className={'max-[1000px]:w-full w-1/2 h-auto flex flex-col max-[1000px]:items-center max-[1000px]:text-center items-start text-start '}>

                        <span className={style.welcome}>Contact Us</span>

                        <span className={style.future}>Let's work together!</span>
                        <span className={style.description}>We are located inside the psychiatry building in sheba hospital.</span>
                        <br></br>

                        <span className={style.description}>Email:</span>
                        <br></br>
                        <span className={style.description}>Phone:</span>
                    </div>

                    <div className={' max-[1000px]:w-[250px] w-1/2 h-auto flex flex-col items-center justify-center'}>

                        <img className={'w-full h-fit max-h-[500px] object-contain'} src={map} alt={'Innomind'}/>

                    </div>

                </div>

           
            </div>

            
        </div>
    </>
}