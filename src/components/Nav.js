import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  const isEnglish = props.english;

  useEffect(() => {
    const nav = document.querySelector(".nav");
    const links = document.querySelectorAll(".nav li");

    links.forEach((link) => {
      const displayNav = () => {
        nav.style.transform = "translateY(-100vh)";
      };
      link.addEventListener("click", displayNav);
    });
  }, [isEnglish]);

  return (
    <div className="nav">
      <ul>
        <NavLink to="/" exact activeClassName="nav-active">
          <li className="hovered">{!isEnglish ? "ACCUEIL" : "HOME"}</li>
        </NavLink>
        <NavLink to="/about/content" exact activeClassName="nav-active">
          <li className="hovered">{!isEnglish ? "À PROPOS" : "ABOUT ME"}</li>
        </NavLink>
        <NavLink to="/production/content" exact activeClassName="nav-active">
          <li className="hovered">{!isEnglish ? "MON TRAVAIL" : "WORKS"}</li>
        </NavLink>
        <NavLink to="/contact" exact activeClassName="nav-active">
          <li className="hovered">CONTACT</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Nav;
