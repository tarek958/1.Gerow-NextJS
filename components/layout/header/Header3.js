import Link from "next/link"
import MobileMenu from "../MobileMenu"
import OffcanvusMenu from "../OffcanvusMenu"
import SearchPopup from "../SearchPopup"

export default function Header3({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch, isOffcanvus, handleOffcanvus }) {
    const token = localStorage.getItem('token');
    return (
        <>
            <div id="header-fixed-height" className={scroll? "active-height":""}/>
            <header className="header-style-four">
                <div className="heder-top-wrap">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="header-top-left">
                                    <ul className="list-wrap">
                                        <li><i className="flaticon-location" />256 Avenue, Mark Street, Newyork City</li>
                                        <li><i className="flaticon-mail" /><Link href="mailto:gerow@gmail.com">gerow@gmail.com</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="header-top-right">
                                    <div className="header-social">
                                        <ul className="list-wrap">
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                        </ul>
                                    </div>
                                    <div className="header-top-btn">
                                        <Link href="/contact"><i className="flaticon-briefcase" />Get a Quote</Link>
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
                                            <li className="active "><Link href="/">ACCUEIL</Link></li>
                                                <li className="menu-item-has-children"><Link href="/index-4">ENTREPRISES</Link>
                                                    <ul className="sub-menu">
                                                    <li><Link href="#">RECRUTEMENT</Link></li>
                                                        <li><Link href="#">FORMATION</Link></li>
                                                        <li><Link href="#">CONSEIL RH</Link></li>
                                                        <li><Link href="#">RÉFÉRENCES</Link></li>
                                                        <li><Link href="#">MÉTIERS</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children"><Link href="/index-5">CANDIDATS</Link>
                                                    <ul className="sub-menu">
                                                    <li className="menu-item-has-children">
                                                            <Link href="#">OFFRES D’EMPLOI</Link>
                                                            <li><Link href="#">TEMOIGNAGES</Link></li>
                                                            <li><Link href="#">CANDIDATURE SPONTANÉE</Link></li>
                                                         
                                                            </li>
                                                        
                                                    </ul>
                                                </li>
                                                <li ><Link href="/blog">Blog</Link>
                                                    
                                                </li>
                                                <li><Link href="/contact">contacts</Link></li>
                                            </ul>
                                        </div>
                                        <div className="header-action">
                                            <ul className="list-wrap">
                                                <li className="header-search" onClick={handleSearch}><Link href="#"><i className="flaticon-search" /></Link></li>
                                                <li className="offcanvas-menu offcanvas-menu-two" onClick={handleOffcanvus}>
                                                    <Link href="#" className="menu-tigger">
                                                        <span />
                                                        <span />
                                                        <span />
                                                    </Link>
                                                </li>
                                               
                                            </ul>
                                        </div>
                                        <div className="header-action ps-3">
      {token ? (
       
        <button 
          className="btn btn-three" 
          onClick={() => {
            localStorage.removeItem('token'); 
         
          }}
        >
          Se déconnecter
        </button>
      ) : (
  
        <Link href="/signin">
          <a className="btn btn-three">Se connecter</a>
        </Link>
      )}
    </div>
                                    </nav>
                                </div>
                                {/* Mobile Menu  */}
                                <div className="mobile-menu">
                                    <nav className="menu-box">
                                        <div className="close-btn" onClick={handleMobileMenu}><i className="fas fa-times" /></div>
                                        <div className="nav-logo">
                                            <Link href="/"><img src="/assets/img/logo/logo.png" alt="Logo" /></Link>
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
                <SearchPopup isSearch={isSearch} handleSearch={handleSearch} />
                <OffcanvusMenu isOffcanvus={isOffcanvus} handleOffcanvus={handleOffcanvus} />
            </header>
        </>
    )
}
