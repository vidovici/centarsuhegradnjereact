import React from "react";
import './Header.css';

const Header = () => {
    return(
            <header>
                <nav className="navbar navbar-expand-lg py-0">
                    <div className="container">
                        <div className="header d-flex">
                            <a className="navbar-brand logo fontPoppinsSemiBold" href="/">Centar suhe gradnje</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item px-2">
                                        <a className="nav-link fontPoppinsMedium navigation" href="/">Početna</a>
                                    </li>
                                    <li className="nav-item px-2">
                                        <a className="nav-link fontPoppinsMedium navigation" href="/projects">Projekti</a>
                                    </li>
                                    <li className="nav-item px-2">
                                        <a className="nav-link fontPoppinsMedium navigation" href="/contact">Kontakt</a>
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