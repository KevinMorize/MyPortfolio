import React, { useEffect } from 'react';

const AboutPassion = () => {

    useEffect(() => {
        const img = document.querySelectorAll('.passion-item img');

        img.forEach((e) => {
            e.style.transform = "scale(1)"
        })

    }, [])

    return (
        <div className="content-passion">
            <ul className="passion-list">
                <li className="passion-item">
                    <img src="../assets/img/computer.png" alt="computer" />
                    <h4 className="passion-title">Computer</h4>
                    <p className="passion-text">I built my first computer myself and I liked it very much, years after I decided to quit my job and become a web developper. Since that I'm very passionate by coding.</p>
                </li>
                <li className="passion-item">
                    <img src="../assets/img/games.png" alt="games" />
                    <h4 className="passion-title">Games</h4>
                    <p className="passion-text">I grew up with video games and I've never stop to play since my young age. I started with Playstation 1 and Nintendo 64, now I keep going on computer games exclusively. </p>
                </li>
                <li className="passion-item">
                    <img src="../assets/img/nature.png" alt="nature" />
                    <h4 className="passion-title">Nature</h4>
                    <p className="passion-text">I live with my girlfriend and our two dogs. I love animals and walking in nature with them. I also travel a lot in Europe and Asia to discover new environments and lifestyles.</p>
                </li>
            </ul>
        </div>
    );
};

export default AboutPassion;