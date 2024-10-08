import VideoPopup from "@/components/elements/PopupVideo"
import Link from "next/link"

export default function About() {
    return (
        <>
            <section className="about-area-six">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="pd-inner-wrap">
                                <div className="col-59">
                                    <div className="thumb">
                                        <img src="/assets/img/project/project_details01.jpg" alt="" />
                                        <VideoPopup style={3} id="0ouwqz577kc" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" >
                            <div className="about-content-six">
                                <div className="section-title section-title-three mb-30 tg-heading-subheading animation-style1">
                                    <span className="sub-title tg-element-title">CABINET DE</span>
                                    <h2 className="title tg-element-title">RECRUTEMENT, FORMATION & CONSEILS RH</h2>
                                </div>
                                <p>Situés au cœur de la Côte d’Azur, nous pouvons répondre aux besoins de nos clients en matière de recrutement et de formation sur la France entière.</p>
                                <p>Notre équipe de consultants, part leur solide expérience, vous apporterons des conseils personnalisés et adaptés à votre entreprise, votre secteur d’activité et votre environnement.</p>
                                <p>Notre flexibilité, notre disponibilité, notre implication et notre goût pour ce métier feront la différence.</p>
                                <div id="rh"></div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
