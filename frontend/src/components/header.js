import Link from 'next/link';
import React from 'react';
import { useState } from 'react';

function Header() {
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/" passHref>
                    <img src="/logo.png" alt="Logo" />
                </Link>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item">
                    <Link className="nav-link" href="/" passHref>
                        Inicio
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" href="/acerca-de" passHref>
                        Acerca de
                    </Link>
                    </li>
                    <li className="nav-item dropdown">
                    <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded={dropdownOpen}
                        onClick={toggle}
                    >
                        Categorías
                    </a>
                    <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                        <li>
                        <Link className="dropdown-item" href="/categorias/noticias" passHref>
                            Noticias
                        </Link>
                        </li>
                        <li>
                        <Link className="dropdown-item" href="/categorias/eventos" passHref>
                            Eventos
                        </Link>
                        </li>
                    </ul>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="bi bi-facebook"></i>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="bi bi-twitter"></i>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="bi bi-instagram"></i>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="tel:123456789">
                        <i className="bi bi-telephone"></i> 123-456-789
                    </a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
};

export default Header;
