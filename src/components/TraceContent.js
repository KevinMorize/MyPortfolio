import React from "react";

const TraceContent = (props) => {
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
          <p className="content_title2">dec 2021 - fev 2022</p>
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
        <img
          src="../assets/img/production/react.png"
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
          src="../assets/img/production/typescript.png"
          alt="react"
          className="content_titlte_ico"
          id="react"
        />
        <img
          src="../assets/img/production/yarn.png"
          alt="yarn"
          className="content_titlte_ico"
          id="yarn"
        />
      </div>
      <img src="../assets/img/about/trace1.png" alt="trace-img" />
      {/* <div className="trace-image-container">
                <img src="../assets/img/about/trace2.png" alt="trace-img2" />
                <img src="../assets/img/about/trace3.png" alt="trace-img3" />
            </div> */}
    </div>
  );
};

export default TraceContent;