import React, { useEffect, useState } from 'react';
import { mainContentData } from '../data/mainContentData';
import { CopyToClipboard } from "react-copy-to-clipboard";
import { NavLink } from 'react-router-dom';

const MainContent = (props) => {
    const [currentContent] = useState(mainContentData);
    const content = currentContent[props.mainContent];
    const isEnglish = props.english

    useEffect(() => {
        //header style
        const header = document.querySelector('.header');
        if (header.classList[1] === 'black') {
            header.classList.remove('black');
        }

        const animatedTitle = document.querySelectorAll('.content h1');
        const animatedSpan = document.querySelectorAll('.borders span');
        const animatedContent = document.querySelectorAll('.content p');
        const animatedButton = document.querySelector('.button');
        const animatedContentImage = document.querySelector('.content-img');
        const animatedBeforeImage = document.querySelector('.before-img');
        const animatedAfterImage = document.querySelector('.after-img');
        const animatedNumber = document.querySelector('.content-number em');
        const animatedIco = document.querySelectorAll('.animate-social-ico img');
        const animatedImage = document.querySelector('.content-img img');

        animatedTitle.forEach((e) => {
            setTimeout(() => {
                e.className = "right-animation";
            }, 20);
        })

        animatedSpan.forEach((e) => {
            setTimeout(() => {
                e.classList.add("right-animation");
            }, 350);
        })

        animatedContent.forEach((e) => {
            setTimeout(() => {
                e.className = "right-animation";
            }, 500);
        })

        if (animatedIco) {
            animatedIco.forEach((e) => {
                setTimeout(() => {
                    e.className = "ico-animation";
                    e.addEventListener('mouseenter', () => { icoUp(e) });
                }, 500);
            })

            const icoUp = (ico) => {
                ico.style.transform = "translateY(-50%)"

                setTimeout(() => {
                    ico.style.transform = "translateY(0)"
                }, 800)
            }
        }

        if (animatedButton) {
            setTimeout(() => {
                animatedButton.classList.add("right-animation");
            }, 500);
        }

        if (animatedImage) {
            setTimeout(() => {
                animatedContentImage.style.transform = "scale(1)"
            })

            animatedBeforeImage.style.animation = "runBefore 0.9s ease-in";
            if (window.matchMedia("(orientation:portrait)").matches) {
                setTimeout(() => { animatedBeforeImage.style.transform = "translateX(-100%)" }, 900)
            } else {
                setTimeout(() => { animatedBeforeImage.style.transform = "translateX(100%)" }, 900)
            }
            animatedAfterImage.style.animation = "runAfter 1.1s ease-in";
        }

        if (animatedNumber) {
            setTimeout(() => {
                animatedNumber.className = "top-animation";
            }, 500);
        }

    }, [isEnglish]);

    return (
        <>
            {!isEnglish &&
                <div className="main-content">
                    <div className="content">
                        <h1>{content.title[0]}</h1>

                        {content.title2 && <h1>{content.title2[0]}</h1>}

                        <div className="borders">
                            <span className="top-border"></span>
                            <span className="bottom-border"></span>
                        </div>

                        {content.content && <p>{content.content[0]}</p>}

                        {content.phone &&
                            <CopyToClipboard text="0781938154" className="hovered">
                                <p style={{ cursor: 'pointer' }} onClick={() => { alert("Copié dans le presse papier !") }}>{content.phone}</p>
                            </CopyToClipboard>
                        }
                        {content.email &&
                            <CopyToClipboard text="morizekevin91@gmail.com" className="hovered">
                                <p style={{ cursor: 'pointer' }} onClick={() => { alert("Copié dans le presse papier !") }}>{content.email}</p>
                            </CopyToClipboard>
                        }
                        {content.email &&
                            <ul className="animate-social-ico">
                                <li>
                                    <a href="https://discord.com/channels/Allun33d#6386" target="_blank" title="discord.com" rel="noopener noreferrer" className="hovered">
                                        <img src="./assets/img/discord.png" alt="messenger" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/kevinmorize1991" target="_blank" title="facebook.com" rel="noopener noreferrer" className="hovered">
                                        <img src="./assets/img/facebook.png" alt="messenger" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/kevin_morize/" target="_blank" title="instagram.com" rel="noopener noreferrer" className="hovered">
                                        <img src="./assets/img/instagram.png" alt="messenger" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/morize_kevin" target="_blank" title="twitter.com" rel="noopener noreferrer" className="hovered">
                                        <img src="./assets/img/twitter.png" alt="messenger" />
                                    </a>
                                </li>
                            </ul>
                        }
                        {content.link &&
                            <div className="button">
                                <NavLink to={content.link} exact className="hovered">Voir plus</NavLink>
                            </div>
                        }
                    </div>
                    {content.img &&
                        <div className="content-img">
                            <div className="before-img"></div>
                            <div className="after-img"></div>
                            <img src={content.img} alt={content.title} />
                        </div>
                    }
                    {content.number &&
                        <div className="content-number">
                            <em>{content.number}</em>
                        </div>
                    }
                </div>
            }
            {isEnglish &&
                <div className="main-content">
                    <div className="content">
                        <h1>{content.title[1]}</h1>

                        {content.title2 && <h1>{content.title2[1]}</h1>}

                        <div className="borders">
                            <span className="top-border"></span>
                            <span className="bottom-border"></span>
                        </div>

                        {content.content && <p>{content.content[1]}</p>}

                        {content.phone &&
                            <CopyToClipboard text="0781938154" className="hovered">
                                <p style={{ cursor: 'pointer' }} onClick={() => { alert("Copié dans le presse papier !") }}>{content.phone}</p>
                            </CopyToClipboard>
                        }
                        {content.email &&
                            <CopyToClipboard text="morizekevin91@gmail.com" className="hovered">
                                <p style={{ cursor: 'pointer' }} onClick={() => { alert("Copié dans le presse papier !") }}>{content.email}</p>
                            </CopyToClipboard>
                        }
                        {content.email &&
                            <ul className="animate-social-ico">
                                <li>
                                    <a href="https://discord.com/channels/Allun33d#6386" target="_blank" title="discord.com" rel="noopener noreferrer" className="hovered">
                                        <img src="./assets/img/discord.png" alt="messenger" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/kevinmorize1991" target="_blank" title="facebook.com" rel="noopener noreferrer" className="hovered">
                                        <img src="./assets/img/facebook.png" alt="messenger" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/kevin_morize/" target="_blank" title="instagram.com" rel="noopener noreferrer" className="hovered">
                                        <img src="./assets/img/instagram.png" alt="messenger" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/morize_kevin" target="_blank" title="twitter.com" rel="noopener noreferrer" className="hovered">
                                        <img src="./assets/img/twitter.png" alt="messenger" />
                                    </a>
                                </li>
                            </ul>
                        }
                        {content.link &&
                            <div className="button">
                                <NavLink to={content.link} exact className="hovered">See more</NavLink>
                            </div>
                        }
                    </div>
                    {content.img &&
                        <div className="content-img">
                            <div className="before-img"></div>
                            <div className="after-img"></div>
                            <img src={content.img} alt={content.title} />
                        </div>
                    }
                    {content.number &&
                        <div className="content-number">
                            <em>{content.number}</em>
                        </div>
                    }
                </div>
            }
        </>
    );
};

export default MainContent;