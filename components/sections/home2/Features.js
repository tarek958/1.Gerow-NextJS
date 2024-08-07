import Link from "next/link"

export default function Features() {
    return (
        <>
            <section className="features-area-three">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-7">
                            <div className="section-title-two text-center mb-40 tg-heading-subheading animation-style1">
                                <span className="sub-title tg-element-title">Ce que nous faisons pour vous</span>
                                <h2 className="title tg-element-title">Les particularités qui rendent notre service unique</h2>
                            </div>
                        </div>
                    </div>
                    <div className="features-item-wrap-two">
    <div className="row justify-content-center ">
        <div className="col-xl-4 col-lg-2 col-md-4">
            <div className="features-item-three">
                <div className="features-icon-three">
                    <i className="flaticon-inspiration" />
                </div>
                <div className="features-content-three">
                    <h2 className="title">APPROCHE INNOVANTE</h2>
                </div>
            </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4">
            <div className="features-item-three">
                <div className="features-icon-three">
                    <i className="flaticon-layers" />
                </div>
                <div className="features-content-three">
                    <h2 className="title">ACCOMPAGNEMENT PERSONNALISÉ</h2>
                </div>
            </div>
        </div>
        <div className="col-xl-4 col-lg-2 col-md-4">
            <div className="features-item-three">
                <div className="features-icon-three">
                    <i className="flaticon-calculator" />
                </div>
                <div className="features-content-three">
                    <h2 className="title">SUIVI RÉGULIER</h2>
                </div>
            </div>
        </div>
        <div className="col-xl-4 col-lg-2 col-md-4">
            <div className="features-item-three">
                <div className="features-icon-three">
                    <i className="flaticon-investment" />
                </div>
                <div className="features-content-three">
                    <h2 className="title">GESTION PROACTIVE</h2>
                </div>
            </div>
        </div>
        <div className="col-xl-4 col-lg-2 col-md-4">
            <div className="features-item-three">
                <div className="features-icon-three">
                    <i className="flaticon-calculator" />
                </div>
                <div className="features-content-three">
                    <h2 className="title">INTELLIGENCE COLLECTIVE</h2>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="d-flex justify-content-between align-items-center mb-30">
    <div className="d-column gap-3">
        <p className="mb-0">Vous souhaitez plus de précisions ?</p>
        <p className="mb-0">Vous avez des questions ?</p>
    </div>
    <div className="view-all-btn">
        <Link href="/project-details" className="btn btn-three">Parlons de votre projet </Link>
    </div>
</div>

                </div>
            </section>
        </>
    )
}
