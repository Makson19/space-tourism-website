import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Nav } from './styles';


export default function Navbar(props){
    // State responsável por alterar o estado do menu mobile (se está aberto ou não).
    const[open, setOpen] = useState(false);

    const showMenu = () => setOpen(!open);

    return (
        <Nav active={open} activeTab={props.active}>
            <Link className="logo" to="/" >
                <img src="./assets/shared/logo.svg" alt="Logo" />
            </Link>

            <ul className="menu__navigation">
                <li>
                    <span>00</span>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <span>01</span>
                    <Link to="/destination">Destination</Link>
                </li>

                <li>
                    <span>02</span>
                    <Link to="/crew">Crew</Link>
                </li>

                <li>
                    <span>03</span>
                    <Link to="/technology">Technology</Link>
                </li>
            </ul>

            <button className={`${open ? "btn__menu open" : "btn__menu"}`} onClick={() => showMenu()}>
                <img src="./assets/shared/icon-hamburger.svg" alt="menu" />
            </button>
        </Nav>
    );
};