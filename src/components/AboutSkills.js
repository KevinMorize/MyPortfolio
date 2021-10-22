import React, { useEffect } from 'react';

const AboutSkills = () => {
    useEffect(() => {
        const detail = document.querySelectorAll('.skill-detail');
        detail.forEach((e) => {
            const rate = e.querySelector('.skill-rate');
            const barsAfter = e.querySelector('.skill-bar span');
            barsAfter.style.width = `${rate.innerHTML}`;
        })
    }, [])

    return (
            <div className="content-skill">
                <ul className="skill-list">
                    <li className="skill-item">
                        <div className="skill-ico">
                            <img src="../assets/html5.svg" alt="html5" />
                        </div>
                        <div className="skill-detail">
                            <div className="skill-meta">
                                <div className="skill-name">
                                    <h4>HTML</h4>
                                    <p>1 year</p>
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
                                    <p>8 month</p>
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
                                    <p>8 month</p>
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
                                    <p>2 month</p>
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
                                    <p>1 year</p>
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
                                    <p>3 month</p>
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
                                    <p>1 month</p>
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
                                    <p>8 month</p>
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