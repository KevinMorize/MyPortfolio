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
            <img
              src="../assets/img/about/about_passion/computer.png"
              alt="computer"
            />
            <h4 className="passion-title">
              {!isEnglish ? "Ordinateur" : "Computer"}
            </h4>
            <p className="passion-text">
              {!isEnglish
                ? "J'ai monté mon premier ordinateur moi-même et je l'ai beaucoup aimé. Il y'a quelques années j'ai décidé de quitter mon travail et de devenir développeur Web. Ce fût le meilleur choix de ma vie, désormais je peux vivre d'une de mes passions."
                : "I built my first computer myself and really liked it. A few years ago I decided to quit my job and become a web developer. It was the best choice of my life, now I can live from one of my passions."}
            </p>
          </li>
          <li className="passion-item">
            <img
              src="../assets/img/about/about_passion/games.png"
              alt="games"
            />
            <h4 className="passion-title">
              {!isEnglish ? "Jeux-vidéos" : "Games"}
            </h4>
            <p className="passion-text">
              {!isEnglish
                ? "J'ai grandi avec les jeux vidéo et je n'ai jamais arrêté de jouer depuis mon plus jeune âge. J'ai commencé avec Playstation 1 et Nintendo 64. Maintenant je continue quand le travail et la vie quotidienne me laissent le temps."
                : "I grew up with video games and never stopped playing since I was young. I started with Playstation 1 and Nintendo 64. Now I continue when work and daily life give me time."}
            </p>
          </li>
          <li className="passion-item">
            <img
              src="../assets/img/about/about_passion/nature.png"
              alt="nature"
            />
            <h4 className="passion-title">Nature</h4>
            <p className="passion-text">
              {!isEnglish
                ? "Je vis avec ma copine et nos deux chiens. Je suis quelqu'un de proche de la nature. Je voyage autant que possible afin de découvrir de nouveaux environnements et modes de vie. Mes lieux de prédilection sont l'Europe et l'Asie."
                : "I live with my girlfriend and our two dogs. I am someone close to nature. I travel as much as possible in order to discover new environments and ways of life. My favorite places are Europe and Asia."}
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AboutPassion;
