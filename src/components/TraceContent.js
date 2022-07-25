import React from "react";

const TraceContent = (props) => {
  const isEnglish = props.english;
  return (
    <div className="content_container">
      <div className="content_container_top">
        <div className="content_title">
          <div>
            <h2 className="content_title1">ROLE</h2>
            <p className="content_title2">
              {!isEnglish ? "developpeur" : "developer"}
            </p>
          </div>
          <div>
            <h2 className="content_title1">LANGUAGES</h2>
            <p className="content_title2">React Js / TypeScript / Node Js</p>
          </div>
          <div>
            <h2 className="content_title1">
              {!isEnglish ? "APERCU" : "OVERVIEW"}
            </h2>
            <p className="content_title2">
              {!isEnglish
                ? "correction avant lancement"
                : "bug fixing before launch"}
            </p>
          </div>
        </div>
      </div>
      <img src="../assets/img/works/trace.png" alt="trace-img" />
      <div className="content_container_bottom">
        <p>
          {!isEnglish
            ? "J'ai participé durant plusieurs mois au développement de features et à la correction de bugs sur la plateforme web https://pro.youtrace.tv. Après m'être familiarisé avec l'environnement et le code déja en place j'ai pu participer à l'élaboration quotidienne de certaines parties du site côté front et identifier les problèmes côté back. Ce fût une mission de durée moyenne très enrichissante sur le plan personnel et le travail d'équipe."
            : "I participated for several months in the development of features and the correction of bugs on the web platform https://pro.youtrace.tv. After familiarizing myself with the environment and the code already in place, I was able to participate in the daily development of certain parts of the site on the front side and identify problems on the back side. It was a very rewarding medium-term mission on a personal level and teamwork."}
        </p>
      </div>
    </div>
  );
};

export default TraceContent;
