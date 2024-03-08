import React from "react";
import "../Styles/Main.css";
import GradientButton from "./GradientButton";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faQrcode } from "@fortawesome/free-solid-svg-icons";
import token from "../Assets/token.avif";
import live from "../Assets/live.avif";
import ticket from "../Assets/ticket1.png";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import pillbox from "../Assets/PillBox.png"
import SpecialButton from "./SpecialButton";

const Projects = () => {
  return (
    <main>
      <div className="features-method" data-aos="fade-up">
       
        <div className="pricing" data-aos="fade-up">
          <h1>Our projects</h1>
          <p>We prioritize the integration of digital tools, including smart sensors capturing physiological, biochemical, EEG, imaging data and more.</p>
          <br />
          <div className="methods-flex">
          <div className="pricing-box">
          <img src={pillbox} alt="pillbox" />
            <div className="price-flex">
              <h2>Stresogenic stimulation</h2>
      
            </div>
            <div>
              <div>Testing the effect of stress on the physiological reactions of those suffering from PTSD through stickers that absorb designated substances and a smart sensor.</div>
             
            </div>
            <div className="btn-row">
            <SpecialButton href="/">
           
                Learn more
     
            </SpecialButton>
            </div>
          </div>
          <div className="pricing-box">
          <img src={pillbox} alt="pillbox" />
            <div className="price-flex">
              <h2>NeuroFeedback therapy</h2>
      
            </div>
            <div>
              <div>With Graymeters, we assess neurofeedback treatment for mild to moderate depression, to relieve symptoms of depression and anhedonia. An FDA-approved biofeedback device enhances our innovative approach.</div>
             
            </div>
            <div className="btn-row">
            <SpecialButton href="/">
           
                Learn more
     
            </SpecialButton>
            </div>
          </div>
          <div className="pricing-box">
          <img src={pillbox} alt="pillbox" />
            <div className="price-flex">
              <h2>PTSD patients and exposure therapy (PE)</h2>
      
            </div>
            <div>
              <div>Measuring response and change in the bioenergetic phenotype during prolonged exposure treatment, as part of treatment for post-traumatic stress disorder using a smart watch.</div>
             
            </div>
            <div className="btn-row">
            <SpecialButton href="/">
           
                Learn more
     
            </SpecialButton>
            </div>
            
          </div>
          </div>
        </div>
       
      </div>
    </main>
  );
};

export default Projects;
