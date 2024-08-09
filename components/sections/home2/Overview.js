import Link from "next/link"
export default function Overview() {
    return (
        <>
            <section className="overview-area-two">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="overview-img-two">
                                <div className="mask-img-two">
                                    <img src="/assets/img/images/h3_overview_img01.jpg" alt="" />
                                </div>
                                <img src="/assets/img/images/h3_overview_img02.jpg" alt="" className="img-two" data-parallax="{&quot;y&quot; : 100 }" />
                                <div className="overview-shape-wrap">
                                    <img src="/assets/img/images/h3_overview_shape01.png" alt="" />
                                    <img src="/assets/img/images/h3_overview_shape02.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="overview-content-two">
                                <div className="section-title-two mb-30 tg-heading-subheading animation-style1">
                                    <span className="sub-title tg-element-title">NOS SERVICES</span>
                                    <h2 className="title tg-element-title">POUR LES ENTREPRISES</h2>
                                </div>
                                <p>Notre leitmotiv est d’accompagner nos clients sur différents volets dans le secteur des Ressources humaines :</p>
                                <p><strong>Le premier volet :</strong> le processus de recrutement, qui se compose en différentes parties :</p>
                                <ol>
                                    <li>Recueil et compréhension des besoins clients</li>
                                    <li>Création de la fiche de poste et diffusion des annonces</li>
                                    <li>Réception des candidatures et tri des CV</li>
                                    <li>Présélection des candidats</li>
                                    <li>Réalisation des entretiens physiques ou en visioconférence</li>
                                    <li>Prise de références</li>
                                    <li>Création et envoi des synthèses d'entretien</li>
                                    <li>Entretien avec le client</li>
                                    <li>Suivi et intégration du candidat</li>
                                </ol>
                                <p><strong>Le second volet :</strong> la mise en place de formations individuelles et personnalisées pour les collaborateurs, ainsi que leur suivi.</p>
                                <div className="d-flex justify-content-between mt-4">
            <div className="text-center">
                <i className="fa fa-user-tie fa-2x tg-element-title"></i>
                <p>RECRUTEMENT</p>
            </div>
            <div className="text-center">
                <i className="fa fa-graduation-cap fa-2x tg-element-title"></i>
                <p>FORMATION</p>
            </div>
            <div className="text-center">
                <i className="fa fa-briefcase fa-2x tg-element-title"></i>
                <p>CONSEIL RH</p>
            </div>
            
        </div>
        <div className="view-all-btn text-start mb-30">
                                <Link href="/index-4" className="btn btn-three">Trouvez vos prochains Talents</Link>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            
        </>
    )
}
