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
        </div>
      </div>
      <img src="../assets/img/about/trace1.png" alt="trace-img" />
      <div className="content_container_bottom">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
          perspiciatis omnis perferendis obcaecati quibusdam! Similique nulla
          pariatur error iusto obcaecati, inventore quas illo nihil a
          accusantium molestias provident vero quod cupiditate cum aliquam
          itaque alias tempora dignissimos perspiciatis ad mollitia placeat.
          Numquam iste quam doloribus deserunt in repudiandae esse quo aut illo
          aliquid. Istealiquam libero laboriosam accusamus, accusantium nostrum
          animi quo quos architecto aspernatur quis cumque, voluptatem quasi,
          dicta sequi eaque dolorum vel optio quam veniam a quisquam. Labore
          eius atque numquam minima ratione est porro, assumenda cum optio
          asperiores exercitationem, blanditiis tempora ea in deleniti
          cupiditate eos corrupti soluta. Minus quas optio placeat quo
          distinctio aperiam, accusamus dolorum ad praesentium quae et animi id
          culpa recusandae officia labore! Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default KricarContent;
