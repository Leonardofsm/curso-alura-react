import React from 'react';
import LinkWrapper from './LinkWrapper';

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper blue lighten-2">
                <LinkWrapper to="/" className="brand-logo left" activeStyle={{}}>Casa do código</LinkWrapper>
                <ul id="nav-mobile" className="right">
                    <li><LinkWrapper to="/sobre">Sobre</LinkWrapper></li>
                    <li><LinkWrapper to="/autores">Autores</LinkWrapper></li>
                    <li><LinkWrapper to="/livros">Livros</LinkWrapper></li>
                </ul>
            </div>
      </nav>
    );
}

export default Header;