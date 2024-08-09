import Link from "next/link"

export default function Banner() {
    return (
        <>
            <section className="banner-area-five has-animation">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-7 col-md-10 order-0 order-lg-2">
                            <div className="banner-img-five">
                                <img src="/assets/img/banner/h5_banner_main_img.png" alt="" className="main-img" />
                                <img src="/assets/img/banner/h5_banner_shape01.png" alt="" className="shape-one" data-aos="fade-up-left" data-aos-delay={600} />
                                <img src="/assets/img/banner/h5_banner_shape02.png" alt="" className="shape-two" />
                                <img src="/assets/img/banner/h5_banner_shape03.png" alt="" className="shape-three" />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="banner-content-five">
                                <h2 className="title" data-aos="fade-right" data-aos-delay={0}>Évoluez avec 
                                    <span> confiance,
                                        <svg viewBox="0 0 183 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.1884 13.1749C27.3244 9.45935 96.6096 -9.08021 181.595 12.5919" stroke="#0055FF" strokeWidth={4} />
                                        </svg>
                                    </span> trouvez le poste qui vous correspond.</h2>
                                <p data-aos="fade-right" data-aos-delay={300}>Atlantis Conseil valorise le rôle stratégique des ressources humaines dans la croissance des entreprises en offrant des solutions adaptées aux besoins spécifiques du marché.</p>
                                <Link href="/index-4#recruterCandidat" className="btn btn-three" data-aos="fade-right" data-aos-delay={600}>Commencer</Link>
                            </div>
                        </div>
                    </div>
                        <div  id="recruterCandidat" ></div>
                </div>
            </section>
        </>
    )
}
