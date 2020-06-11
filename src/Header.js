import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper blue lighten-2">
                <a href="/" className="brand-logo left">Casa do código</a>
                <ul className="right">
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li><Link to="/autores">Autores</Link></li>
                    <li><Link to="/livros">Livros</Link></li>
                </ul>
            </div>
      </nav>
    );
}

export default Header;