import React, { Component } from "react";
import NavBar from "./GlobalNavbar";

class PageAbout extends Component {
  render() {
    return (
      <div className="PageAbout">
        <div>
          <NavBar id="NavBar_PageAbout" />
        </div>
        <div className="TextPresentation">
          <p id="aboutMeIntro">Bonjour! Envie d’en savoir un peu plus sur mon parcours?</p>
          <p id="aboutMeText">
            Ne sachant pas vers quel domaine professionnel me diriger quand je
            suis sortie des secondaires, j’ai entamé des études en langues et
            littératures modernes, par pur intérêt personnel. <br />
            En plus d’apprendre deux langues – l’anglais et l’espagnol – j’ai pu faire
            de ma passion pour la littérature le sujet de mes études. Ces années
            passées sur les bancs de l’université m’ont permis de découvrir de
            nouvelles cultures, à travers les livres originaires de divers pays.
            Elles ont largement ouvert mon horizon sur des thématiques fort
            éloignées de l’étude dure des langues, à travers un large choix de
            cours d’option. J’ai particulièrement apprécie les cours d’histoire
            de l’art et d’étude du proche orient. <br />
            Par dessus tout, mes études m’ont amenée à faire des recherches sur un sujet qui me passionne:
            les univers dystopiques. Ces recherches ont culminé avec l’écriture
            de mon mémoire “Remnants of humanity in dystopic fictions”. 
            <br />M’ayant essayée à l’enseignement des langues, j’ai voulu me réorienter vers
            un autre domaine passionnant: celui de la programmation. J’ai
            découvert l’outil merveillleux qu’est CoCademy avant de m’inscrire à
            la formation BeCode. Là, j’ai pu préciser mes envies, je sais
            maintenant que c’est dans le front-end que je veux me lancer. J’ai
            eu l’occasion de travailler à la réalisation de divers projets
            concrets, en équipe ou en solo et je cherche maintenant à poursuivre
            ma formation par un stage, dans l’espoir de décrocher un emploi.
          </p>
        </div>
      </div>
    );
  }
}

export default PageAbout;
