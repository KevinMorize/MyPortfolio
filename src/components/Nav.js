import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    const isEnglish = props.english;

    useEffect(() => {
        const nav = document.querySelector('.nav');
        const links = document.querySelectorAll('.nav li');

        links.forEach((link) => {
            const displayNav = () => {
                nav.style.transform = 'translateY(-100vh)';
            }
            link.addEventListener('click', displayNav)
        })

    }, [isEnglish])

    return (
        <div className="nav">
            <ul>
                <NavLink to="/" exact activeClassName="nav-active">
                    {!isEnglish && <li className="hovered">ACCUEIL</li>}
                    {isEnglish && <li className="hovered">HOME</li>}
                </NavLink>
                <NavLink to="/about/content" exact activeClassName="nav-active">
                    {!isEnglish && <li className="hovered">A PROPOS</li>}
                    {isEnglish && <li className="hovered">ABOUT ME</li>}
                </NavLink>
                <NavLink to="/production/content" exact activeClassName="nav-active">
                    {!isEnglish && <li className="hovered">MON TRAVAIL</li>}
                    {isEnglish && <li className="hovered">WORKS</li>}
                </NavLink>
                <NavLink to="/contact" exact activeClassName="nav-active">
                    {!isEnglish && <li className="hovered">CONTACT</li>}
                    {isEnglish && <li className="hovered">CONTACT</li>}
                </NavLink>
            </ul>
        </div>
    );
};

export default Nav;