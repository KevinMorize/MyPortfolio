import React, { useEffect, useState } from 'react';

const AboutSkills = (props) => {
    const isEnglish = props.english
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const detail = document.querySelectorAll('.skill-detail');
        detail.forEach((e) => {
            const rate = e.querySelector('.skill-rate');
            const barsAfter = e.querySelector('.skill-bar span');
            if (isVisible === true) {
                barsAfter.style.width = `${rate.innerHTML}`;
            } else {
                barsAfter.style.width = "10%";
            }
        })
    }, [isEnglish, isVisible]);

    // scroll display
    function setVisible() {
        let elem = document.getElementById('displaySkills');
        let coordinates = elem.getBoundingClientRect();

        if (
            (coordinates.right > window.innerWidth || coordinates.bottom > window.innerHeight) ||
            (coordinates.top < 0 || coordinates.left < 0)
        ) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    }

    window.addEventListener('wheel', setVisible);
    window.addEventListener('touchmove', setVisible);

    return (
        <div className="content-skill">
            <ul className="skill-list">
                <li className="skill-item" id="displaySkills">
                    <div className="skill-ico">
                        <img src="../assets/html5.svg" alt="html5" />
                    </div>
                    <div className="skill-detail">
                        <div className="skill-meta">
                            <div className="skill-name">
                                <h4>HTML</h4>
                                {!isEnglish && <p>1 an</p>}
                                {isEnglish && <p>1 year</p>}
                            </div>
                            <p className="skill-rate">90%</p>
                        </div>
                        <div className="skill-bar"><span></span></div>
                    </div>
                </li>
                <li className="skill-item">
                    <div className="skill-ico">
                        <img src="../assets/js.svg" alt="javascript" />
                    </div>
                    <div className="skill-detail">
                        <div className="skill-meta">
                            <div className="skill-name">
                                <h4>JAVASCRIPT</h4>
                                {!isEnglish && <p>8 mois</p>}
                                {isEnglish && <p>8 month</p>}
                            </div>
                            <p className="skill-rate">70%</p>
                        </div>
                        <div className="skill-bar"><span></span></div>
                    </div>
                </li>
                <li className="skill-item">
                    <div className="skill-ico">
                        <img src="../assets/node.svg" alt="node" />
                    </div>
                    <div className="skill-detail">
                        <div className="skill-meta">
                            <div className="skill-name">
                                <h4>NODE JS</h4>
                                {!isEnglish && <p>8 mois</p>}
                                {isEnglish && <p>8 month</p>}
                            </div>
                            <p className="skill-rate">80%</p>
                        </div>
                        <div className="skill-bar"><span></span></div>
                    </div>
                </li>
                <li className="skill-item">
                    <div className="skill-ico">
                        <img src="../assets/sass.svg" alt="sass" />
                    </div>
                    <div className="skill-detail">
                        <div className="skill-meta">
                            <div className="skill-name">
                                <h4>SASS</h4>
                                {!isEnglish && <p>2 mois</p>}
                                {isEnglish && <p>2 month</p>}
                            </div>
                            <p className="skill-rate">50%</p>
                        </div>
                        <div className="skill-bar"><span></span></div>
                    </div>
                </li>
            </ul>

            <ul className="skill-list">
                <li className="skill-item">
                    <div className="skill-ico">
                        <img src="../assets/css3.svg" alt="css3" />
                    </div>
                    <div className="skill-detail">
                        <div className="skill-meta">
                            <div className="skill-name">
                                <h4>CSS</h4>
                                {!isEnglish && <p>1 an</p>}
                                {isEnglish && <p>1 year</p>}
                            </div>
                            <p className="skill-rate">90%</p>
                        </div>
                        <div className="skill-bar"><span></span></div>
                    </div>
                </li>
                <li className="skill-item">
                    <div className="skill-ico">
                        <img src="../assets/react.svg" alt="react" />
                    </div>
                    <div className="skill-detail">
                        <div className="skill-meta">
                            <div className="skill-name">
                                <h4>REACT JS</h4>
                                {!isEnglish && <p>3 mois</p>}
                                {isEnglish && <p>3 month</p>}
                            </div>
                            <p className="skill-rate">60%</p>
                        </div>
                        <div className="skill-bar"><span></span></div>
                    </div>
                </li>
                <li className="skill-item">
                    <div className="skill-ico">
                        <img src="../assets/redux.svg" alt="redux" />
                    </div>
                    <div className="skill-detail">
                        <div className="skill-meta">
                            <div className="skill-name">
                                <h4>REDUX</h4>
                                {!isEnglish && <p>1 mois</p>}
                                {isEnglish && <p>1 month</p>}
                            </div>
                            <p className="skill-rate">40%</p>
                        </div>
                        <div className="skill-bar"><span></span></div>
                    </div>
                </li>
                <li className="skill-item">
                    <div className="skill-ico">
                        <img src="../assets/mysql.svg" alt="mysql" />
                    </div>
                    <div className="skill-detail">
                        <div className="skill-meta">
                            <div className="skill-name">
                                <h4>MYSQL</h4>
                                {!isEnglish && <p>8 mois</p>}
                                {isEnglish && <p>8 month</p>}
                            </div>
                            <p className="skill-rate">90%</p>
                        </div>
                        <div className="skill-bar"><span></span></div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default AboutSkills;