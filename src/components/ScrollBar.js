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
                <NavLink to="/production" exact className="hovered">      
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