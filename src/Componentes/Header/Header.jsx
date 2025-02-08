import React from 'react';
import './Header.css';
import smallRight from '../../assets/icons/small-right.png'
import smallLeft from '../../assets/icons/small-left.png';
import search from '../../assets/icons/search.png';

const Header = () => {
    return (
        <nav className="header__navigation">
            <div className="navigation">
                <button className="arrow-left" aria-label="Seta esquerda">
                    <img src={smallLeft} alt="Seta esquerda" />
                </button>
                <button className="arrow-right" aria-label="Seta direita">
                    <img src={smallRight} alt="Seta direita" />
                </button>
            </div>
            <div className="header__search">
                <img src={search} alt="Buscar" />
                <input 
                    id="search-input" 
                    maxLength="800" 
                    autoCorrect="off" 
                    autoCapitalize="off" 
                    spellCheck="false"
                    placeholder="O que você quer ouvir?"
                    aria-label="Campo de busca"
                />
            </div>
            <div className="header__login">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>
        </nav>
    );
};

export default Header;