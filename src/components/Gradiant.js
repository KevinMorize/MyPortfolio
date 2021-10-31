import React, { useEffect } from 'react';

const Gradiant = () => {

    useEffect(() => {

        const gradiant = document.querySelector('.grandiant');
        const dots = document.querySelectorAll('.dot');

        dots.forEach((e) => {
            if(window.matchMedia("(orientation:portrait)").matches){
                e.style.top = `${Math.random() * window.innerHeight}px`;
                e.style.left = `${Math.random() * window.innerWidth}px`;
            } else {
                e.style.top = `${Math.random() * window.innerHeight}px`;
                e.style.left = `${Math.random() * window.innerWidth}px`;
            }
        })

        const handleMouseMove = (e) => {
            if(window.matchMedia("(orientation:portrait)").matches){
                e.preventDefault()
            } else {
                const translateX = -(e.clientX - (window.innerWidth / 2)) / 50;
                const translateY = -(e.clientY - (window.innerHeight / 2)) / 40;
    
                gradiant.style.transform = `translate(${translateX}px,${translateY}px)`;
                dots.forEach((e) => {
                    e.style.transform = `translate(${translateX / 2}px, ${translateY / 2}px)`;
                })
            }
            
        }

        window.addEventListener('mousemove', handleMouseMove)

    }, []);

    return (
        <div className="grandiant">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
        </div>
    );
};

export default Gradiant;