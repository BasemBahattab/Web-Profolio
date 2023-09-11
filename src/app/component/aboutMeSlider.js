"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode, Scrollbar, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';

import Personal_Pic from '../component/images/extra/AboutMe/Personal_Pic.png'
import CV_Pic from '../component/images/extra/AboutMe/CV.png'
import Arrow from '../component/images/extra/icons/arrow.png'

import ScrollDown from "./scrollDown";

export default function aboutMeSlider() {
    return (
        <Swiper
            modules={[Pagination, FreeMode, Scrollbar, Mousewheel]}
            slidesPerView={1}
            scrollbar={{ draggable: true, dragSize: 24 }}
            mousewheel={true}
            direction={"vertical"}
            style={{
                width: "100%"
            }}
        >
            <SwiperSlide>{firstSlide()}</SwiperSlide>
            <SwiperSlide>{secondSlide()}</SwiperSlide>
        </Swiper>
    );
}

function firstSlide() {
    return (
        <div className="aboutMe-Slide" id="firstSlide-aboutMe">
            <p>My journey began when I was a child who loved spending time on the computer.
                I am grateful that I could turn my passion and excitement into something
                that could benefit me and help others. Back then, I dreamed of building
                my own application that could assist my family and friends. Over the years,
                I have become a programmer with technical support skills and an interest
                in cybersecurity. As an IT graduate at KAU, I have achieved many of my
                goals and am beginning to find new challenges, ideas, and passions in
                different fields. Despite failures and hard work, I am pleased to have
                reached this level in the computer field, and I am proud of being a fast
                learner, a self-learner, excited, highly motivated, and versatile.
            </p>
            <div className="image-aboutMe">
                <img src={Personal_Pic.src} />
            </div>
            <ScrollDown />
        </div>
    )
}

function secondSlide() {
    return (
        <div className="aboutMe-Slide" id="secondSlide-aboutMe">
            <div className="display-CV">
                <img src={CV_Pic.src} loading="lazy"/>
                <a href="https://basembahattabcv.tiiny.site/" target="_blank" style={{ zIndex: "5" }}>
                    <img src={Arrow.src} loading="lazy"/>
                </a>
            </div>
        </div>
    )
}
