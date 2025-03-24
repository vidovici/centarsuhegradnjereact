import React from "react";
import './Header.css';

const Header = () => {
    return(
            <header>
                <nav class="navbar navbar-expand-lg py-0">
                    <div class="container">
                        <div class="header d-flex">
                            <a class="navbar-brand logo fontPoppinsSemiBold" href="index.html">Centar suhe gradnje</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li class="nav-item px-2">
                                        <a class="nav-link fontPoppinsMedium navigation" href="projects.html">Projekti</a>
                                    </li>
                                    <li class="nav-item px-2">
                                        <a class="nav-link fontPoppinsMedium navigation" href="services.html">Usluge</a>
                                    </li>
                                    <li class="nav-item px-2">
                                        <a class="nav-link fontPoppinsMedium navigation" href="galery.html">Galerija</a>
                                    </li>
                                    <li class="nav-item px-2">
                                        <a class="nav-link fontPoppinsMedium navigation" href="aboutus.html">O nama</a>
                                    </li>
                                    <li class="nav-item px-2">
                                        <a class="nav-link fontPoppinsMedium navigation" href="contact.html">Kontakt</a>
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