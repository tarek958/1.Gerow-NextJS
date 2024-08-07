import Link from "next/link"

export default function Team() {
    return (
        <>
            <section className="team-area-five pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title section-title-three text-center mb-50 tg-heading-subheading animation-style1">
                                <span className="sub-title tg-element-title">SPONSOR</span>
                                <h2 className="title tg-element-title">ILS NOUS ONT FAIT CONFIANCE</h2>
                                
                            </div>
                        </div>
                    </div> 
                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-lg-4 col-md-6 col-sm-10">
                            <div className="team-item-five">
                                <div className="team-thumb-five">
                                    <img src="/assets/img/team/logik.png" width="227" height="100" alt="" />
                                </div>
                                <div className="team-content-five">
                                    <h2 className="title"><Link href="/team-details">Logik</Link></h2>
                                    <span>Atlantis Conseil a su répondre de façon efficace et rapide à nos différentes demandes. Pour preuve nous avons un certain nombre de collaborateurs dans nos bureaux et nos effectifs actuels qui ont été recrutés par leurs soins. Atlantis Conseil nous permet d’éviter les « erreurs de casting », notamment grâce au travail de fond réalisé qui permet de recruter le bon profil.</span>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-4 col-md-6 col-sm-10">
                            <div className="team-item-five">
                                <div className="team-thumb-five">
                                    <img src="/assets/img/team/leasys.png" width="302" height="98" alt="" />
                                </div>
                                <div className="team-content-five">
                                    <h2 className="title"><Link href="/team-details">LEASYS</Link></h2>
                                    <span>Nous avons étés en confiance avec le consultant d’Atlantis Conseil, la méthode nous à convenue et rassurée. Nous avons reçu plusieurs bons CV en quelques jours sans avoir à nous occuper de quoi que ce soit. Le résultat est là, notre nouvelle collaboratrice convient parfaitement et s’intègre parfaitement.</span>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}
