import { NavLink } from 'react-router-dom';
import IcoSocial from './IcoSocial';

const Header = () => {

    return (
        <div className="header">
            <NavLink to="/" exact activeClassName="nav-active">
                <h1>Kevin Morize</h1>
            </NavLink>
            <IcoSocial />
        </div>
    );
};

export default Header;