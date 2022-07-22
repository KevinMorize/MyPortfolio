import React, { useEffect } from "react";
import { useState } from "react";

const AboutMe = (props) => {
  const [loaded, setLoaded] = useState(false);
  const isEnglish = props.english;

  useEffect(() => {
    const img = document.querySelector(".content-img");
    const h2 = document.querySelector(".text-content h2");
    const h3 = document.querySelector(".text-content h3");
    const p = document.querySelectorAll(".text-content p");
    const animatedBeforeImage = document.querySelector(".before-img");
    const animatedAfterImage = document.querySelector(".after-img");

    if (loaded) {
      if (window.matchMedia("(orientation:portrait)").matches) {
        animatedBeforeImage.style.animation = "runBefore 0.9s ease-in";
        animatedAfterImage.style.animation = "runAfter 1.1s ease-in";
      } else {
        animatedBeforeImage.style.animation = "runBefore 1.4s ease-in";
        animatedAfterImage.style.animation = "runAfter 1.5s ease-in";
      }
      setTimeout(() => {
        img.style.transform = "scale(1)";
      }, 20);
      setTimeout(() => {
        h2.style.transform = "translateX(0)";
      }, 500);
      setTimeout(() => {
        h3.style.transform = "translateY(0)";
      }, 300);
      p.forEach((e) => {
        e.style.transform = "translateY(0)";
      });
    }
  }, [isEnglish, loaded]);

  return (
    <div className="content-me">
      <div className="text-content">
        <h2>Kevin Morize</h2>
        <h3>{!isEnglish ? "31 ans" : "31 yo"}</h3>
        <p>
          {!isEnglish
            ? "Après une reconversion réussie le developpement web c'est avec engouement que je m'investis dans mon travail."
            : "After a successful retraining in web development, it is with enthusiasm that I invest myself in my work."}
        </p>
        <p>
          {!isEnglish
            ? "Ayant suivi une formation professionnelle, j'ai commencé par les basiques pour m'orienter autour du Javascript, du React ainsi que du Node. Au fil du temps mon horizon c'est élargit à l'ensemble des connaissances qui font de nous des développeurs full stack."
            : "Having followed a professional training, I started with the basics to specialize myself around Javascript, React and Node. Over time my horizon is broadening to all the knowledge that makes us full stack developers."}
        </p>
        <p>
          {!isEnglish
            ? "Passionné par mon métier je tiens sans cesse à élargir mes domaines de compétences. C'est toujours un réel plaisir d'acquirir du savoir et de la maitrise sur de nouvelles technologies."
            : "Passionate about my job, I constantly want to expand my areas of expertise. It is always a real pleasure to acquire knowledge and mastery of new technologies."}
        </p>
        <p>
          {!isEnglish
            ? "Si vous avez senti quelque chose en moi qui vous intéresse, n'hésitez surtout pas et allez sur la page contact. Je vous souhaite une agréable navigation dans ce Portfolio."
            : "If you have felt something in me that interests you, do not hesitate and go to the contact page. I wish you a pleasant navigation in this Portfolio."}
        </p>
      </div>
      <div className="content-img">
        <img
          src="../assets/img/profil-pic.jpg"
          alt="profil-pic"
          onLoad={() => setLoaded(true)}
        />
        <div className="before-img"></div>
        <div className="after-img"></div>
      </div>
    </div>
  );
};

export default AboutMe;
