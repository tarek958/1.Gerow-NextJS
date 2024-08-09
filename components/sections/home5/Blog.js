import Link from "next/link"

export default function Blog() {
    return (
        <>
            <section className="blog-area-three pt-120 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title-two text-center mb-50 tg-heading-subheading animation-style1">
                                <span className="sub-title tg-element-title">INFORMATIONS</span>
                                <h2 className="title tg-element-title">INFORMATIONS UTILES</h2>
                               
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="blog-post-item-two">
                                <div className="blog-post-thumb-two">
                                    <Link href="/blog1"><img src="/assets/img/blog/h3_blog_img01.jpg" alt="" /></Link>
                                    
                                </div>
                                <div className="blog-post-content-two">
                                    <h2 className="title"><Link href="/blog1">Quand faire appel à un chasseur de tête ?</Link></h2>
                                    <p>QUAND FAIRE APPEL À UN CHASSEUR DE TÊTE ? La réussite d’une entreprise passe aujourd’hui majoritairement par les collaborateurs qui la composent, ils construisent son savoir-faire, sa valeur ajoutée, et donc plus [...]</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="blog-post-item-two">
                                <div className="blog-post-thumb-two">
                                    <Link href="/blog2"><img src="/assets/img/blog/h3_blog_img02.jpg" alt="" /></Link>
                                    
                                </div>
                                <div className="blog-post-content-two">
                                    <h2 className="title"><Link href="/blog2">Bien recruter : La recette du succès</Link></h2>
                                    <p>BIEN RECRUTER : LA RECETTE DU SUCCÈS Le succès d'un recrutement se prépare dès la rédaction du poste qui sera diffusé sur les plateformes d'offres d'emplois. Il vous faut d’abord présenter dans [...]</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="blog-post-item-two">
                                <div className="blog-post-thumb-two">
                                    <Link href="/blog3"><img src="/assets/img/blog/h3_blog_img03.jpg" alt="" /></Link>
                                   
                                </div>
                                <div className="blog-post-content-two">
                                    <h2 className="title"><Link href="/blog3">Comment décrocher le job de ses rêves !</Link></h2>
                                    <p>COMMENT DECROCHER LE JOB DE SES RÊVES ! Nous vivons une époque où le bien-être et l'épanouissement personnel sont des priorités. Il est aujourd’hui essentiel, pour être heureux, d'exercer un métier qui [...]</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
