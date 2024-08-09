import Link from "next/link"
import Slider from "react-slick"

const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    fade: true,
    arrows: false,
    responsive: [
        { breakpoint: 767, settings: { dots: false, arrows: false } }
    ]
}

export default function MainSlider() {
    return (
        <>
            <section className="slider-area">
                <Slider {...settings} className="slider-active">
                    <div className="single-slider slider-bg" data-background="/assets/img/banner/banner_bg.jpg">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="slider-content">
                                        <span className="sub-title" data-animation="fadeInUp" data-delay=".2s">AVEC CONFIANCE</span>
                                        <h2 className="title" data-animation="fadeInUp" data-delay=".4s">trouvez le poste qui vous correspond.</h2>
                                        <p data-animation="fadeInUp" data-delay=".6s">Atlantis Conseil valorise le rôle stratégique des ressources humaines dans la croissance des entreprises en offrant des solutions adaptées aux besoins spécifiques du marché.</p>
                                        <Link href="/index-5#offres" className="btn" data-animation="fadeInUp" data-delay=".8s">NOS Offres</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slider-shape">
                            <img src="/assets/img/banner/banner_shape.png" alt="" data-animation="zoomIn" data-delay=".8s" />
                        </div>
                    </div>
                    <div className="single-slider slider-bg" data-background="/assets/img/banner/banner_bg02.jpg">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="slider-content">
                                        <span className="sub-title" data-animation="fadeInUp" data-delay=".2s">AVEC CONFIANCE</span>
                                        <h2 className="title" data-animation="fadeInUp" data-delay=".4s">trouvez le poste qui vous correspond.</h2>
                                        <p data-animation="fadeInUp" data-delay=".6s">Atlantis Conseil valorise le rôle stratégique des ressources humaines dans la croissance des entreprises en offrant des solutions adaptées aux besoins spécifiques du marché.</p>
                                        <Link href="/index-5#offres" className="btn" data-animation="fadeInUp" data-delay=".8s">NOS Offres</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slider-shape">
                            <img src="/assets/img/banner/banner_shape.png" alt="" data-animation="zoomIn" data-delay=".8s" />
                        </div>
                    </div>
                </Slider>
            </section>
        </>
    )
}
