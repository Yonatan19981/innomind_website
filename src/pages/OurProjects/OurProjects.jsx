import React from "react";
import style from "./style.module.css";

import neuro from "../../assets/img/layer/neurologist.png";
import therapy from "../../assets/img/layer/therapy.png";
import ptsd from "../../assets/img/layer/ptsd.png";
import pte from "../../assets/img/layer/pte.png";
import collab from "../../assets/img/layer/collab.png";
import {Link} from "react-router-dom";

export default function OurProjects() {


    return<>
        <div className={'w-full h-auto min-h-screen bg-white flex flex-col items-center pt-20 overflow-x-clip'}>

            <div className={style.enter_layer}>

                <span className={style.entrance_title}>Our projects</span>
                <span className={style.entrance_description}>Explore our smart-sensor solutions, ground-breaking neurofeedback, and visionary psychedelic therapies.</span>
                <Link to={"/contact"} className={style.button}><div>Collab with us</div> </Link>

            </div>

            <div className={'w-full flex flex-col items-center  bg-white py-10'}>

                <div className={'w-full max-w-[1200px] max-[1200px]:px-5 flex flex-col items-center max-[800px]:gap-0 gap-1'}>

                    {/*Stresogenic stimulation*/}
                    <div className={'w-full flex max-[800px]:flex-col-reverse items-center justify-between'}>

                        <div className={'max-w-[420px] flex flex-col items-start text-start'}>

                            <span className={style.card_title}>Stresogenic stimulation</span>
                            <div className={'w-24 h-2 rounded-full bg-[#4089ED] my-4'}></div>
                            <div className={style.card_description}>In this study, we examine the effect of stress on the physiological reactions among those suffering from post-traumatic stress disorder using stickers that absorb specific substances and a smart sensor.</div>

                        </div>

                        <img className={'w-fit max-h-[500px] max-[1200px]:max-h-[400px]'} src={neuro} />

                    </div>


                    {/*Neurofeedback therapy*/}
                    <div className={'w-full flex flex-row-reverse max-[800px]:flex-col-reverse items-center justify-between mt-'}>

                        <div className={'max-w-[420px] flex flex-col items-start text-start'}>

                            <span className={style.card_title}>Neurofeedback therapy</span>
                            <div className={'w-24 h-2 rounded-full bg-[#4089ED] my-4'}></div>
                            <div className={style.card_description}>
                                In this study, we examine the effect of stress on the physiological reactions among those suffering from post-traumatic stress disorder using stickers that absorb specific substances and a smart sensor.In collaboration with Graymeters, our study focuses on subjects with mild to moderate depression, undergoing neurofeedback treatment in order to relieve symptoms of depression and anhedonia.<br/><br/>
                                The aim is to examine this unique treatment’s effectiveness following positive outcomes in a similar study on PTSD.<br/><br/>
                                The biofeedback device is an innovative therapeutic tool and has received FDA approval.
                            </div>

                        </div>

                        <img className={'w-fit max-h-[500px] max-[1200px]:max-h-[300px]'} src={therapy} />

                    </div>

                    {/*Smartwatch Monitoring for PTSD Patients*/}
                    <div className={'w-full flex flex-row max-[800px]:flex-col-reverse items-center justify-between mt-32'}>

                        <div className={'max-w-[420px] flex flex-col items-start text-start'}>

                            <span className={style.card_title}>Smartwatch Monitoring for PTSD Patients</span>
                            <div className={'w-24 h-2 rounded-full bg-[#4089ED] my-4'}></div>
                            <div className={style.card_description}>
                                In collaboration with <span className={'font-bold'}>Raphael</span>, our project aims to develop an early detection system of anxiety attacks for PTSD patients.<br/><br/>
                                Using a smartwatch, the system monitors physiological indicators, alerting patients before attacks and detecting acute exacerbations (emotional distress intensifications and avoidance behaviors).
                            </div>

                        </div>

                        <img className={'w-fit max-h-[500px] max-[1200px]:max-h-[300px]'} src={ptsd} />

                    </div>

                    {/*PTSD Patients and Exposure Therapy (PE)
                    <div className={'w-full flex flex-row-reverse max-[800px]:flex-col-reverse items-center justify-between mt-32'}>

                        <div className={'max-w-[420px] flex flex-col items-start text-start'}>

                            <span className={style.card_title}>PTSD Patients and Exposure Therapy (PE)</span>
                            <div className={'w-24 h-2 rounded-full bg-[#4089ED] my-4'}></div>
                            <div className={style.card_description}>
                                Measuring the response and the change in the bioenergetic phenotype during prolonged exposure treatment, as part of treatment for post-traumatic stress disorder using a smart watch.
                            </div>

                        </div>

                        <img className={'w-fit max-h-[500px] max-[1200px]:max-h-[300px]'} src={pte} />

</div>*/}
                </div>

            </div>


            <div className={'w-full h-[600px] max-[700px]:h-auto bg-[#D9D9D93D] max-[700px]:p-5  px-20 flex flex-col items-start justify-center '}>

                <div className={'w-full flex max-[700px]:flex-col-reverse  items-center max-[700px]:gap-5 justify-between'}>

                    <div className={'w-1/2 max-[700px]:w-full h-full flex flex-col max-[700px]:items-center items-start justify-center text-start'}>

                        <span className={`${style.card_title} `}>We want to cooperate with you!</span>
                        <div className={'w-24 h-2 rounded-full bg-[#4089ED] max-[700px]:self-start my-4'}></div>
                        <span className={`${style.footer_description} mt-4 `}>Join us in revolutionizing treatment and cooperate with us in future projects.</span>
                        <Link to={"/contact"} className={style.button}><div>Contact us</div> </Link>

                    </div>

                    <img className={'w-fit max-[700px]:h-auto max-[1000px]:h-[200px] max-[1200px]:h-[300px] h-full object-contain'} src={collab} alt={'innomind'}/>

                </div>


            </div>

          
            </div>

    
    </>
}