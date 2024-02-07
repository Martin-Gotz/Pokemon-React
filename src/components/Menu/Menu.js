import React from 'react';
import './Menu.scss';

const Menu = ({ onPlayButtonClick }) => {
    return (
        <div className="menu">
            <img className={"logo-pokemon-menu"} src="/pokemon-logo-2.png" alt="logo-pokemon"/>
            <img onClick={onPlayButtonClick} className={"bouton-jouer"} src="/play-button.png" alt="logo-pokemon"/>
        </div>
    );
};

export default Menu;
