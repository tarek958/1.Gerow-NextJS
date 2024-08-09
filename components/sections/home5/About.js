import Link from "next/link"
export default function About() {
    return (
        <>
            <section className="about-area about-bg" data-background="/assets/img/bg/about_bg.jpg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="about-img-wrap">
                                <img src="/assets/img/images/atlantis-candidat.png" alt="" className="main-img" />
                                <img src="/assets/img/images/about_img_shape01.png" alt="" />
                                <img src="/assets/img/images/about_img_shape02.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="about-content">
                                <div className="section-title mb-25 tg-heading-subheading animation-style2">
                                    <span className="sub-title tg-element-title">TROUVER LE BON </span>
                                    <h2 className="title tg-element-title">“MATCHING”</h2>
                                </div>
                                <p>Notre mission consiste à trouver le bon « matching » entre une entreprise et un candidat. Seul ce résultat apportera une satisfaction globale et permettra un développement de l’entreprise au travers de l’épanouissement de ses collaborateurs.</p>
                                <p>Notre rôle consiste donc à bien comprendre les besoins et valeurs de l’entreprise d’une part. D’autre part, à bien identifier votre projet, vos souhaits et vos compétences. Cette analyse préalable nous permet de vous aider à trouver le job de vos rêves.</p>
                                <div className="view-all-btn text-start  fa-3x mb-30">
                                <Link href="/index-5#offres" className="btn btn-three">Trouvez le job de vos rêves</Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
