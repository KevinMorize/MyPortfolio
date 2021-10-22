import React, { useEffect } from 'react';

const ScrollDownItem = () => {

    useEffect (() => {
        const scrollDowwnItem = document.querySelector('.scroll-down-item');
        setTimeout(() => {
            scrollDowwnItem.style.transform = "translateY(0)"
        }, 20)    
    }, [])


    return (
        <p className="scroll-down-item">SCROLLDOWN</p>
    );
};

export default ScrollDownItem;