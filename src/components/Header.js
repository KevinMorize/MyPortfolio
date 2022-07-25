import { NavLink } from "react-router-dom";
import IcoSocial from "./IcoSocial";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <img src="./assets/img/profil_pic.png" alt="profil_pic" />
        <NavLink to="/" exact activeClassName="nav-active">
          <h1>Kevin Morize</h1>
        </NavLink>
      </div>

      <IcoSocial />
    </div>
  );
};

export default Header;
