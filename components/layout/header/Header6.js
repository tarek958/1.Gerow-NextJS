import Link from "next/link";
import MobileMenu from "../MobileMenu";
import SearchPopup from "../SearchPopup";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Header6({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch, isOffcanvus, handleOffcanvus }) {
    const token = localStorage.getItem('token');
    const [activeLink, setActiveLink] = useState('/');
    const router = useRouter();

    useEffect(() => {
        setActiveLink(router.pathname);
    }, [router.pathname]);
    return (
        <>
            <div id="header-fixed-height" className={scroll ? "active-height" : ""} />
            <header className="header-style-six">
                <div className="heder-top-wrap" style={{backgroundColor:"black"}}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="header-top-left">
                                    <ul className="list-wrap">
                                        <li><i className="flaticon-location" />IMMEUBLE PALAZZO
                                            29 Avenue Simone Veil
                                            06200 NICE</li>
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
                                        {token ? (
                                            <>
                                                <Link href="/profile">
                                                    <div className="btn-sm" style={{backgroundColor:"white",borderRadius:"20px",fontWeight:"bold",fontSize:"18px"}}>Espace client</div>
                                                </Link>
                                               
                                            </>
                                        ) : (
                                            <Link href="/signin">
                                                <div className="btn-sm" style={{backgroundColor:"white",borderRadius:"20px",fontWeight:"bold",fontSize:"18px"}}>Espace client</div>
                                            </Link>
                                        )}
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
                                            <Link href="/"><img src="/assets/img/logo/logo.png" alt="Logo" /></Link>
                                        </div>
                                        <div className="navbar-wrap main-menu d-none d-lg-flex">
                                            <ul className="navigation">
                                                <li><Link href="/">Accueil</Link></li>
                                                <li className="menu-item-has-children">
                                                    <Link href="/index-4">Entreprises</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link href="/index-4#rh">Conseil RH</Link></li>
                                                        <li><Link href="/index-4#recrutement">Recrutement</Link></li>
                                                        <li><Link href="/index-4#formation">Formation</Link></li>
                                                        <li><Link href="/index-4#ref">Références</Link></li>
                                                        <li><Link href="/index-4#metier">Métiers</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <Link href="/index-5">Candidats</Link>
                                                    <ul className="sub-menu">
                                                        <li className="menu-item-has-children">
                                                            <li><Link href="/index-5#offres">Offres d’emploi</Link></li>
                                                            <li><Link href="/index-5#temoignage">Témoignages</Link></li>
                                                            <li><Link href="/index-5#candidature">Candidature&nbsp;Spontanée</Link></li>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className={activeLink === '/blog' ? 'active' : ''}><Link href="/blog">Blog</Link></li>
                                                <li className={activeLink === '/contact' ? 'active' : ''}><Link href="/contact">Contact</Link></li>
                                            </ul>
                                        </div>
                                        <div className="navbar-wrap main-menu d-none d-lg-flex " style={{justifyContent:'flex-end'}}>
                      <Link href="/index-5#offres">
                        <div className="btn btn-three btn-sm">Offres d'emploi</div>
                      </Link>
                    </div>
                                    </nav>
                                </div>
                                {/* Mobile Menu */}
                                <div className="mobile-menu">
                                    <nav className="menu-box">
                                        <div className="close-btn" onClick={handleMobileMenu}><i className="fas fa-times" /></div>
                                        <div className="nav-logo">
                                            <Link href="/"><img src="/assets/img/logo/logo.png" alt="Logo" /></Link>
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
                <SearchPopup isSearch={isSearch} handleSearch={handleSearch} />
            </header>
        </>
    )
}
