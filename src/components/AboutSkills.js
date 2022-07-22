import React, { useEffect, useState } from "react";

const AboutSkills = (props) => {
  const isEnglish = props.english;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const detail = document.querySelectorAll(".skill-detail");

    detail.forEach((elem) => {
      const rate = elem.querySelector(".skill-rate");
      const barsAfter = elem.querySelector(".skill-bar span");
      if (
        isVisible === true &&
        window.matchMedia("(orientation:portrait)").matches
      ) {
        barsAfter.style.width = `${rate.innerHTML}`;
      } else if (!window.matchMedia("(orientation:portrait)").matches) {
        barsAfter.style.width = `${rate.innerHTML}`;
      } else {
        barsAfter.style.width = "10%";
      }
    });

    document.addEventListener("wheel", setVisible);
    document.addEventListener("touchmove", setVisible);

    return () => {
      document.removeEventListener("wheel", setVisible);
      document.removeEventListener("touchmove", setVisible);
    };
  }, [isEnglish, isVisible]);

  // scroll display
  function setVisible() {
    let elem = document.getElementById("displaySkills");
    let coordinates = elem.getBoundingClientRect();

    if (
      coordinates.top <= window.innerHeight ||
      coordinates.bottom <= window.innerHeight
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  return (
    <div className="content-skill" id="displaySkills">
      <ul className="skill-list">
        <li className="skill-item">
          <div className="skill-ico">
            <img src="../assets/js.svg" alt="javascript" />
          </div>
          <div className="skill-detail">
            <div className="skill-meta">
              <div className="skill-name">
                <h4>JAVASCRIPT</h4>
                {!isEnglish ? <p>2 ans</p> : <p>2 years +</p>}
              </div>
              <p className="skill-rate">80%</p>
            </div>
            <div className="skill-bar">
              <span></span>
            </div>
          </div>
        </li>
        <li className="skill-item">
          <div className="skill-ico">
            <img src="../assets/typescript.svg" alt="javascript" />
          </div>
          <div className="skill-detail">
            <div className="skill-meta">
              <div className="skill-name">
                <h4>TYPESCRIPT</h4>
                {!isEnglish ? (
                  <p>
                    + <sup>1</sup>&frasl;<sub>2</sub> an
                  </p>
                ) : (
                  <p>
                    + <sup>1</sup>&frasl;<sub>2</sub> year
                  </p>
                )}
              </div>
              <p className="skill-rate">50%</p>
            </div>
            <div className="skill-bar">
              <span></span>
            </div>
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
                {!isEnglish ? (
                  <p>
                    + 1 an
                  </p>
                ) : (
                  <p>
                    + 1 year
                  </p>
                )}
              </div>
              <p className="skill-rate">70%</p>
            </div>
            <div className="skill-bar">
              <span></span>
            </div>
          </div>
        </li>
        <li className="skill-item">
          <div className="skill-ico">
            <img src="../assets/react.svg" alt="react" />
          </div>
          <div className="skill-detail">
            <div className="skill-meta">
              <div className="skill-name">
                <h4>REACT NATIVE</h4>
                {!isEnglish ? (
                  <p>
                    1 an
                  </p>
                ) : (
                  <p>
                    1 year
                  </p>
                )}
              </div>
              <p className="skill-rate">60%</p>
            </div>
            <div className="skill-bar">
              <span></span>
            </div>
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
                {!isEnglish ? (
                  <p>
                    1 an
                  </p>
                ) : (
                  <p>
                    1 year
                  </p>
                )}
              </div>
              <p className="skill-rate">60%</p>
            </div>
            <div className="skill-bar">
              <span></span>
            </div>
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
                {!isEnglish ? <p>+ 1 an</p> : <p>1 year +</p>}
              </div>
              <p className="skill-rate">70%</p>
            </div>
            <div className="skill-bar">
              <span></span>
            </div>
          </div>
        </li>
      </ul>

      <ul className="skill-list">
        <li className="skill-item">
          <div className="skill-ico">
            <img src="../assets/php.svg" alt="node" />
          </div>
          <div className="skill-detail">
            <div className="skill-meta">
              <div className="skill-name">
                <h4>PHP</h4>
                {!isEnglish ? (
                  <p>
                    +<sup>1</sup>&frasl;<sub>2</sub> an
                  </p>
                ) : (
                  <p>
                    +<sup>1</sup>&frasl;<sub>2</sub> year
                  </p>
                )}
              </div>
              <p className="skill-rate">60%</p>
            </div>
            <div className="skill-bar">
              <span></span>
            </div>
          </div>
        </li>
        <li className="skill-item">
          <div className="skill-ico">
            <img src="../assets/symfony.svg" alt="node" />
          </div>
          <div className="skill-detail">
            <div className="skill-meta">
              <div className="skill-name">
                <h4>SYMFONY</h4>
                {!isEnglish ? (
                  <p>
                    +<sup>1</sup>&frasl;<sub>2</sub> an
                  </p>
                ) : (
                  <p>
                    +<sup>1</sup>&frasl;<sub>2</sub> year
                  </p>
                )}
              </div>
              <p className="skill-rate">30%</p>
            </div>
            <div className="skill-bar">
              <span></span>
            </div>
          </div>
        </li>
        <li className="skill-item">
          <div className="skill-ico">
            <img src="../assets/python.svg" alt="html5" />
          </div>
          <div className="skill-detail">
            <div className="skill-meta">
              <div className="skill-name">
                <h4>PYTHON</h4>
                {!isEnglish ? (
                  <p>
                    +<sup>1</sup>&frasl;<sub>2</sub> an
                  </p>
                ) : (
                  <p>
                    +<sup>1</sup>&frasl;<sub>2</sub> year
                  </p>
                )}
              </div>
              <p className="skill-rate">50%</p>
            </div>
            <div className="skill-bar">
              <span></span>
            </div>
          </div>
        </li>
        <li className="skill-item">
          <div className="skill-ico">
            <img src="../assets/docker.svg" alt="html5" />
          </div>
          <div className="skill-detail">
            <div className="skill-meta">
              <div className="skill-name">
                <h4>DOCKER</h4>
                {!isEnglish ? (
                  <p>
                    +<sup>1</sup>&frasl;<sub>2</sub> an
                  </p>
                ) : (
                  <p>
                    +<sup>1</sup>&frasl;<sub>2</sub> year
                  </p>
                )}
              </div>
              <p className="skill-rate">40%</p>
            </div>
            <div className="skill-bar">
              <span></span>
            </div>
          </div>
        </li>
        <li className="skill-item">
          <div className="skill-ico">
            <img src="../assets/kubernetes.svg" alt="html5" />
          </div>
          <div className="skill-detail">
            <div className="skill-meta">
              <div className="skill-name">
                <h4>KUBERNETES</h4>
                {!isEnglish ? (
                  <p>
                    +<sup>1</sup>&frasl;<sub>2</sub> an
                  </p>
                ) : (
                  <p>
                    +<sup>1</sup>&frasl;<sub>2</sub> year
                  </p>
                )}
              </div>
              <p className="skill-rate">20%</p>
            </div>
            <div className="skill-bar">
              <span></span>
            </div>
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
                {!isEnglish ? <p>2 ans</p> : <p>2 years</p>}
              </div>
              <p className="skill-rate">80%</p>
            </div>
            <div className="skill-bar">
              <span></span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AboutSkills;
