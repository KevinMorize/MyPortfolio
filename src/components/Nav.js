import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {

    useEffect( () => {
        const nav = document.querySelector('.nav');
        const links = document.querySelectorAll('.nav li');

        links.forEach((link) => {
            const displayNav =() => {
                nav.style.transform = 'translateY(-100vh)';
            }
            link.addEventListener('click', displayNav)
        })

    }, [])

    return (
        <div className="nav">
            <ul>
                <NavLink to="/" exact activeClassName="nav-active">
                    <li className="hovered">
                        Home
                    </li>
                </NavLink>
                <NavLink to="/about" exact activeClassName="nav-active">
                    <li className="hovered">
                        About Me
                    </li>
                </NavLink>
                <NavLink to="/production" exact activeClassName="nav-active">
                    <li className="hovered">
                        Production
                    </li>
                </NavLink>
                <NavLink to="/contact" exact activeClassName="nav-active">
                    <li className="hovered">
                        Contact
                    </li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Nav;