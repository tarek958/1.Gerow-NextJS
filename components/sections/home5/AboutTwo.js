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
                                    <img src="/assets/img/project/h2_project_img03.jpg" alt="" />
                                    <VideoPopup style={3}/>
                                </div>
                                <img width="250" src="/assets/img/project/h2_project_img01.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="about-content-two">
                                <div className="section-title mb-30 tg-heading-subheading animation-style2">
                                    <span className="sub-title tg-element-title">LE JOB DE VOS RÊVES</span>
                                    <h2 className="title tg-element-title">VOUS TEND LA MAIN </h2>
                                </div>
                                <p>La recherche d’un nouvel emploi est un réel challenge dans un parcours professionnel. Les raisons qui vous amènent à vous lancer dans cette recherche peuvent être nombreuses. Envie d’un nouveau challenge, envie de changement, envie de progresser, etc.</p>
                                <p>Le parcours entre votre intention et la signature d’un contrat avec une entreprise est subtil et repose sur une multitude de critères. Parmi eux, vos objectifs et ceux de l’entreprise. Notre métier est de faire correspondre les deux pour vous aider à trouver le job de vos rêves et permettre à une entreprise de trouver en vous sa nouvelle recrue idéale.</p>
                                
                                <div className="fa-3x ">
                                <Link href="/index-5#candidature" className="btn transparent-btn">Candidature spontanée</Link>
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
