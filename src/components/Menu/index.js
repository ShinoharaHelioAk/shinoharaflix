import React from 'react';
import Logo from '../../assets/img/ShinoharaFlixLogo.png';
import './Menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from "../Button";

function Menu() {
    return (
        /*<nav>TechFlix Show!</nav>*/
        <nav className="Menu">
            <a href="/"><img className="Logo" src={Logo} alt="Logo da TechFlix" /></a>
            {/* <a className="ButtonLink" href="/">Novo vídeo</a> */}
            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
                {/*Prop especifica chamada children*/}
            </Button>
        </nav>
    );
}

export default Menu;