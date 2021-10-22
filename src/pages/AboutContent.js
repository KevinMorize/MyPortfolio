import { useEffect } from "react";
import AboutMe from "../components/AboutMe";
import AboutPassion from "../components/AboutPassion";
import AboutSkills from "../components/AboutSkills";
import { CopyToClipboard } from "react-copy-to-clipboard";

const AboutContent = () => {

    // redirect
    const backRedirect = () => {
        window.location.href = window.location.origin + '/about';
    }

    useEffect(() => {
        //header style
        const header = document.querySelector('.header');
        header.classList.add('black');

        //arrow const
        const arrowDiv = document.querySelector('.back');
        const animatedArrow = document.querySelector('.back img');
        const animatedBackward = document.querySelector('.back p');

        //arrow animation
        setTimeout(() => {
            animatedArrow.classList.add("arrow-animation");
            animatedBackward.classList.add("arrow-animation");
        }, 350);

        const onMouseOverArrow = () => {
            arrowDiv.style.animation = ('translateArrow ease 1s infinite alternate');
        }

        const onMouseLeaveArrow = () => {
            arrowDiv.style.animation = ('');
        }

        // arrow events
        arrowDiv.addEventListener('mouseover', onMouseOverArrow)
        arrowDiv.addEventListener('mouseleave', onMouseLeaveArrow)

    }, [])

    return (
        <div className="about-content">

            <div className="back">
                <img src="../assets/back.svg" alt="back" className="hovered" onClick={backRedirect}></img>
                <p className="hovered" onClick={backRedirect}>Back</p>
            </div>

            {/* first content */}
            <div className="about-titles">
                <em>01</em>
                <h1>WHO I AM</h1>
            </div>
            <AboutMe />

            {/* second content */}
            <div className="about-titles">
                <em>02</em>
                <h1>PASSIONS</h1>
            </div>
            <AboutPassion />

            {/* third content */}
            <div className="about-titles">
                <em>03</em>
                <h1>SKILL SET</h1>
            </div>
            <AboutSkills />

            <ul className="footer">
                <li>
                    <CopyToClipboard text="morizekevin91@gmail.com">
                    <p className="hovered" style={{ cursor: 'pointer' }} onClick={() => { alert("Copié dans le presse papier !") }}>morizekevin91@gmail.com</p>
                    </CopyToClipboard>
                </li>
                <li>
                    <CopyToClipboard text="0781938154">
                    <p className="hovered" style={{ cursor: 'pointer' }} onClick={() => { alert("Copié dans le presse papier !") }}>0781938154</p>
                    </CopyToClipboard>
                </li>
            </ul>

        </div>
    );
};

export default AboutContent;