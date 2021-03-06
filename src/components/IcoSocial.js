import { useState } from "react";

const IcoSocial = () => {
    const [isNav, setIsNav] = useState(false);

    const displayNav = () => {
        const nav = document.querySelector('.nav');
        const animatedCross = document.querySelectorAll('.ico-nav span')
        const th = document.querySelector('.nav-th');
        const tb = document.querySelector('.nav-tb');
        const animatedLink = document.querySelectorAll('.nav li');

        if (!isNav) {
            animatedLink.forEach((e) => {
                const displayLinkNav = () => {
                    nav.style.transform = 'translateY(-100vh)';
                    tb.style.transform = "rotate(0)";
                    th.style.transform = "rotate(0)";
                    animatedCross.forEach((e) => {
                        e.style.width = "90%"
                    });
                    setIsNav(false);
                }
                e.addEventListener('click', displayLinkNav)
            })
        }

        if (isNav) {
            nav.style.transform = 'translateY(-100vh)';
            tb.style.transform = "rotate(0)";
            th.style.transform = "rotate(0)";
            animatedLink.forEach((e) => {
                e.classList.remove("top-animation");
            })
            setIsNav(false)
        } else {
            nav.style.transform = 'translateY(0)';
            tb.style.transform = "rotate(-45deg)";
            th.style.transform = "rotate(-135deg)";
            animatedLink.forEach((e) => {
                setTimeout(() => {
                    e.classList.add("top-animation");
                }, 100)
            });
            setIsNav(true)
        }
    }

    const anim = () => {
        let icons = document.querySelectorAll('.ico-social i');

        icons.forEach(i => {
            i.addEventListener('mouseover', (e) => {
                let attrX = e.offsetX - 20;
                let attrY = e.offsetY - 8;
                i.style.transform = `translate(${attrX}px, ${attrY}px)`;
            })
            i.addEventListener('mouseleave', () => {
                i.style.transform = '';
            })
        })
    }

    return (
        <ul className="header-ico">
            <li>
                <a href="https://github.com/KevinMorize" target="_blank" title="github" rel="noopener noreferrer" onMouseOver={anim} className="hovered">
                    <i className="fab fa-github"></i>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/kevinmorize/" target="_blank" title="linkedin" rel="noopener noreferrer" onMouseOver={anim} className="hovered">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </li>
            <li className="ico-nav hovered" onClick={displayNav} >
                <span className="nav-th"></span>
                <span className="nav-tb"></span>
            </li>
        </ul>
    );
};

export default IcoSocial;