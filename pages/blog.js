import Link from "next/link"
import Layout from "@/components/layout/Layout"
export default function Blog() {
    return (
        <>
        <Layout headerStyle={6} footerStyle={3} breadcrumbTitle="Dernier blog">

            <section className="blog-area-two blog-bg-two" data-background="/assets/img/bg/h2_blog_bg.jpg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title-two text-center mb-50 tg-heading-subheading animation-style3">
                                <span className="sub-title">Blog</span>
                                <h2 className="title tg-element-title">Lisez Nos Dernières Mises à Jour</h2>
                               
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="blog-post-item-two">
                                <div className="blog-post-thumb-two">
                                    <Link href="#"><img src="/assets/img/blog/h2_blog_img01.jpg" alt="" /></Link>
                                    
                                </div>
                                <div className="blog-post-content-two">
                                    <h2 className="title"><Link href="#">Quand faire appel à un chasseur de tête ?</Link></h2>
                                    <p>QUAND FAIRE APPEL À UN CHASSEUR DE TÊTE ? La réussite d’une entreprise passe aujourd’hui majoritairement par les collaborateurs qui la composent, ils construisent son savoir-faire, sa valeur ajoutée, et donc plus [...]</p>
                                    <div className="blog-meta">
                                        <ul className="list-wrap">
                                            
                                            <li><i className="far fa-calendar" />MAI, 2020</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="blog-post-item-two">
                                <div className="blog-post-thumb-two">
                                    <Link href="#"><img src="/assets/img/blog/h2_blog_img02.jpg" alt="" /></Link>
                             
                                </div>
                                <div className="blog-post-content-two">
                                    <h2 className="title"><Link href="#">Bien recruter : La recette du succès</Link></h2>
                                    <p>BIEN RECRUTER : LA RECETTE DU SUCCÈS Le succès d'un recrutement se prépare dès la rédaction du poste qui sera diffusé sur les plateformes d'offres d'emplois. Il vous faut d’abord présenter dans [...]</p>
                                    <div className="blog-meta">
                                        <ul className="list-wrap">
                                           
                                            <li><i className="far fa-calendar" />février, 2020</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="blog-post-item-two">
                                <div className="blog-post-thumb-two">
                                    <Link href="#"><img src="/assets/img/blog/h2_blog_img03.jpg" alt="" /></Link>
                                    
                                </div>
                                <div className="blog-post-content-two">
                                    <h2 className="title"><Link href="#">Comment décrocher le job de ses rêves !</Link></h2>
                                    <p>COMMENT DECROCHER LE JOB DE SES RÊVES ! Nous vivons une époque où le bien-être et l'épanouissement personnel sont des priorités. Il est aujourd’hui essentiel, pour être heureux, d'exercer un métier qui [...]</p>
                                    <div className="blog-meta">
                                        <ul className="list-wrap">
                                            
                                            <li><i className="far fa-calendar" />décembre, 2019</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="blog-post-item-two">
                                <div className="blog-post-thumb-two">
                                    <Link href="#"><img src="/assets/img/blog/blog_img03.jpg" alt="" /></Link>
                             
                                </div>
                                <div className="blog-post-content-two">
                                    <h2 className="title"><Link href="#">Bien recruter : La recette du succès</Link></h2>
                                    <p>BIEN RECRUTER : LA RECETTE DU SUCCÈS Le succès d'un recrutement se prépare dès la rédaction du poste qui sera diffusé sur les plateformes d'offres d'emplois. Il vous faut d’abord présenter dans [...]</p>
                                    <div className="blog-meta">
                                        <ul className="list-wrap">
                                           
                                            <li><i className="far fa-calendar" />février, 2020</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="blog-post-item-two">
                                <div className="blog-post-thumb-two">
                                    <Link href="#"><img src="/assets/img/blog/blog_img01.jpg" alt="" /></Link>
                                    
                                </div>
                                <div className="blog-post-content-two">
                                    <h2 className="title"><Link href="#">Comment choisir le bon cabinet de recrutement ?</Link></h2>
                                    <p>COMMENT CHOISIR LE BON CABINET DE RECRUTEMENT ? Votre entreprise se développe, il vous faut embaucher ? L'un de vos salariés vient de vous annoncer son départ, il va falloir le remplacer [...]</p>
                                    <div className="blog-meta">
                                        <ul className="list-wrap">
                                            
                                            <li><i className="far fa-calendar" />Octobre, 2019</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </Layout>
        </>
    )
}
