import React from "react";

const KricarContent = (props) => {
  const isEnglish = props.english;
  return (
    <div className="content_container">
      <div className="content_title">
        <div>
          <h2 className="content_title1">ROLE</h2>
          <p className="content_title2">
            {!isEnglish ? "developpeur" : "developer"}
          </p>
        </div>
        <div>
          <h2 className="content_title1">DATE</h2>
          <p className="content_title2">nov 2021 - ...</p>
        </div>
        <div>
          <h2 className="content_title1">
            {!isEnglish ? "APERCU" : "OVERVIEW"}
          </h2>
          <p className="content_title2">
            {!isEnglish
              ? "développement de l'application"
              : "application development"}
          </p>
        </div>
        <img
          src="../assets/img/production/github.png"
          alt="github"
          className="content_titlte_ico"
          id="github"
        />
        <img
          src="../assets/img/production/javascript.png"
          alt="javascript"
          className="content_titlte_ico"
          id="javascript"
        />
        <img
          src="../assets/img/production/react.png"
          alt="react"
          className="content_titlte_ico"
          id="react"
        />
        <img
          src="../assets/img/production/odoo.png"
          alt="odoo"
          className="content_titlte_ico"
          id="odoo"
        />
        <img
          src="../assets/img/production/xcode.png"
          alt="xcode"
          className="content_titlte_ico"
          id="xcode"
        />
        <img
          src="../assets/img/production/android.png"
          alt="android"
          className="content_titlte_ico"
          id="android"
        />
      </div>
      <img src="../assets/img/about/trace1.png" alt="trace-img" />
    </div>
  );
};

export default KricarContent;
