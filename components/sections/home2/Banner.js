
import Link from "next/link"
export default function Banner() {
    return (
        <>
            <section className="banner-area-three">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-9 order-0 order-lg-2">
                            <div className="banner-img-three" data-aos="fade-left" data-aos-delay={300}>
                                <img src="/assets/img/banner/h3_banner_img01.jpg" alt="" className="main-img" />
                                <img src="/assets/img/banner/h3_banner_img02.jpg" alt="" className="img-two" data-parallax="{&quot;y&quot; : 100 }" />
                                <img src="/assets/img/banner/h3_banner_img03.jpg" alt="" className="img-three" data-parallax="{&quot;x&quot; : -100 }" />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="banner-content-three">
                                <h2 className="title" data-aos="fade-right" data-aos-delay={0}>trouvez le poste qui vous correspond.</h2>
                                <p data-aos="fade-right" data-aos-delay={300}>Atlantis Conseil valorise le rôle stratégique des ressources humaines dans la croissance des entreprises en offrant des solutions adaptées aux besoins spécifiques du marché.</p>
                                <div className="view-all-btn text-start mb-30">
                                <Link href="/index-5" className="btn btn-three">Trouvez le job de vos rêves</Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-shape-wrap-three">
                    <img src="/assets/img/banner/h3_banner_shape01.png" alt="" />
                    <img src="/assets/img/banner/h3_banner_shape02.png" alt="" />
                </div>
            </section>
        </>
    )
}
