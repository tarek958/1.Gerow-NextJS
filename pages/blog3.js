import VideoPopup from "@/components/elements/PopupVideo"
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function ProjectDetails() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={3} breadcrumbTitle="Blog détails">
                <section className="project-details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="project-details-wrap">

                                    <div className="project-details-content">
                                        <h2 className="title">BIEN RECRUTER : LA RECETTE DU SUCCÈS</h2>
                                        <p>Nous vivons une époque où le bien-être et l’épanouissement personnel sont des priorités. Il est aujourd’hui essentiel, pour être heureux, d’exercer un métier qui nous passionne ou qui répond à nos valeurs principales !</p>
                                        <p>Cette quête est une opportunité pour l’entreprise comme pour le salarié. Que ce soit par le biais d’une promotion ou en vous réorientant, il y a forcément un job de rêve qui vous attend quelque part. Et le cabinet de recrutement est votre meilleur allié pour le décrocher !</p>

                                        <div className="pd-inner-wrap">
                                            <div className="row align-items-center">
                                                <div className="col-41">
                                                    <div className="content">

                                                        <p className="info-two mb-3">Vous en avez assez de multiplier les heures à parcourir les offres d’emplois sur le web ou à envoyer des candidatures spontanées sans réussite ? C’est une situation classique et encore plus répandue dans les domaines concurrentiels ou les métiers à responsabilités.
                                                        </p>
                                                        <p className="info-two">
                                                            Avant de vous décourager, pensez à sortir des sentiers battus. Le cabinet de recrutement est une superbe alternative pour décrocher LE job qui vous intéresse. Il a accès aux offres les plus qualitatives, il a besoin de trouver un poste qui vous convienne pour satisfaire son client, chef d’entreprise, et surtout il vous coach comme un sportif, pour décrocher cet emploi !
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-59">
                                                    <div className="thumb">
                                                        <img src="/assets/img/project/project_details02.jpg" alt="" />
                                                        <VideoPopup style={3} id="prbXBTMJ8jw" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="project-details-content my-5">
                                            <h3 className="title-two" style={{ color: "#0055ff" }}>VOTRE MEILLEUR ALLIE POUR TROUVER LE JOB DE VOS REVES</h3>
                                            <p>
                                                En France, un peu plus de 20% des recrutements se font aujourd’hui par l’intermédiaire de cabinets de recrutement, spécialisés ou généralistes. Dans les pays anglo-saxons plus de 2/3 des recrutements sont aujourd’hui externalisés, cette pratique progresse en France et fait des cabinets de recrutement un point de passage obligé dans toute recherche d’emploi.</p>
                                            <p>Selon l’étude 2018 de RegionsJob, 47% des entreprises ont fait appel à un cabinet de recrutement dans le cadre d’une recherche de candidats. D’après l’enquête, ce serait également près de 26% des candidats qui auraient fait appel à un cabinet de recrutement pour trouver un emploi.</p>
                                        </div>
                                        <div className="project-details-content">
                                            <h3 className="title-two" style={{ color: "#0055ff" }}>Avec les cabinets de recrutement, jouez « gagnant-gagnant »</h3>
                                            <p>La raison d’être du cabinet est de trouver la bonne personne pour le bon poste, dans l’intérêt commun de l’entreprise ET du candidat. Contrairement aux idées reçues, le cabinet de recrutement travaille dans l’intérêt des deux parties, et a besoin de trouver le poste idéal pour le candidat s’il veut éviter qu’il s’en aille trop vite, ce qui ne satisferait pas son client, chef d’entreprise.</p>
                                        </div>
                                        <div className="project-details-content">
                                            <h3 className="title-two" style={{ color: "#0055ff" }}>
                                                TROUVER LES OFFRES D’EMPLOIS LES PLUS QUALITATIVES</h3>
                                            <p>Dans les grosses entreprises ou les postes à hautes responsabilités, la publication d’une offre à Pôle Emploi est souvent vouée à l’échec, tandis que les sites classiques entraînent un nombre de candidatures non qualifiées importantes.
                                            </p>
                                            <p>Pour ne pas perdre de temps et avoir au plus vite une liste de candidats pertinents, ces entreprises font appel aux cabinets de recrutement. Ces derniers sélectionnent uniquement les meilleurs profils, faisant ainsi un premier travail de sélection souvent très gourmand en temps.
                                            </p>
                                            <p>Un cabinet de recrutement dispose donc d’un large éventail d’offres d’emplois, récentes et bien souvent uniquement accessible au travers de ce type d’acteurs et introuvables en direct.
                                            </p>
                                            <p>Il vous permet également d’accéder à un vaste réseau d’entreprises de toutes tailles (startup, PME, grand groupe).</p>
                                        </div>
                                        <div className="project-details-content">
                                            <h3 className="title-two" style={{ color: "#0055ff" }}>UN COACHING GRATUIT POUR MIEUX REUSSIR VOTRE ENTRETIEN D’EMBAUCHE
                                            </h3>
                                            <p>Les cabinets dispensent de précieux conseils sur la manière de conduire l’entretien, comment bien expliquer son parcours professionnel, ses réalisations, etc. Le recruteur est à votre écoute, à l’écoute de vos souhaits en confort de vie, en rémunération et avantages souhaités, mais aussi de vos éventuelles craintes lors du processus de recrutement.</p>
                                            <p>Il a intérêt à ce que vous soyez le bon candidat pour son client, chef d’entreprise. Il va vous éviter de vous mentir ou de vous tromper !!! Et s’il estime que votre profil est le bon pour l’offre d’emploi qu’il vous propose, il va vous préparer pour que vous soyez le meilleur des candidats le jour de l’entretien final avec l’employeur ! Une série d’entretiens téléphonique, en visioconférence ou en présentiel, va lui permettre de vous aider à être au top sur tous les plans !</p>
                                        </div>
                                        <div className="project-details-content">
                                            <h3 className="title-two" style={{ color: "#0055ff" }}>Faites bonne impression en entretien

                                            </h3>
                                            <p>Le conseiller en recrutement va d’abord s’intéresser à votre posture et tenue, ainsi qu’à votre expression orale. Il est indispensable d’avoir une attitude correcte, positive et souriante, le jour de l’entretien avec l’employeur.</p>
                                            <p>Le cabinet de recrutement vous aide également à mettre l’accent sur les éléments essentiels de votre cv. Ceux qui sont en rapport avec le poste convoité. Allez dans le sens du poste tout en restant transparent et honnête pour éviter la confusion ou les pièges le jour de l’entretien.</p>
                                        </div>
                                        <div className="project-details-content">
                                            <h3 className="title-two" style={{ color: "#0055ff" }}>Mettez en valeur vos compétences techniques


                                            </h3>
                                            <p>Le cabinet de recrutement travaille avec le candidat pour l’aider à expliquer en détail chacune de ses expériences professionnelles. À mettre l’accent sur les postes occupés, les capacités techniques acquises . Il est bon d’illustrer ses capacités techniques par un exemple concret.</p>
                                            <p>Avoir le vocabulaire technique en rapport avec le poste proposé est un plus non négligeable. Enfin le cabinet de recrutement récupère des témoignages d’employeurs précédents, des « contrôles de références » qui peuvent faire la différence.</p>
                                            <p></p>
                                        </div>
                                        <div className="project-details-content">
                                            <h3 className="title-two" style={{ color: "#0055ff" }}>Mettez en valeur vos qualités humaines / votre savoir-être

                                            </h3>
                                            <p>Pensez à annoncer sur votre cv vos « soft skills », vos compétences humaines (il n’y a pas que les compétences techniques qui comptent !) C’est devenu aussi important que les compétences techniques, et les candidats oublient souvent de les mettre en avant.</p>
                                            <p>Le cabinet de recrutement vous aide à mieux vous connaître, à prendre conscience de vos qualités. Il vous invite à demander des témoignages à votre entourage professionnel (anciens collègues et patrons) pour partager le point de vue de votre entourage sur votre personnalité. Il vous aide à évaluer vos capacités à travailler en équipe ou en autonomie, en fonction du poste.</p>
                                            <p>L’avantage du cabinet de recrutement c’est qu’il connait bien son client, chef d’entreprise et les valeurs importantes à ses yeux. Cela va considérablement vous aider à savoir si vous allez être heureux dans cette entreprise et si vous allez satisfaire votre patron.</p>
                                        </div>
                                        <div className="project-details-content">
                                            <h3 className="title-two" style={{ color: "#0055ff" }}>Bien connaître le poste proposé et l’entreprise
                                            </h3>
                                            <p>Le recruteur vous renseigne sur l’entreprise (effectif, culture, modèle d’organisation). Il connait votre futur interlocuteur lors de l’entretien d’embauche. Il sait combien de personnes vont vous auditionner. Il sait de quoi vous pouvez vous permettre de parler et de quoi ne pas parler. Par exemple certains clients n’aiment pas qu’on parle de rémunération lors du premier entretien.</p>
                                            <p>Tout autant d’éléments pour que vous soyez complètement en confiance et que vous évitiez des erreurs stratégiques.</p>
                                        </div>
                                        <div className="project-details-content">
                                            <h3 className="title-two" style={{ color: "#0055ff" }}>Un procédé entièrement gratuit
                                            </h3>
                                            <p>Pour un candidat, le cabinet de recrutement ne facture rien. Pour se payer, le cabinet touche une commission à chaque fois qu’elle trouve le bon candidat pour une entreprise. Ce modèle gagnant-gagnant profite à tous. Vous ne perdez rien à contacter un cabinet et lui envoyer votre CV. Cela démontre votre motivation.</p>
                                        </div>
                                        <div className="project-details-content">
                                            <h3 className="title-two" style={{ color: "#0055ff" }}>MULTIPLIEZ VOS CHANCES D’OBTENIR UN EMPLOI PLUS RAPIDEMENT
                                            </h3>
                                            <p>Passer par un cabinet de recrutement en tant que candidat, c’est avoir l’assurance de la valorisation de sa candidature. Les recruteurs cherchent en permanence à trouver le « matching » parfait entre les besoins des entreprises et l’ensemble des critères de prédilection des candidats pour leur futur poste. Un candidat multiplie donc ses chances de trouver un emploi plus rapidement et plus facilement, et sans effort de recherche particulier.
                                            </p>
                                            <p>Les candidats bénéficient également d’une légitimité supplémentaire dans leur candidature. Lorsqu’elle est présentée par un cabinet, cela augmente sa légitimité aux yeux de l’entreprise par rapport aux candidatures directes, puisqu’elles ont déjà obtenu l’aval de l’intermédiaire.
                                            </p>
                                            <p>Tous ces éléments permettent alors au candidat de se concentrer uniquement sur l’entretien d’embauche et sur la réflexion sur leurs aspirations professionnelles.
                                            </p>
                                        </div>
                                        <div className="project-details-content">
                                            <h3 className="title-two" style={{ color: "#0055ff" }}>NEGOCIEZ MIEUX VOTRE SALAIRE

                                            </h3>
                                            <p>
                                                Comment bien négocier son salaire ? En vous libérant de cette tâche !
                                            </p>
                                            <p>
                                                Lorsque vous êtes en processus de recrutement avec un cabinet, vous obtenez de précieux conseils sur le marché. Ce qui vous évite de vous surévaluer et que ce seul détail soit l’erreur fatale en entretien. Vous pouvez accéder à des informations très utiles sur la fourchette salariale proposée par l’entreprise, les types d’évolution possibles, les responsabilités que vous pourrez obtenir dans le futur, et les niveaux de rémunérations possibles sur la durée. Généralement, vous disposez également d’une garantie d’obtenir le salaire minimum souhaité, car vous aurez préalablement défini vos attentes et fixé ce critère avec votre interlocuteur au sein du cabinet de recrutement.
                                            </p>
                                            <p>
                                                Dans tous les cas, les cabinets de recrutement se chargent de la partie négociation salariale avec l’entreprise. Vous n’avez donc pas à vous en soucier lors de l’entretien d’embauche.
                                            </p>
                                            <p>
                                                Un avantage considérable puisque cette étape peut s’avérer délicate et nécessite des compétences spécifiques.
                                            </p>
                                            <p>
                                                En conclusion, si vous souhaitez évoluer professionnellement et décrocher le job de vos rêves, faites-vous connaître des principaux cabinets de recrutement !!
                                            </p>
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