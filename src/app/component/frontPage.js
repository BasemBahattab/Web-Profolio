import Github from './images/Tools and Platform/Github.png'
import Linkedin from './images/Tools and Platform/Linkedin.png'
import Email from './images/Tools and Platform/Email.png'
import NextJS from './images/Tools and Platform/NextJS.png'
import ReactJS from './images/Tools and Platform/ReactJS.png'
import SwiperJS from './images/Tools and Platform/SwiperJS.png'

export default function frontPage() {
    return (
        <div className="welcome-home">
            <h1>Basem Bahattab</h1>
            <div className="accounts-div">
                <a target="_blank" href="https://github.com/BasemBahattab">
                    <img className="accounts-img" src={Github.src} />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/basem-bahattab-1470b1224/">
                    <img className="accounts-img" src={Linkedin.src} />
                </a>
                <a target="_blank" href="mailto:bahattabbasem@gmail.com">
                    <img className="accounts-img" src={Email.src} />
                </a>
            </div>
            <br></br>
            <div className="madeBy-div">
                <h3>Protfolio made by</h3>
                <div className="madeBy-icons">
                    <a target="_blank" href="https://react.dev/">
                        <img className="madeBy-img"  src={ReactJS.src}></img>
                    </a>
                    <a target="_blank" href="https://nextjs.org/">
                        <img className="madeBy-img" src={NextJS.src}></img>
                    </a>
                    <a target="_blank" href="https://swiperjs.com/">
                        <img className="madeBy-img" src={SwiperJS.src}></img>
                    </a>
                </div>
            </div>
        </div>
    )
}