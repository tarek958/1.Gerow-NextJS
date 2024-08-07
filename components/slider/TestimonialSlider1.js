import { useRef } from "react"
import Slider from "react-slick"

const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    fade: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
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

export default function TestimonialSlider1() {

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
            <Slider ref={sliderRef} {...settings} className="testimonial-active">
                
                
                    <div className="testimonial-content">
                        <div className="content-top">
                            
                            
                        </div>
                        <p>Vous le savez si vous avez déjà été en recherche d’emploi, cette démarche est souvent longue. Elle nécessite de consulter les offres, d’y répondre avec CV et lettre de motivation et ceux à de nombreuses reprises.</p>
                        <p>En retour, vous obtenez généralement des accusés réception (pas systématiquement) et de rares discussions sont engagées. La raison… toutes les entreprises qui publient une offre d’emploi ont des besoins avec différents niveaux d’urgence. Celles qui font appel à un cabinet de recrutement pour trouver la prochaine recrue ont généralement un besoin réel et urgent…</p>
                        <p>Vous aussi, allez directement à l’essentiel, faites-vous connaître des cabinets de recrutement.</p>
                        
                   
                </div>
                
            </Slider>
            
        </>
    )
}
