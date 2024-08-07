import { useRef } from "react"
import Slider from "react-slick"

const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
}

export default function Testimonial() {

    const sliderRef = useRef(null)

    const next = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext()
        }
    }

    const previous = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev()
        }
    }
    return (
        <>
            <section className="testimonial-area-two testimonial-bg-two" data-background="/assets/img/bg/h2_testimonial_bg.jpg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="section-title-two white-title text-center mb-50 tg-heading-subheading animation-style3">
                                <span className="sub-title">Nos Témoignages </span>
                                <h2 className="title tg-element-title">ILS NOUS ONT FAIT CONFIANCE</h2>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item-wrap-two">
                        <Slider ref={sliderRef} {...settings} className="row testimonial-active-two">
                            <div className="col-lg-6">
                                <div className="testimonial-item-two">
                                    <div className="testimonial-content-two">
                                        <div className="rating">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                        <p>“Agence professionnelle. Très bon contact avec mon conseiller Lucas GENOVESE, suivi et coaching exemplaire. Un grand merci à vous !</p>
                                        <div className="testimonial-avatar">
                                            <div className="avatar-thumb">
                                                <img src="/assets/img/images/testi_avatar02.png" alt="" />
                                            </div>
                                            <div className="avatar-info">
                                                <h2 className="title">Mr.GREGORY</h2>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="testimonial-item-two">
                                    <div className="testimonial-content-two">
                                        <div className="rating">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                        <p>“Excellent contact, très professionnel, à l’écoute, motivé et très motivant ?
Un grand Merci à Lucas Genovese</p>
                                        <div className="testimonial-avatar">
                                            <div className="avatar-thumb">
                                                <img src="/assets/img/images/testi_avatar01.png" alt="" />
                                            </div>
                                            <div className="avatar-info">
                                                <h2 className="title">Mme.CHRISTELLE</h2>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="testimonial-item-two">
                                    <div className="testimonial-content-two">
                                        <div className="rating">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                        <p>“Iliace, je t’envoie ce petit message de remerciement quant à notre collaboration professionnelle.
Il y a 8 mois de cela, tu m’as contacté afin de me proposer un poste de commercial dans une belle structure.
Ton discernement et ton professionnalisme ont créer le lien entre les deux parties et aujourd’hui, je suis validé dans mon poste.
Encore un grand merci à toi et bonne continuation.</p>
                                        <div className="testimonial-avatar">
                                            <div className="avatar-thumb">
                                                <img src="/assets/img/images/testi_avatar02.png" alt="" />
                                            </div>
                                            <div className="avatar-info">
                                                <h2 className="title">Mr.NICOLAS</h2>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="testimonial-item-two">
                                    <div className="testimonial-content-two">
                                        <div className="rating">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                        <p>“Cabinet très sympathique, serviable, réactive et compétent. Très bonne prestation, un grand Bravo ! Mon grand merci à Mr Genovese Lucas, pour me présenter l’agence Talent Job.</p>
                                        <div className="testimonial-avatar">
                                            <div className="avatar-thumb">
                                                <img src="/assets/img/images/testi_avatar01.png" alt="" />
                                            </div>
                                            <div className="avatar-info">
                                                <h2 className="title">Mme.CARMEN</h2>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                        <div className="testimonial-nav-two">
                            <button type="button" className="slick-prev slick-arrow" onClick={previous}>
                                <i className="flaticon-right-arrow" />
                            </button>
                            <button type="button" className="slick-next slick-arrow" onClick={next}>
                                <i className="flaticon-right-arrow" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
