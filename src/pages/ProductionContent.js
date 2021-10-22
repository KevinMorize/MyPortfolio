import { useEffect } from "react";

const ProductionContent = () => {

    const backRedirect = () => {
        window.location.href = window.location.origin + '/production';
    }

    useEffect(() => {

        //header style
        const header = document.querySelector('.header');
        header.classList.add('black');

        //arrow const
        const arrowDiv = document.querySelector('.back');
        const animatedArrow = document.querySelector('.back img');
        const animatedBackward = document.querySelector('.back p');

        //tools const
        const screwdriver = document.querySelector('.screwdriver');
        const wrench = document.querySelector('.wrench')

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

        // tools animation 
        if (window.matchMedia("(orientation:portrait)").matches) {
             setTimeout(() => {
            screwdriver.style.animation = "dongleSkrew 2s ease-in-out"
            wrench.style.animation = "dongleWrench 2s ease-in-out"
        }, 100)
        } else {
            setTimeout(() => {
                screwdriver.style.transform = "translate(100%, 0)";
                wrench.style.transform = "rotate(-90deg) translateY(-100%)";
            }, 900)
            screwdriver.style.animation = "dongleSkrew 2s ease-in-out"
            wrench.style.animation = "dongleWrench 2s ease-in-out"
        }

        // arrow events
        arrowDiv.addEventListener('mouseover', onMouseOverArrow);
        arrowDiv.addEventListener('mouseleave', onMouseLeaveArrow);

    }, [])

    return (
        <div className="production-content">
            <div className="back">
                <img src="../assets/back.svg" alt="back" className="hovered" onClick={backRedirect}></img>
                <p className="hovered" onClick={backRedirect}>Back</p>
            </div>

            <div className="about-titles">
                <em>01</em>
                <h1>COMING SOON</h1>
            </div>

            <div className="content">
                <img src="../assets/img/screwdriver.png" alt="screwdriver" className="screwdriver" />
                <img src="../assets/img/wrench.png" alt="wrench" className="wrench" />
            </div>

            <div className="about-titles">
                <em>02</em>
                <h1>STILL IN WORK</h1>
            </div>
        </div>
    );
};

export default ProductionContent;