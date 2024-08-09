import Link from "next/link"
import { useState } from "react"
export default function MobileMenu() {
    const token = localStorage.getItem('token');
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <ul className="navigation">
                <li className="active menu-item-has-children"><Link href="/">Accueil</Link>
                </li>
                <li className="menu-item-has-children"><Link href="/index-4">Entreprises</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                        <li><Link href="/index-4#rh">Conseil RH</Link></li>
                        <li><Link href="/index-4#recrutement">Recrutement</Link></li>
                        <li><Link href="/index-4#formation">Formation</Link></li>
                        <li><Link href="/index-4#ref">Références</Link></li>
                        <li><Link href="/index-4#metier">Métiers</Link></li>
                    </ul>
                    <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2)}><span className="fas fa-angle-down" /></div></li>
                <li className="menu-item-has-children"><Link href="/index-5">Candidats</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                        <li><Link href="/index-5#offres">Offres d’emploi</Link></li>
                        <li><Link href="/index-5#temoignage">Témoignages</Link></li>
                        <li><Link href="/index-5#candidature">Candidature&nbsp;Spontanée</Link></li>
                    </ul>
                    <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="fas fa-angle-down" /></div></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li className="menu-item-has-children"><a>Candidats</a>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                        <li>
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
                        </li>
                    </ul>
                    <div className={isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4)}><span className="fas fa-angle-down" /></div></li>
            </ul>
        </>
    )
}
