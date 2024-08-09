import Accordion from "@/components/elements/Accordion"
import Link from "next/link"

export default function Faq() {
    return (
        <>
            <section className="faq-area">
                <div className="faq-bg-shape" data-background="/assets/img/images/faq_shape01.png" />
                <div className="faq-shape-wrap">
                    <img src="/assets/img/images/faq_shape02.png" alt="" />
                    <img src="/assets/img/images/faq_shape03.png" alt="" />
                </div>
                <div className="container">
                    <div className="row align-items-end justify-content-center">
                        <div className="col-lg-6 col-md-9">
                            <div className="faq-img-wrap">
                                <img src="/assets/img/images/faq_img01.jpg" alt="" />
                                <img src="/assets/img/images/faq_img02.jpg" alt="" data-parallax="{&quot;y&quot; : 100 }" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="faq-content">
                                <div className="section-title mb-30 tg-heading-subheading animation-style2">
                                    <span className="sub-title tg-element-title">CABINET SPÉCIALISÉ EN</span>
                                    <h2 className="title tg-element-title">RECRUTEMENT</h2>
                                </div>
                                <p>Notre mission consiste à  rechercher, évaluer et sélectionner le ou les candidats correspondants aux compétences exigées et à vous les présenter.</p>
                                <div className="accordion-wrap">
                                    <Accordion />
                                </div>
                                <div className="view-all-btn text-start fa-4x mb-30">
                                <Link href="/index-4" className="btn btn-three" data-aos="fade-right" data-aos-delay={600}>Trouvez vos prochains talents</Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                        
        </>
    )
}
