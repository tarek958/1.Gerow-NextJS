import Link from "next/link"

export default function OffcanvusMenu({ isOffcanvus, handleOffcanvus }) {
    return (
        <>
            <div className={`extra-info ${isOffcanvus ? "active" : ""}`}>
                <div className="close-icon menu-close" onClick={handleOffcanvus}>
                    <button><i className="far fa-window-close" /></button>
                </div>
                <div className="logo-side mb-30">
                    <Link href="/"><img src="/assets/img/logo/logo.png" alt="Logo" /></Link>
                </div>
                <div className="side-info mb-30">
                    <div className="contact-list mb-30">
                        <h4>Adresse du bureau</h4>
                        <p>IMMEUBLE PALAZZO <br /> 29 Avenue Simone Veil
06200 NICE</p>
                    </div>
                    <div className="contact-list mb-30">
                        <h4>Téléphone</h4>
                        <p>04 89 97 75 08</p>
                       
                    </div>
                    <div className="contact-list mb-30">
                        <h4>Email</h4>
                        <p>recrutement@atlantis-conseil.fr</p>
                        
                    </div>
                </div>
                <ul className="side-instagram list-wrap">
                    <li><Link href="#"><img src="/assets/img/images/sb_insta01.jpg" alt="" /></Link></li>
                    <li><Link href="#"><img src="/assets/img/images/sb_insta02.jpg" alt="" /></Link></li>
                    <li><Link href="#"><img src="/assets/img/images/sb_insta03.jpg" alt="" /></Link></li>
                    <li><Link href="#"><img src="/assets/img/images/sb_insta04.jpg" alt="" /></Link></li>
                    <li><Link href="#"><img src="/assets/img/images/sb_insta05.jpg" alt="" /></Link></li>
                    <li><Link href="#"><img src="/assets/img/images/sb_insta06.jpg" alt="" /></Link></li>
                </ul>
                <div className="social-icon-right mt-30">
                <Link href="https://www.facebook.com/atlantis.conseil"><i className="fab fa-facebook-f" /></Link>
                                                    <Link href="https://twitter.com/AtlantisConseil"><i className="fab fa-twitter" /></Link>
                                                   <Link href="https://www.instagram.com/atlantisconseil/"><i className="fab fa-instagram" /></Link>
                                                    <Link href="https://www.linkedin.com/company/atlantis-conseil"><i className="fab fa-linkedin" /></Link>
                                                    <Link href="https://www.youtube.com/channel/UCXDQzVaeVvj6e-fATPqhDEg/"><i className="fab fa-youtube" /></Link>
                                                
                </div>
            </div>
            <div className={`offcanvas-overly ${isOffcanvus ? "active" : ""}`} onClick={handleOffcanvus} />
        </>
    )
}
