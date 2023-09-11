"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import HTML from './images/Tools and Platform/HTML.png'
import CSS from './images/Tools and Platform/CSS.png'
import JS from './images/Tools and Platform/JS.png'
import PHP from './images/Tools and Platform/PHP.png'
import Heroku from './images/Tools and Platform/Heroku.png'
import Github from './images/Tools and Platform/Github.png'

import HomePage from './images/Project/Project 1//HomePage.png'
import HomePage2 from './images/Project/Project 1//HomePage2.png'
import RegisterOptions from './images/Project/Project 1//RegisterOptions.png'
import RegisterStudent from './images/Project/Project 1//RegisterStudent.png'

import Gear from './images/extra/icons/Gear.png'
import Maintenance from './images/extra/icons/Maintenance.png'

import ScrollDownAnimation from './scrollDown';

export default function projectSlider() {
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
            className='ProjectSlider'
        >
            <SwiperSlide>{Project1()}</SwiperSlide>
            <SwiperSlide>{Project2()}</SwiperSlide>
            ...
        </Swiper>
    )
}

function Project1() {
    return (
        <div className='project'>
            <div className='project-display'>
                <h1>Project 1</h1>
                <h1>Volunteer Platform for Student</h1>
                <Swiper
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation, Pagination]}
                    style={{ width: "65% ", position: "relative", display: "flex", zIndex: "10" }}
                    loop={true}
                    className='imageInProjectSlider'
                >
                    <SwiperSlide>{imageEleCreator(HomePage)}</SwiperSlide>
                    <SwiperSlide>{imageEleCreator(HomePage2)}</SwiperSlide>
                    <SwiperSlide>{imageEleCreator(RegisterOptions)}</SwiperSlide>
                    <SwiperSlide>{imageEleCreator(RegisterStudent)}</SwiperSlide>
                    ...
                </Swiper>
                <p>
                    The decision to add volunteer hours for high school students is slightly difficult to coordinate and manage volunteering opportunities.
                    The project assists students in completing the 40-hour volunteer requirement as well the platform coordinat or agency.
                    In continous for improvement and sharing knowledge, the source code have been shared in Github under name WinterG2/VPFS.
                </p>
                <div className="project-icons">
                    <img src={HTML.src}></img>
                    <img src={CSS.src}></img>
                    <img src={JS.src}></img>
                    <img src={PHP.src}></img>
                    <img src={Heroku.src}></img>
                    <a target="_blank" href="https://github.com/WinterG2/VPFS"><img src={Github.src}></img></a>
                </div>
                <ScrollDownAnimation/>
            </div>
        </div>
    )
}

function Project2() {
    return (
        <div className='project'>
            <div className='project-display'>
                <h1>Project 2</h1>
                <h1>COMING SOON...</h1>
                <div className="project-background" style={{ width: "40vh", height: "40vh" }}>
                    <div style={{ position: "absolute" }}>
                        <img src={Gear.src} className="gear" style={{ position: "absolute", width: "40vh", height: "auto" }}></img>
                        <img src={Maintenance.src} style={{ position: "absolute", width: "40vh", height: "auto", marginTop: "45px" }}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

function imageEleCreator(img) {
    var temp = img.src.split("/").pop();
    const imageName = temp.split(".").shift();
    return (
        <img src={img.src} style={{ width: "calc(50% + 20vh)", height: "auto", position: "relative", loading: "lazy" }} alt={imageName}></img>
    )
}