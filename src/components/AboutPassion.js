import React, { useEffect, useState } from "react";

const AboutPassion = (props) => {
  const isEnglish = props.english;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const img = document.querySelectorAll(".passion-item img");

    if (isVisible && window.matchMedia("(orientation:portrait)").matches) {
      img.forEach((e) => {
        e.style.transform = "scale(1)";
      });
    } else if (!window.matchMedia("(orientation:portrait)").matches) {
      img.forEach((e) => {
        e.style.transform = "scale(1)";
      });
    } else {
      img.forEach((e) => {
        e.style.transform = "scale(0.6)";
      });
    }

    document.addEventListener("wheel", setVisible);
    document.addEventListener("touchmove", setVisible);

    return () => {
      document.removeEventListener("wheel", setVisible);
      document.removeEventListener("touchmove", setVisible);
    };
  }, [isEnglish, isVisible]);

  // scroll display
  function setVisible() {
    let elem = document.getElementById("displayPassion");
    let coordinates = elem.getBoundingClientRect();

    if (coordinates.top <= window.innerHeight && coordinates.bottom >= 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  return (
    <>
      <div className="content-passion" id="displayPassion">
        <ul className="passion-list">
          <li className="passion-item">
            <img src="../assets/img/computer.png" alt="computer" />
            <h4 className="passion-title">
              {!isEnglish ? "Ordinateur" : "Computer"}
            </h4>
            <p className="passion-text">
              {!isEnglish
                ? "J'ai monté mon premier ordinateur moi-même et je l'ai beaucoup aimé, des années après avoir décidé de quitter mon travail et de devenir développeur Web. Depuis que je suis très passionné par le codage."
                : "I built my first computer myself and I liked it very much, years after I decided to quit my job and become a web developper. Since that I'm very passionate by coding."}
            </p>
          </li>
          <li className="passion-item">
            <img src="../assets/img/games.png" alt="games" />
            <h4 className="passion-title">
              {!isEnglish ? "Jeux-vidéos" : "Games"}
            </h4>
            <p className="passion-text">
              {!isEnglish
                ? "J'ai grandi avec les jeux vidéo et je n'ai jamais arrêté de jouer depuis mon plus jeune âge. J'ai commencé avec Playstation 1 et Nintendo 64, maintenant je continue exclusivement sur les jeux informatiques."
                : "I grew up with video games and I've never stop to play since my young age. I started with Playstation 1 and Nintendo 64, now I keep going on computer games exclusively."}
            </p>
          </li>
          <li className="passion-item">
            <img src="../assets/img/nature.png" alt="nature" />
            <h4 className="passion-title">Nature</h4>
            <p className="passion-text">
              {!isEnglish
                ? "Je vis avec ma copine et nos deux chiens. J'aime les animaux et me promener dans la nature avec eux. Je voyage aussi beaucoup en Europe et en Asie pour découvrir de nouveaux environnements et modes de vie."
                : "I live with my girlfriend and our two dogs. I love animals and walking in nature with them. I also travel a lot in Europe and Asia to discover new environments and lifestyles."}
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AboutPassion;
