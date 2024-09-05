import Link from "next/link"

export default function Footer3() {
    return (
        <>
            <footer>
                <div className="footer-area-three">
                    <div className="footer-top-three">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 col-md-7">
                                    <div className="footer-widget">
                                        <div className="footer-content">
                                        <div className="fw-logo d-flex justify-content-center">
                                            <Link href="/"><img src="/assets/img/logo/w_logo.png" alt="" /></Link>
                                        </div>
                                        <div>
                                            <p>Atlantis Conseil valorise le rôle stratégique des ressources humaines dans la croissance des entreprises en offrant des solutions adaptées aux besoins spécifiques du marché.</p>
                                            <div className="footer-social footer-social-three">
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

                                <div className="col-lg-2 col-md-5 col-sm-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">Menu</h4>
                                        <div className="footer-link">
                                            <ul className="list-wrap">
                                                <li><Link href="/">Accueil</Link></li>
                                                <li><Link href="/index-4">Entreprises</Link></li>
                                                <li><Link href="/index-5">Candidats</Link></li>
                                                <li><Link href="/blog">Blog</Link></li>
                                                <li><Link href="/contact">Contacts</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-7">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">Contact</h4>
                                        <div className="footer-info">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="icon">
                                                        <i className="flaticon-pin" />
                                                    </div>
                                                    <div className="content">
                                                        <p>IMMEUBLE PALAZZO
                                                            29 Avenue Simone Veil 06200 NICE</p>
                                                    </div>
                                                </li>
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
                        </div>
                    </div>
                    <div className="footer-bottom-three">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="copyright-text-two text-center">
                                    <p>Atlantis Conseil ©2021 | Tous droits réservés |  <Link href="/mention-legales">
      Mentions légales
    </Link> | par Sotupub</p>
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
