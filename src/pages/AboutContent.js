import { useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { NavLink } from 'react-router-dom';
import AboutMe from "../components/AboutMe";
import AboutPassion from "../components/AboutPassion";
import AboutSkills from "../components/AboutSkills";

const AboutContent = (props) => {

    const isEnglish = props.english;

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
        };

        const onMouseLeaveArrow = () => {
            arrowDiv.style.animation = ('');
        };

        // arrow events
        arrowDiv.addEventListener('mouseover', onMouseOverArrow);
        arrowDiv.addEventListener('mouseleave', onMouseLeaveArrow);

    }, [isEnglish]);

    return (
        <div className="second-content">
            <div className="back">
                <NavLink exact to="/about" className="hovered">
                    <img src="../assets/back.svg" alt="retour"></img>
                    <p>{!isEnglish ? "Retour" : "Back"}</p>
                </NavLink>
            </div>

            {/* first content */}
            <div className="about-titles">
                <em>01</em>
                <h1>{!isEnglish ? "QUI JE SUIS" : "WHO AM I"}</h1>
            </div>
            {!isEnglish ? <AboutMe english={false} /> : <AboutMe english={true} />}

            {/* second content */}
            <div className="about-titles">
                <em>02</em>
                <h1>PASSIONS</h1>
            </div>
            {!isEnglish ? <AboutPassion english={false} /> : <AboutPassion english={true} />}

            {/* third content */}
            <div className="about-titles">
                <em>03</em>
                <h1>{!isEnglish ? "COMPÉTENCES" : "SKILLS"}</h1>
            </div>
            {!isEnglish ? <AboutSkills english={false} /> : <AboutSkills english={true} />}

            <ul className="footer">
                <li>
                    <CopyToClipboard text="morizekevin91@gmail.com">
                        <p className="hovered" style={{ cursor: 'pointer' }} onClick={() => { !isEnglish ? alert("Copié dans le presse papier !") : alert("Copied to clipboard!") }}>morizekevin91@gmail.com</p>
                    </CopyToClipboard>
                </li>
                <li>
                    <CopyToClipboard text="0781938154">
                        <p className="hovered" style={{ cursor: 'pointer' }} onClick={() => { !isEnglish ? alert("Copié dans le presse papier !") : alert("Copied to clipboard!") }}>0781938154</p>
                    </CopyToClipboard>
                </li>
            </ul>
        </div>
    );
};

export default AboutContent;