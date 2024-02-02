import React from 'react';
import './Menu.scss';

const Menu = ({ onPlayButtonClick }) => {
    return (
        <div className="menu">
            <img className={"logo-pokemon-menu"} src="/pokemon-logo-2.png" alt="logo-pokemon"/>
            <button className="bouton-jouer" onClick={onPlayButtonClick}>
                Jouer
            </button>
            <img className={"arriere-plan-menu"} src="/fond-menu.png" alt="fond-menu"/>
        </div>
    );
};

export default Menu;
