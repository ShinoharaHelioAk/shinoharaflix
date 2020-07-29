import React from 'react';
import Logo from '../../assets/img/ShinoharaFlixLogo.png';
import './Menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from "../Button";
import { Link } from 'react-router-dom';

function Menu() {
    return (
        /*<nav>TechFlix Show!</nav>*/
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Logo de ShinoharaFlix" />
            </Link>
            {/* <a className="ButtonLink" href="/">Novo vídeo</a> */}
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
                {/*Prop especifica chamada children*/}
            </Button>
        </nav>
    );
}

export default Menu;