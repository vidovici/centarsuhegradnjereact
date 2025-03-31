import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {

    const [menu, setMenu] = useState(false);
    
    const toggleMenu = () => {
        setMenu(!menu);
    }

    return(
            <header>
                <nav className="navbar navbar-expand-lg py-0">
                    <div className="container">
                        <div className="header d-flex">
                            <Link to="/" className="navbar-brand logo fontPoppinsSemiBold">Centar suhe gradnje</Link>
                            <button onClick={toggleMenu} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className={'collapse navbar-collapse ' + (menu ? 'show':'')} id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item px-2">
                                        <Link to="/" className="nav-link fontPoppinsMedium navigation">Početna</Link>
                                    </li>
                                    <li className="nav-item px-2">
                                        <Link to="/projects" className="nav-link fontPoppinsMedium navigation">Projekti</Link>
                                    </li>
                                    <li className="nav-item px-2">
                                        <Link to="/contact" className="nav-link fontPoppinsMedium navigation">Kontakt</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
    );
};
export default Header;