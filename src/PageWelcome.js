import React, { Component } from "react";
import NavBar from "./GlobalNavbar";
import MyPhoto from "./photo.png";

class PageWelcome extends Component {
  render() {
    return (
      <div className="PageWelcome">
        <div id="NavBar_PageWelcome">
          <NavBar />
        </div>

        <div className="WelcomeTop">
          <h1>Laura Del Duca</h1>
          <h3>Développeur web junior, front-end</h3>
        </div>

        <div className="WelcomeBottom">
          <div id="MyPhotoDiv">
            <img src={MyPhoto} id="photo" alt="profile" />
          </div>
          <div>
            <p id="TextWelcome">
              Initialement diplômée en langues et littératures modernes à
              l’université de Liège, j’ai d’abord donné cours d’anglais dans le
              secondaire. Envieuse de découvrir un tout autre domaine, je me
              suis réorientée vers le développement web. Après une formation de
              7 mois chez BeCode, je suis à la recherche d’un stage et d’un
              emploi en tant que dévelopeur web junior.{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PageWelcome;
