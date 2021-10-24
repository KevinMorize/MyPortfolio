import React from 'react';
import { useEffect } from 'react';

const Moon = () => {

    useEffect(() => {
        const moon = document.querySelector('.moon');
        const clouds = document.querySelectorAll('.cloud');
        const portfolioTitle = document.querySelector('.moon-img p');

        const handleMouseMove = (e) => {
            if (window.matchMedia("(orientation:portrait)").matches) {
                e.preventDefault()
            } else {
                const translateX = -(e.clientX - (window.innerWidth / 2)) / 50;
                const translateY = -(e.clientY - (window.innerHeight / 2)) / 40;
                const translateZ = -(e.clientY - (window.innerHeight / 2)) / 70;

                moon.style.transform = `translate(${translateX * 1.2}px, ${translateY * 1.2}px)`;
                clouds.forEach((e) => {
                    e.style.transform = `perspective(200px) translate3d(${translateX * 1.2}px, ${translateY * 1.2}px, ${translateZ}px)`;
                })
                portfolioTitle.style.transform = `translate(${-translateX / 1.5}px, ${-translateY / 1.5}px)`;
            }
        }

        setTimeout(() => { window.addEventListener('mousemove', handleMouseMove) }, 20);

        setTimeout(() => {
            moon.classList.remove("moon-animation");
        }, 20);

        clouds.forEach((cloud) => {
            setTimeout(() => {
                cloud.classList.remove("cloud-animation");
            }, 20);
        })

        setTimeout(() => {
            portfolioTitle.classList.add("title-animation");
        }, 20);

    }, []);


    return (
        <div className="moon-img">
            <div className="moon moon-animation">
                <img src="./assets/moon.svg" alt="moon" />
            </div>

            <p>PORTFOLIO</p>

            <div className="cloud cloud1 cloud-animation">
                <img src="./assets/cloud1.svg" alt="cloud1" />
            </div>
            <div className="cloud cloud2 cloud-animation">
                <img src="./assets/cloud2.svg" alt="cloud2" />
            </div>
            <div className="cloud cloud3 cloud-animation">
                <img src="./assets/cloud3.svg" alt="cloud3" />
            </div>
            <div className="cloud cloud4 cloud-animation">
                <img src="./assets/cloud4.svg" alt="cloud4" />
            </div>
            <div className="cloud cloud5 cloud-animation">
                <img src="./assets/cloud5.svg" alt="cloud5" />
            </div>
        </div>
    );
};

export default Moon;