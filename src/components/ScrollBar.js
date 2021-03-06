import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const ScrollBar = () => {

    useEffect(() => {
        const currentLocation = window.location.href.toString();
        const scrollLinks = document.querySelectorAll('.scroll-bar ul a');

        scrollLinks.forEach((e) => {
            if (e.href === currentLocation) {
                setTimeout(() => {
                    const linkBar = e.querySelector('li');
                    linkBar.className = "active"
                }, 100);
            }
        })


    }, []);

    return (
        <div className="scroll-bar">
            <ul>
                <NavLink to="/" exact className="hovered">
                    <li></li>
                </NavLink>

                <NavLink to="/about" exact className="hovered">
                    <li></li>
                </NavLink>

                <NavLink to="/production" exact className="hovered">
                    <li></li>
                </NavLink>

                <NavLink to="/contact" exact className="hovered">
                    <li></li>
                </NavLink>
            </ul>
        </div>
    );
};

export default ScrollBar;