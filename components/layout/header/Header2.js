import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import MobileMenu from '../MobileMenu';
import OffcanvusMenu from '../OffcanvusMenu';
import SearchPopup from '../SearchPopup';
import { useRouter } from 'next/router';

export default function Header2({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch, isOffcanvus, handleOffcanvus }) {
  const token = localStorage.getItem('token');
  const [activeLink, setActiveLink] = useState('/');
  const router = useRouter();

  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  return (
    <>
      <header id="sticky-header" className={`transparent-header header-style-three ${scroll ? "sticky-menu" : ""}`}>
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
        <div className="menu-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <i className="fas fa-bars" />
                </div>
                <div className="menu-wrap">
                  <nav className="menu-nav">
                    <div className="logo">
                      <Link href="/"><img src="/assets/img/logo/logo.png" alt="Logo" /></Link>
                    </div>
                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                      <ul className="navigation">
                        <li className={activeLink === '/' ? 'active' : ''}><Link href="/">Accueil</Link></li>
                        <li className={`menu-item-has-children ${activeLink === '/index-4' ? 'active' : ''}`}>
                          <Link href="/index-4" >Entreprises</Link>
                          <ul className="sub-menu">
                            <li><Link href="/index-4#rh">Conseil RH</Link></li>
                            <li><Link href="/index-4#recrutement">Recrutement</Link></li>
                            <li><Link href="/index-4#formation">Formation</Link></li>
                            <li><Link href="/index-4#ref">Références</Link></li>
                            <li><Link href="/index-4#metier">Métiers</Link></li>
                          </ul>
                        </li>
                        <li className={`menu-item-has-children ${activeLink === '/index-5' ? 'active' : ''}`}>
                          <Link href="/index-5">Candidats</Link>
                          <ul className="sub-menu">
                            <li className="menu-item-has-children">
                              <li><Link href="/index-5#offres">Offres d’emploi</Link></li>
                              <li><Link href="/index-5#temoignage">Témoignages</Link></li>
                              <li><Link href="/index-5#candidature">Candidature&nbsp;Spontanée</Link></li>
                            </li>
                          </ul>
                        </li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                      </ul>
                    </div>
                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                      <ul className="">
                        <li className={`menu-item-has-children ${activeLink === '/index-5' ? 'active' : ''}`}>
                          <Link href="/index-5"><i className="fas fa-user"></i></Link>
                          <ul className="sub-menu">
                            <li className="menu-item-has-children">
                              <li></li>
                              <li><div className="">
                                {token ? (
                                  <>
                                  <Link href="/profile">Profile</Link>
                                  <Link
                                    className=""
                                    onClick={() => {
                                      localStorage.removeItem('token');
                                      window.location.href = '/';
                                    }}
                                  >
                                    Se déconnecter
                                  </Link>
                                  </>
                                ) : (
                                  <Link href="/signin">Se connecter
                                  </Link>
                                )}
                              </div></li>
                            </li>
                          </ul>
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
        <OffcanvusMenu isOffcanvus={isOffcanvus} handleOffcanvus={handleOffcanvus} />
      </header>
    </>
  );
}
