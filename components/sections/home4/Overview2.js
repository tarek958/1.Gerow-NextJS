
import Link from "next/link"

export default function Overview() {
    return (
        <>
            <section className="overview-area pt-120 pb-120">
                <div className="overview-shape" data-aos="fade-left" data-aos-delay={200} data-background="/assets/img/images/overview_shape.png" />
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="overview-img-wrap">
                                <img src="/assets/img/images/overview_img01.jpg" alt="" />
                                <img src="/assets/img/images/overview_img02.jpg" alt="" data-parallax="{&quot;x&quot; : 50 }" />
                                <img src="/assets/img/images/overview_img_shape.png" alt="" />
                                <div className="icon">
                                    <i className="flaticon-report-1" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="overview-content">
                                <div className="section-title-two mb-20 tg-heading-subheading animation-style3">
                                    <span className="sub-title">DISPENSE DE</span>
                                    <h2 className="title tg-element-title">FORMATIONS</h2>
                                </div>
                                <p className="info-one">Notre équipe de consultants forts de ses expériences réussites dans la formation, saura évaluer vos besoins et vous proposer la prestation de formation la plus adaptée en fonction de votre organisation et votre budget. Nous proposons une palette de formations spécifiques à chacun des besoins de nos clients.</p>
                                <p className="info-two">Pour développer la compétitivité de votre entreprise, nous conceptualisons et animons des formations sur mesure en adéquation avec vos besoins et vos enjeux.</p>
                                <p className="info-two">Dans une démarche de qualité et d’amélioration continue, Atlantis conseil s’engage en 2017 dans une certification auprès de Bureau Veritas.</p>
                                <h2 className="title tg-element-title">SITUATIONS DE HANDICAP</h2>
                                <p className="info-one">Pour évaluer l’accessibilité aux personnes en situation d’handicap, merci de contacter M Iliace Lazhir qui est là pour :</p>
                                <ul>
                                    <li>Accueillir et analyser la demande et la faisabilité du projet de formation</li>
                                    <li>Informer</li>
                                    <li>Et le cas échéant orienter vers les partenaires et structures compétentes.</li>
                                </ul>
                                <div className="view-all-btn text-start mb-30">
                                <Link href="/project-details" className="btn btn-three">Présentez-nous votre projet</Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
