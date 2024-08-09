import VideoPopup from "@/components/elements/PopupVideo"
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function ProjectDetails() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={3} breadcrumbTitle="Blob détails">
                <section className="project-details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="project-details-wrap">

                                    <div className="project-details-content">
                                        <h2 className="title">BIEN RECRUTER : LA RECETTE DU SUCCÈS</h2>
                                        <p>Le succès d’un recrutement se prépare dès la rédaction du poste qui sera diffusé sur les plateformes d’offres d’emplois.</p>
                                        <p>Il vous faut d’abord présenter dans le détail le métier et la fonction, au sein de votre entreprise. Rédigez une annonce précise et personnalisée, pour attirer des candidats qualifiés. Un texte clair et concis, sans abuser des termes trop techniques.</p>
                                        <p>Dans un deuxième temps il faut que vous définissiez précisément le type de candidat dont vous avez besoin, cela vous permettra de rédiger une annonce très ciblée, pour des réponses plus adaptées.</p>
                                        <p>Le contrat, le volume horaire, le niveau de formation, les compétences sont des éléments essentiels dont une personne a besoin pour savoir si elle peut prétendre au poste. Mais de plus en plus, les recruteurs donnent des précisions de nature plus « personnelles » sur le candidat recherché : apte à travailler en télétravail, en espace de coworking, autonome, flexible…</p>
                                        <p>Enfin il est important que vous précisiez votre culture d’entreprise et les valeurs humaines requises pour conserver l’harmonie dans les équipes. C’est ce que l’on appelle les « soft skills ». Plus vous serez précis dans votre description du poste proposé et du profil recherché, plus vous filtrerez les candidatures « inadaptées ».</p>
                                        <p>L’idée n’est pas de fermer des portes mais plutôt d’informer les candidats pour éviter les mauvaises surprises et les pertes de temps, pour eux comme pour vous.</p>
                                        
                                        <div className="pd-inner-wrap">
                                            <div className="row align-items-center">
                                                <div className="col-41">
                                                    <div className="content">

                                                        <p className="info-two">Une embauche réussie n’est pas le fruit du hasard, voici nos conseils pour réussir le meilleur recrutement, s’assurer au maximum que la nouvelle recrue va convenir à votre équipe et au travail demandé.

