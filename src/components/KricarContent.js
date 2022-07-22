import React from "react";

const KricarContent = (props) => {
  const isEnglish = props.english;
  return (
    <div className="content_container">
      <div className="content_container_top">
        <div className="content_title">
          <div>
            <h2 className="content_title1">ROLE</h2>
            <p className="content_title2">
              {!isEnglish ? "developpeur fron-end" : "front-end developer"}
            </p>
          </div>
          <div>
            <h2 className="content_title1">LANGUAGES</h2>
            <p className="content_title2">React Native / Python</p>
          </div>
          <div>
            <h2 className="content_title1">
              {!isEnglish ? "APERCU" : "OVERVIEW"}
            </h2>
            <p className="content_title2">
              {!isEnglish
                ? "développement de l'application mobile"
                : "mobile app development"}
            </p>
          </div>
        </div>
      </div>
      <img src="../assets/img/about/kricar.png" alt="trace-img" />
      <div className="content_container_bottom">
        <p>
          {!isEnglish
            ? "Ma plus longue mission à ce jour en tant que développeur. En tant que responsable du développement de la partie mobile j'ai du mettre à contribution toute l'organisation et les connaissance possibles. Seul sur la partie front-end j'ai pu m'en donner à coeur joie en partant from scratch. Aujourd'hui c'est un vrai projet en attente de commercialisation qui est naît, ce fût une belle aventure et une réussite personnelle."
            : "My longest assignment to date as a developer. As responsible for the development of the mobile part, I had to use all the organization and knowledge possible. Alone on the front-end part I was able to have a field day starting from scratch. Today it is a real project awaiting marketing that is born, it was a great adventure and a personal success."}
        </p>
      </div>
    </div>
  );
};

export default KricarContent;
