import React, { useEffect } from 'react';

const ScrollBar = () => {

    useEffect(() => {
        const currentLocation = window.location.href.toString();
        const scrollLinks = document.querySelectorAll('.scroll-bar ul a');

        scrollLinks.forEach((e) => {
            if (e.href === currentLocation) {
                const linkBar = e.querySelector('li')
                linkBar.className = "active"
            }
        })


    }, []);

    return (
        <div className="scroll-bar">
            <ul>       
                <a href="http://localhost:3000/" className="hovered">
                    <li></li>
                </a>
                <a href="http://localhost:3000/about" className="hovered">
                    <li></li>
                </a>
                <a href="http://localhost:3000/production" className="hovered">
                    <li></li>
                </a>
                <a href="http://localhost:3000/contact" className="hovered">
                    <li></li>
                </a>
            </ul>
        </div>
    );
};

export default ScrollBar;