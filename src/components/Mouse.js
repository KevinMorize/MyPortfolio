import React, { useEffect } from 'react';

const Mouse = () => {
    useEffect(() => {
        const cursor = document.querySelector('.cursor')
        const handleCursor = (e) => {
            cursor.style.top = e.clientY + "px";
            cursor.style.left = e.clientX + "px";
        }

        const handleHover = () => {
            cursor.classList.add('hovering')
        }

        const handleLeave = () => {
            cursor.style.transition = "0s ease-out";
            cursor.classList.remove('hovering');
        }

        window.addEventListener('mousemove', handleCursor);

        document.querySelectorAll('.hovered').forEach((i) => {
            i.addEventListener('mouseover', handleHover);
            i.addEventListener('mouseleave', handleLeave);
        })

    }, [])

    return <span className="cursor"></span>
};

export default Mouse;