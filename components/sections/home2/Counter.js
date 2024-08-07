import CounterUp from "@/components/elements/CounterUp"

export default function Counter() {
    return (
        <>
            <section className="counter-area-two">
                <div className="container">
                    <div className="counter-item-wrap">
                        <div className="row justify-content-center">
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="counter-item-two">
                                    <h2 className="count"><CounterUp count={6500} /></h2>
                                    <p>CV RETENUS
DANS NOTRE BASE</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="counter-item-two">
                                    <h2 className="count"><CounterUp count={330} /></h2>
                                    <p>CANDIDATS
EMBAUCHÉS</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="counter-item-two">
                                    <h2 className="count"><CounterUp count={200} /></h2>
                                    <p>CLIENTS</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="counter-item-two">
                                    <h2 className="count"><CounterUp count={8} /></h2>
                                    <p>ANNÉES
A VOTRE SERVICE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
