
import { useState } from 'react'

export default function Accordion() {

    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                        <button className={isActive.key == 1 ? "accordion-button" : "accordion-button collapsed"} type="button">
                        Sélection Rigoureuse des Candidats
                        </button>
                    </h2>
                    <div id="collapseOne" className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">
                            <p>Nous veillons à vous présenter les candidats les plus pertinents en veillant à protéger la marque de votre entreprise. Ils découvrent votre identité uniquement au moment de réaliser un premier entretien avec vous.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                        <button className={isActive.key == 2 ? "accordion-button" : "accordion-button collapsed"} type="button">
                        Engagement pour des Missions Alignées sur Notre Expertise
                        </button>
                    </h2>
                    <div id="collapseTwo" className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">
                            <p>Nous acceptons uniquement des missions qui entrent dans notre champ de compétences sur la base de critères émis strictement professionnels et selon une méthodologie rigoureuse d’évaluation des compétences.</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
