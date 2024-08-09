import Link from "next/link";
import MobileMenu from "../MobileMenu";
import SearchPopup from "../SearchPopup";
import React from 'react';

export default function Header5({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch, isOffcanvus, handleOffcanvus }) {
    const token = localStorage.getItem('token');
    
    return (
        <>
            <header className="transparent-header">
                <div className="heder-top-wrap">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="header-top-left">
                                    <ul className="list-wrap">
                                        <li><i className="flaticon-location" />IMMEUBLE PALAZZO 29 Avenue Simone Veil 06200 NICE</li>
                                        <li><i className="flaticon-mail" /><Link href="mailto:recrutement@atlantis-conseil.fr">recrutement@atlantis-conseil.fr</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="header-top-right">
                                    <div className="header-contact">
                                        <Link href="tel:0489977508"><i className="flaticon-phone-call" />04 89 97 75 08</Link>
                                    </div>
                                    <div className="header-social">
                                        <ul className="list-wrap">
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sticky-header" className={`menu-area ${scroll ? "sticky-menu" : ""}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><i className="fas fa-bars" /></div>
                                <div className="menu-wrap">
                                    <nav className="menu-nav">
                                        <div className="logo">
                                            <Link href="/">
                                                <img src="/assets/img/logo/logo.png" alt="Logo" />
                                            </Link>
                                        </div>
                                        <div className="navbar-wrap main-menu d-none d-lg-flex">
                                            <ul className="navigation">
                                                <li className="active"><Link href="/">Accueil</Link></li>
                                                <li className="menu-item-has-children">
                                                    <Link href="/index-4">Entreprises</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link href="#">Recrutement</Link></li>
                                                        <li><Link href="#">Formation</Link></li>
                                                        <li><Link href="#">Conseil RH</Link></li>
                                                        <li><Link href="#">Références</Link></li>
                                                        <li><Link href="#">Métiers</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <Link href="#">Candidats</Link>
                                                    <ul className="sub-menu">
                                                        <li className="menu-item-has-children">
                                                        <li><Link href="#">Offres d’emploi</Link></li>
                                                                <li><Link href="#">Témoignages</Link></li>
                                                                <li><Link href="#">Candidature&nbsp;Spontanée</Link></li>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><Link href="/blog">Blog</Link></li>
                                                <li><Link href="/contact">Contacts</Link></li>
                                            </ul>
                                        </div>
                                        <div className="header-action d-none d-md-block">
                                            <ul className="list-wrap">
                                                {/* <li className="header-search" onClick={handleSearch}>
                                                    <Link href="#"><i className="flaticon-search" /></Link>
                                                </li> */}
                                                <li className="header-btn">
                                                    <div className="header-action ps-3">
                                                        {token ? (
                                                            <button 
                                                                className="btn btn-two" 
                                                                onClick={() => {
                                                                    localStorage.removeItem('token');
                                                                    window.location.href = '/';
                                                                }}
                                                            >
                                                                Se déconnecter
                                                            </button>
                                                        ) : (
                                                            <Link href="/signin" className="btn btn-two">
                                                                Se connecter
                                                            </Link>
                                                        )}
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                {/* Mobile Menu */}
                                <div className="mobile-menu">
                                    <nav className="menu-box">
                                        <div className="close-btn" onClick={handleMobileMenu}><i className="fas fa-times" /></div>
                                        <div className="nav-logo">
                                            <Link href="/">
                                                <img src="/assets/img/logo/logo.png" alt="Logo" />
                                            </Link>
                                        </div>
                                        {/* <div className="mobile-search">
                                            <form action="#">
                                                <input type="text" placeholder="Search here..." />
                                                <button><i className="flaticon-search" /></button>
                                            </form>
                                        </div> */}
                                        <div className="menu-outer">
                                            <MobileMenu />
                                        </div>
                                        <div className="social-links">
                                            <ul className="clearfix list-wrap">
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                <div className="menu-backdrop" onClick={handleMobileMenu} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <SearchPopup isSearch={isSearch} handleSearch={handleSearch} /> */}
            </header>
        </>
    );
}