</p>
                                                    </div>
                                                </div>
                                                <div className="col-59">
                                                    <div className="thumb">
                                                        <img src="/assets/img/project/project_details02.jpg" alt="" />
                                                        <VideoPopup style={3} id="0ouwqz577kc" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="project-details-content my-5">
                                            <h3 className="title-two" style={{ color: "#0055ff" }}>BIEN DEFINIR LE POSTE ET LE PROFIL DONT VOUS AVEZ BESOIN</h3>
                                            <p>Recruter est un vrai métier avec un savoir-faire et une expertise qui s’apprennent et se peaufinent au fil des expériences. Un métier qui s’adapte aux changements de modes de vie et de travail. On ne recrute pas aujourd’hui, comme il y a 20 ans. On ne recrute pas un jeune « millenials » comme on recrute un employé de 40 ans et plus.</p>
                                            <p>Et si vous laissiez la main à un expert ?</p>
                                            <p>Aujourd’hui seulement 30% des entreprises font appel à un cabinet de recrutement.
                                            Pourtant recruter prend du temps, requiert un vrai savoir-faire et demande une vraie analyse et connaissance de l’entreprise. Bref, recruter ne s’improvise pas ! Et si vous voulez être sûr de votre choix, ne vous privez pas de l’expertise d’un cabinet spécialisé. Ce n’est pas une dépense supplémentaire, mais un investissement sur le long terme qui permettra à votre entreprise d’avoir une croissance sans obstacle.</p>
                                        </div>
                                        <div className="project-details-content">
                                            <h3 className="title-two" style={{ color: "#0055ff" }}>DIFFUSER L’OFFRE D’EMPLOIS SUR LES CANAUX LES PLUS PERTINENTS</h3>
                                            <p>Une fois que l’annonce est prête, il faut l’afficher sur les bonnes plate formes. Sur votre site web, sur les réseaux sociaux, les sites de recherches d’emploi, les portails de cabinets de recrutements, les ordres professionnels, journaux etc. Les possibilités sont presqu’infinies. Ce qui rend la tâche très chronophage et couteuse !</p>
                                            <p>Publier le plus possible n’est pas forcément la solution la plus efficace. Cibler les bons canaux est important. Il existe différents joboards spécialisées, principalement payants, mais où vous avez plus de chance de trouver des candidats qualifiés. C’est une étape de réflexion, de recherche, et d’investissement à ne pas négliger.</p>
                                            <p>Le cabinet de recrutement dispose d’un avantage à ce stade. Il connait ces sites d’offres d’emplois spécialisés, y est abonné, et peut rapidement publier vos offres aux meilleurs endroits. Un gain en efficacité appréciable !</p>
                                        </div>
                                        <div className="project-details-content">
                                            <h3 className="title-two" style={{ color: "#0055ff" }}>UNE BONNE ANALYSE DE LA CANDIDATURE</h3>
                                            <p>
                                            Seuls 22% des recruteurs prennent plus d’une minute pour analyser un CV et prendre une décision sur la candidature associée. C’est ce que révèle une étude réalisée par le site Régionsjob. Un cv se lit donc très rapidement car il ne suffit pas pour faire un choix. Il n’est qu’un résumé des formations et des expériences du candidat.</p>
                                            <p>Pour prendre la mesure du potentiel du candidat, vous, l’employeur, devez observer ce que le candidat a voulu mettre en avant sur son cv, mais également vous pencher sur sa lettre de motivation, le message qui accompagne cette candidature. Vous y trouverez des éléments bien plus pertinents pour juger la motivation et le degré d’implication. La motivation et l’ambition ont autant de poids que le diplôme !</p>
                                            <p>L’objectif de cette phase d’analyse est d’évaluer l’adéquation entre le profil du candidat et les exigences du poste que vous proposez.
                                            Prenez le temps de lire tous les CV reçus et gardez une banque de candidatures intéressantes à votre portée. Un curriculum en particulier pourrait peut-être mieux répondre aux exigences de votre prochain poste à pourvoir.</p>
                                        </div>
                                        <div className="project-details-content">
                                            <h3 className="title-two" style={{ color: "#0055ff" }}>UN ENTRETIEN BIENVEILLANT EN 3 TEMPS</h3>
                                            <p>Nous sommes à l’heure de la bienveillance ! Finis les entretiens où l’on cherche à intimider le candidat. Pour pouvoir accéder à son plein potentiel, l’idéal est de ne pas rajouter une dose de stress à une situation qui doit déjà le mettre dans un certain émoi. Douceur, écoute, curiosité pour le candidat, le mettront à l’aise. Favorisez les questions ouvertes pour lui donner l’occasion de s’exprimer librement. Questionnez-le sur votre entreprise pour mesurer sa motivation et à quel point il s’est préparé pour l’entretien.</p>
                                            <p>Aujourd’hui, nous sommes bien loin des entretiens traditionnels, de nombreuses entreprises décident même de recruter par le jeu. Cette méthode est appelée le « recrutainment ».</p>
                                            <p>Cela n’empêche qu’un entretien ça se prépare ! Commencez par poser à plat les objectifs que vous souhaitez atteindre lors de cet échange, et esquissez ainsi une trame d’entretien. Notez ensuite les questions à poser et les réponses que vous souhaitez obtenir. Construisez une grille d’entretien qui sera votre support pour reporter et comparer les forces, les axes d’amélioration, les compétences et le potentiel de vos candidats après les échanges. Préparez-vous également à répondre aux questions qui pourraient survenir lors de votre face-à-face.</p>
                                        </div>
                                        <div className="project-details-content">
                                            <h3 className="title-two" style={{ color: "#0055ff" }}>L’entrevue téléphonique : la première impression

                                            </h3>
                                            <p>Prenez le temps de questionner votre candidat en lui posant quelques questions générales (par rapport à ses disponibilités, le salaire recherché, etc.) Vous pourrez ainsi confirmer ou non ses attentes face au poste.</p>
                                            <p>Comme il n’y a pas de deuxième occasion de faire bonne première impression, vous aurez fait un pas de plus dans la direction de l’embauche de votre candidat approprié.</p>
                                        </div>
                                        <div className="project-details-content">
                                            <h3 className="title-two" style={{ color: "#0055ff" }}>L’entretien en personne pour faire vraiment connaissance

                                            </h3>
                                            <p>Après avoir accumulé les informations nécessaires sur votre candidat par son cv et l’entretien téléphonique, une rencontre s’impose !</p>
                                            <p>Vous pourrez ainsi découvrir son savoir être, sa façon de s’exprimer. Vous pourrez également tester ses aptitudes et sa réactivité en le mettant virtuellement dans une situation professionnelle. En projetant le candidat dans le poste, vous aurez la matière pour savoir s’il aura la posture, les réflexes, l’endurance … bref, les différents talents personnels nécessaires au poste.</p>
                                            <p>Pour un recrutement efficace, vous pouvez également soumettre le postulant à un test psychométrique. Les informations révélées par cette évaluation permettront d’identifier les aspects de sa personnalité qui influencent sa performance et avec lesquelles il sera le plus à l’aise naturellement.</p>
                                            <p></p>
                                        </div>
                                        <div className="project-details-content">
                                            <h3 className="title-two" style={{ color: "#0055ff" }}>La seconde entrevue : pour préciser les compétences recherchées

                                            </h3>
                                            <p>Pour des postes bien spécifiques, une seconde entrevue est parfois de mise. Que ce soit pour un poste plus technique, ou encore, pour faire passer une entrevue avec un second associé, un supérieur immédiat, etc.</p>
                                            <p>Prenez bien soin de jeter un coup d’œil aux informations et réponses recueillies dans les étapes précédentes, elles vous seront sans doute utiles dans cette seconde rencontre.</p>
                                            <p></p>


                                            <p>Tout d’abord trier des CV et faire des entretiens cela prend du temps et comme le dit l’adage, « le temps c’est de l’argent ! » En outre, pour trouver d’autres profils que ceux qui ont répondu à votre annonce, il faut des abonnements sur des job boards et des réseaux sociaux très couteux, et très chronophages.</p>
                                            <p>Enfin un expert en recrutement évoluant depuis plusieurs années dans un secteur vous aide à jauger les meilleurs profils du marché. C’est l’assurance de limiter significativement le risque de déconvenues. Les conséquences d’un mauvais recrutement peuvent être très pénalisantes, surtout pour un poste important : salaire important versé sans le résultat escompté, chute de la productivité donc perte d’argent, et parfois également démotivation de tout un service.</p>
                                            <p>Faire appel à un cabinet de chasseur de tête vous fera gagner un temps précieux et vous donnera un avantage compétitif et stratégique. En effet, les équipes de chasseur de têtes expérimentées disposent généralement d’un réseau développé et ont de fortes connaissances du terrain. Ils savent donc où trouver les meilleurs candidats dans les meilleurs délais. Les salariés les plus efficaces ne seront plus chez votre concurrent. Enfin, ils disposent de méthodes qui leurs assurent une taux de réussite supérieur à une démarche engagée individuellement par l’entreprise.</p>
                                        </div>
                                        <div className="project-details-content">
                                            <h3 className="title-two" style={{ color: "#0055ff" }}>IMPLIQUER LES COLLABORATEURS</h3>
                                            <p>Embaucher une personne implique de l’intégrer dans une équipe. Cette intégration doit être réussie pour que l’équipe soit efficace.</p>
                                            <p>Impliquer l’équipe dans le recrutement peut être une option pertinente. Si le candidat lui a plu, elle souhaitera le garder et donc l’intégrer au mieux. De plus, cette responsabilité supplémentaire, la motivera fortement. Vous pouvez même partager avec vos collaborateurs un outil de gestion du recrutement qui permet à tous les intervenants du processus d’embauche de partager des commentaires sur chaque candidat.</p>
                                        </div>
                                        <div className="project-details-content">
                                            <h3 className="title-two" style={{ color: "#0055ff" }}>VERIFIER LES COMPETENCES                                            </h3>
                                            <p>Sans vivre dans la méfiance permanente, il faut être conscient qu’un postulant peut raconter ce qu’il souhaite pendant un entretien. Il est important de vérifier ses compétences et ses expériences. Cela s’appelle du contrôle de références ! C’est chronophage mais c’est essentiel. Il est bon de passer quelques coups de fils à ses anciens employeurs, collaborateurs et/ou collègues.</p>
                                            <p>L’idée est de vous assurer que le candidat a bien les compétences et les valeurs que nous souhaitons et que nous avons entendues lors de l’entretien. Une fois cette vérification faite, vous pourrez aller plus loin, en toute confiance !</p>
                                        </div>
                                        <div className="project-details-content">
                                            <h3 className="title-two" style={{ color: "#0055ff" }}>PRIVILEGIEZ LES SAVOIR ETRE
                                            </h3>
                                            <p>Priorisez le recrutement d’un candidat qui aura les valeurs que vous cherchez et les valeurs de l’entreprise !

