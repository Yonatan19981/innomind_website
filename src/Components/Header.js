import React, { useEffect, useRef } from "react";
import { TweenMax, TimelineLite, Power3 } from "gsap";
import "../Styles/Header.css";
import SpecialButton from "./SpecialButton";
import headerimage from "../Assets/MainHeaderImage.svg";
import polygon from "../Assets/polygon.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);

  let tl = new TimelineLite({ delay: 0.8 });

  useEffect(() => {
    const headerimage = images.firstElementChild;
    const healineFirst = content.children[0].children[0];
    const healineSecond = healineFirst.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[3];

    TweenMax.to(app, 0, { css: { visibility: "visible" } });

    tl.from(headerimage, 1.2, { y: 1280, ease: Power3.easeOut }, "Start").from(
      headerimage.firstElementChild,
      2,
      { scale: 1.6, ease: Power3.easeOut },
      0.2
    );

    tl.staggerFrom(
      [healineFirst.children, healineSecond.children],
      1,
      {
        y: 58,
        ease: Power3.easeOut,
        delay: 0.8,
      },
      0.15,
      "Start"
    )
      .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
      .from(contentButton, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6);

    AOS.init();
    AOS.refresh();
  });


  return (
    <header data-aos="fade-up" ref={(el) => (app = el)}>
      <div className="header-flex">
        <div className="header-content">
          <div className="header-content-inner" ref={(el) => (content = el)}>
            <h1>
              <div className="hero-content-line">
                <div className="hero-content-line-inner">The future of</div>
              </div>
              <div className="hero-content-line">
                <div className="hero-content-line-inner">
                mental health is here.
                </div>
              </div>
            </h1>
            <p>
            In this lab, we create innovative solutions for better mental health diagnosis, treatment and monitoring.
            </p>
            <br />
            <div className="btn-row">
              <SpecialButton>Contact us</SpecialButton>
            </div>
          </div>
        </div>
        <div className="header-image">
          <div className="header-image-inner" ref={(el) => (images = el)}>
            <img src={headerimage} alt="" />
          </div>
        </div>
      </div>
     
    </header>
  );
};

export default Header;
