import VideoPopup from "@/components/elements/PopupVideo"
import Link from "next/link"

export default function AboutTwo() {
    return (
        <>
            <section className="about-area-two pt-110 pb-120">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-7 col-md-9 order-0 order-lg-2">
                            <div className="about-img-two">
                                <div className="main-img">
                                    <img src="/assets/img/images/atlantis-candidat-3-600x338.png" alt="" />
                                   
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="about-content-two">
                                <div className="section-title mb-30 tg-heading-subheading animation-style2">
                                    <span className="sub-title tg-element-title">COMMENT</span>
                                    <h2 className="title tg-element-title">SUIVI & INTÉGRATION </h2>
                                </div>
                                <p>La réussite d’une mission de recrutement se juge dans le temps. La prise de poste est une première étape importante, l’intégration au sein de l’entreprise en est une seconde.</p>
                                <p>À ce titre nous assurons un suivi auprès de tous nos candidats recrutés afin de faciliter cette phase d’intégration et d’assurer la réussite de notre mission de recrutement.</p>
                                <div className="fa-3x ">
                                <Link href="/about" className="btn transparent-btn">décrochez le job de vos rêves</Link>
                                
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-shape-wrap">
                    <img src="/assets/img/images/about_shape01.png" alt="" />
                    <img src="/assets/img/images/about_shape02.png" alt="" />
                </div>
            </section>
        </>
    )
}
