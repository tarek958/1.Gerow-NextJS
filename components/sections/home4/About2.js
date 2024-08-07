import Link from "next/link"
export default function About() {
    return (
        <>
            <section className="about-area-four pb-120">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-7 col-md-10 order-0 order-lg-2">
                            <div className="about-img-wrap-four">
                                <div className="mask-img-wrap">
                                    <img src="/assets/img/images/h3_about_img01.jpg" alt="" />
                                </div>
                                <div className="icon"><i className="flaticon-business-presentation" /></div>
                                <img src="/assets/img/images/h3_about_img02.jpg" alt="" className="img-two" />
                                <div className="about-shape-wrap-three">
                                    <img src="/assets/img/images/h3_about_shape01.png" alt="" />
                                    <img src="/assets/img/images/h3_about_shape02.png" alt="" />
                                    <img src="/assets/img/images/h3_about_shape03.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="about-content-four">
                                <div className="section-title-two mb-30 tg-heading-subheading animation-style1">
                                    <span className="sub-title tg-element-title">CONSEIL EN</span>
                                    <h2 className="title tg-element-title">RESSOURCES HUMAINES</h2>
                                </div>
                                <p>Atlantis Conseil vous aide à mettre le management et les ressources humaines au cœur des processus qui garantissent la performance durable de l’entreprise et la qualité des produits et des services.</p>
                                <p>Nous mettons notre expertise à votre service dans de nombreux domaines des ressources humaines tels que la réalisation d’un audit social, de bilans de compétences et d’évaluations de potentiels. Nous pouvons également intervenir pour de la conduite du changement, de la gestion de conflits ainsi que pour des actions de team building.</p>
                                <div className="view-all-btn text-start mb-30">
                                <Link href="/project-details" className="btn btn-three">Parlons de votre projet</Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