</p>
                                            <p>Outre les compétences techniques et autres connaissances métier, la valeur ajoutée de votre futur collaborateur porte sur ses compétences dites « douces », ou soft skills en anglais. Elles s’appliquent quels que soient le profil ou le niveau hiérarchique (cadre, employé, directeur, agent de maîtrise, etc.).</p>
                                            <p>Les soft skills sont de plus en plus valorisées en entreprise, et sont parfois même privilégiées par rapport aux compétences purement techniques. Pour que votre future recrue corresponde à la culture de votre entreprise, n’hésitez pas à définir avec vos collaborateurs les qualités attendues. Esprit d’équipe ? Créativité ? Empathie ? Esprit d’entreprise ? Volonté d’innovation ?….</p>
                                            <p>Bien sûr l’un des critères indispensables lors du recrutement est l’évaluation de l’aisance et de la facilité de la personne à s’intégrer à une équipe.</p>
                                        </div>
                                        <div className="project-details-content">
                                            <h3 className="title-two" style={{ color: "#0055ff" }}>FAITES-VOUS AIDER POUR GAGNER DU TEMPS ET DE L’EFFICACITE !
                                            </h3>
                                            <p>Comme vous venez de le lire, un recrutement réussi est un long chemin méthodique !

</p>
                                            <p>Certaines tâches nécessitent un temps incompressible pour être effectuées : trier des CV, envoyer des mails ou remplir des bases de données, appeler des candidats et faire passer des entretiens. Cela vous prend beaucoup de temps et vous éloigner de vos priorités, vous faire perdre de la productivité ! Pour un recrutement plus réactif et rapide, libérez-vous du temps, faites-vous aider par un cabinet de recrutement. Pour tout le processus d’embauche ou pour certaines parties qui vous semblent les plus chronophages.</p>
                                            <p>Vous pouvez opter pour une étape de présélection, pour que les experts en recrutement « dégrossissent » le travail. Ils peuvent, par exemple, organiser une journée de tests pour présélectionner plusieurs candidats en parallèle la même journée.</p>
                                            <p>Le cabinet de recrutement peut vous aider à optimiser les entretiens en faisant pour vous le contrôle de référence et en écartant les CV trompeurs. Ou en mettant au point une trame d’entretien adaptée au poste et à la culture d’entreprise. Il peut vous aider à analyser les réponses des candidats et vous accompagner dans la décision finale.</p>
                                            <p>Recruter est un choix sur l’avenir. Ne vous privez pas d’une expertise qui peuvent vous faire gagner du temps et de l’argent !</p>
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