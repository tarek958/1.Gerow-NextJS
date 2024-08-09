import Link from "next/link"

export default function Footer2() {
    return (
        <>
            <footer>
                <div className="footer-area-two footer-bg-two" data-background="/assets/img/bg/h2_footer_bg.jpg">
                    <div className="footer-top-two">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-7">
                                    <div className="footer-widget">
                                    <div className="fw-logo">
    <Link href="/">
        <img src="/assets/img/logo/logo.png" alt="Logo" className="img-fluid w-50" />
    </Link>
</div>

                                        <div className="footer-content">
                                            <p>Atlantis Conseil valorise le rôle stratégique des ressources humaines dans la croissance des entreprises en offrant des solutions adaptées aux besoins spécifiques du marché.</p>
                                            <div className="footer-info">
                                                <ul className="list-wrap">
                                                    <li>
                                                        <div className="icon">
                                                            <i className="flaticon-phone-call" />
                                                        </div>
                                                        <div className="content">
                                                            <Link href="tel:0489977508">04 89 97 75 08</Link>
                                                        </div>
                                                    </li>
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-5 col-sm-6">
                                    <div className="footer-widget">
                                    <h4 className="fw-title">Menu</h4>
                                        <div className="footer-link">
                                            <ul className="list-wrap">
                                                <li><Link href="/">Accueil</Link></li>
                                                <li><Link href="/index-4">Entreprises</Link></li>
                                                <li><Link href="/index-5">Candidates</Link></li>
                                                <li><Link href="/blog">Blog</Link></li>
                                                <li><Link href="/contact">Contacts</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-4 col-md-7">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">Réseaux sociaux</h4>
                                        <div className="footer-newsletter">
                                           
                                            <div className="footer-social footer-social-two">
                                                <ul className="list-wrap">
                                                <li><Link href="https://www.facebook.com/atlantis.conseil"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="https://twitter.com/AtlantisConseil"><i className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="https://www.instagram.com/atlantisconseil/"><i className="fab fa-instagram" /></Link></li>
                                                    <li><Link href="https://www.linkedin.com/company/atlantis-conseil"><i className="fab fa-linkedin" /></Link></li>
                                                    <li><Link href="https://www.youtube.com/channel/UCXDQzVaeVvj6e-fATPqhDEg/"><i className="fab fa-youtube" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom-two">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="copyright-text-two text-center">
                                        <p>Atlantis Conseil ©2021 | Tous droits réservés | Mentions légales & Confidentialité | par Sotupub</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
