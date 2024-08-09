import Link from "next/link"

export default function Choose() {
    return (
        <>
            <section className="choose-area-two">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-8">
                            <div className="choose-img-two">
                                <img src="/assets/img/images/h4_choose_img.png" alt="" />
                                <img src="/assets/img/images/choose_img_shape01.png" alt="" />
                                <img src="/assets/img/images/choose_img_shape02.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="choose-content-two">
                                <div className="section-title-two white-title mb-30 tg-heading-subheading animation-style2">
                                    <span className="sub-title tg-element-title">NOS SERVICES</span>
                                    <h2 className="title tg-element-title">POUR LES CANDIDATS</h2>
                                </div>
                                <p>Bénéficiez de notre expertise et de notre accompagnement pour décrocher le job de vos rêves. Ensemble, identifions le poste qui est fait pour vous et trouvons l’entreprise au sein de laquelle vous allez vous épanouir.</p>
                               
                                <div className="d-flex justify-content-between mt-4 text-white">
    <div className="text-center">
        <i className="fa fa-search fa-2x text-primary custom-blue"></i>
        <p >RECHERCHE</p>
    </div>
    <div className="text-center">
        <i className="fa fa-handshake fa-2x text-primary custom-blue"></i>
        <p >“MATCHING”</p>
    </div>
    <div className="text-center">
        <i className="fa fa-puzzle-piece fa-2x text-primary custom-blue"></i>
        <p>INTÉGRATION</p>
    </div>
</div>
<div className="view-all-btn text-start mb-30">
                                <Link href="/index-5" className="btn btn-three">Trouvez le job de vos rêves</Link>
                            </div>

                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="choose-shape">
                    <img src="/assets/img/images/choose_shape.png" alt="" data-aos="fade-right" data-aos-delay={200} />
                </div>
            </section>
        </>
    )
}
