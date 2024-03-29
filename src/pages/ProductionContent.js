import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import KricarContent from "../components/KricarContent";
import TraceContent from "../components/TraceContent";

const ProductionContent = (props) => {
  const isEnglish = props.english;

  useEffect(() => {
    //header style
    const header = document.querySelector(".header");
    header.classList.add("black");

    //arrow const
    const arrowDiv = document.querySelector(".back");
    const animatedArrow = document.querySelector(".back img");
    const animatedBackward = document.querySelector(".back p");

    //tools const
    const screwdriver = document.querySelector(".screwdriver");
    const wrench = document.querySelector(".wrench");

    //arrow animation
    setTimeout(() => {
      animatedArrow.classList.add("arrow-animation");
      animatedBackward.classList.add("arrow-animation");
    }, 350);

    const onMouseOverArrow = () => {
      arrowDiv.style.animation = "translateArrow ease 1s infinite alternate";
    };

    const onMouseLeaveArrow = () => {
      arrowDiv.style.animation = "";
    };

    // tools animation
    if (window.matchMedia("(orientation:portrait)").matches) {
      setTimeout(() => {
        screwdriver.style.animation = "dongleSkrew 2s ease-in-out";
        wrench.style.animation = "dongleWrench 2s ease-in-out";
      }, 100);
    } else {
      setTimeout(() => {
        screwdriver.style.transform = "translate(100%, 0)";
        wrench.style.transform = "translate(-100%, 0)";
      }, 900);
      screwdriver.style.animation = "dongleSkrew 2s ease-in-out";
      wrench.style.animation = "dongleWrench 2s ease-in-out";
    }

    // arrow events
    arrowDiv.addEventListener("mouseover", onMouseOverArrow);
    arrowDiv.addEventListener("mouseleave", onMouseLeaveArrow);
  }, [isEnglish]);

  return (
    <div className="second_content">
      <div className="back">
        <NavLink exact to="/production" className="hovered">
          <img src="../assets/back.svg" alt="retour" />
          <p>{!isEnglish ? "Retour" : "Back"}</p>
        </NavLink>
      </div>

      <div className="about_titles">
        <em>01</em>
        <h1>KRICAR</h1>
      </div>

      <KricarContent english={isEnglish} />

      <div className="about_titles">
        <em>02</em>
        <h1>TRACE TV</h1>
      </div>

      <TraceContent english={isEnglish} />

      <div className="about_titles">
        <em>03</em>
        <h1>{!isEnglish ? "PROCHAINEMENT (avec vous peut être...)" : "COMING SOON (with you maybe...)"}</h1>
      </div>
      <div className="coming_content">
        <img
          src="../assets/img/works/screwdriver.png"
          alt="screwdriver"
          className="screwdriver"
        />
        <img src="../assets/img/works/wrench.png" alt="wrench" className="wrench" />
      </div>
    </div>
  );
};

export default ProductionContent;
