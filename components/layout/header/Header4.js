import Link from "next/link";
import MobileMenu from "../MobileMenu";

export default function Header4({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch, isOffcanvus, handleOffcanvus }) {
    const token = localStorage.getItem('token');
    
    return (
        <>
            <header className="header-style-five transparent-header">
                <div id="sticky-header" className={`menu-area ${scroll ? "sticky-menu" : ""}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                                    <i className="fas fa-bars" />
                                </div>
                                <div className="menu-wrap">
                                    <nav className="menu-nav">
                                        <div className="logo">
                                            <Link href="/">
                                                <img src="/assets/img/logo/logo.png" alt="Logo" />
                                            </Link>
                                        </div>
                                        <div className="navbar-wrap main-menu d-none d-lg-flex">
                                            <ul className="navigation">
                                                <li className="active">
                                                    <Link href="/">ACCUEIL</Link>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <Link href="/index-4">ENTREPRISES</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link href="#about-area-six">RECRUTEMENT</Link></li>
                                                        <li><Link href="#">FORMATION</Link></li>
                                                        <li><Link href="#about-area-four">CONSEIL RH</Link></li>
                                                        <li><Link href="#">RÉFÉRENCES</Link></li>
                                                        <li><Link href="#">MÉTIERS</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <Link href="/index-5">CANDIDATS</Link>
                                                    <ul className="sub-menu">
                                                        <li className="menu-item-has-children">
                                                            <Link href="#">OFFRES D’EMPLOI</Link>
                                                            <ul className="sub-menu">
                                                                <li><Link href="#">TEMOIGNAGES</Link></li>
                                                                <li><Link href="#">CANDIDATURE SPONTANÉE</Link></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link href="/blog">Blog</Link>
                                                </li>
                                                <li>
                                                    <Link href="/contact">contacts</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="header-action">
                                            <ul className="list-wrap">
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
                                        <div className="close-btn" onClick={handleMobileMenu}>
                                            <i className="fas fa-times" />
                                        </div>
                                        <div className="nav-logo">
                                            <Link href="/">
                                                <img src="/assets/img/logo/logo.png" alt="Logo" />
                                            </Link>
                                        </div>
                                        <div className="mobile-search">
                                            <form action="#">
                                                <input type="text" placeholder="Search here..." />
                                                <button><i className="flaticon-search" /></button>
                                            </form>
                                        </div>
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
            </header>
        </>
    );
}
