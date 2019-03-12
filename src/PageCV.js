import React, { Component } from "react";
import NavBar from "./GlobalNavbar";
import HTML from "./HTML.svg";
import CSS from "./CSS.svg";
import JS from "./JS.svg";
import reactlogo from "./react.svg";
import Github from "./github.svg";

class PageCV extends Component {
  render() {
    return (
      <div className="PageCV">
        <div>
          <NavBar id="NavBar_PageCV" />
        </div>

        <div className="CVLeft">
          <p id="surnameName">
            <span id="surname">LAURA</span> <br />
            <span id="name">DEL DUCA</span>
          </p>
          <h3 id="title">DEVELOPPEUR JUNIOR, FRONT-END</h3>
          <div id="contact">
          <h4>CONTACTEZ MOI</h4>
          <div id="coords">
            <p>l.delduca@hotmail.com</p>
            <p>0489 10 34 61</p>
            <p>
              77, Rue du Onze Novembre <br />
              4460 Horion Hozémont
            </p>
            </div>
          </div>
        </div>

        <div className="CVCenter">
          <h3 className="experience">EXPÉRIENCE</h3>
          <ul>
            <li className="role">ENSEIGNEMENT ANGLAIS</li>
            <li className="info">2017 - 2018</li>
            <li className="info">Ecole d'Horticulture - Liège</li>
            <li className="info">Ecole d'Hotellerie - Liège</li>
          </ul>
        </div>

        <div className="CVRight">
          <h3 className="experience">FORMATION</h3>
          <ul>
            <li className="role">WEB DEVELOPEMENT</li>
            <li className="info">2018 - 2019 - BeCode Liège</li>
          </ul>

          <ul>
            <li className="role">MASTER EN LANGUES ET LITTERATURES MODERNES</li>
            <li className="info">2013 - 2016 - Université de Liège</li>
          </ul>

          <ul>
            <li className="role">
              BACHELIER EN LANGUES ET LITTÉRATURES MODERNES
            </li>
            <li className="info">2009 - 2013 - Université de Liège</li>
          </ul>
        </div>

        <div className="CVBottom">
          <div id="BottomLeft">
            <h3 className="experience">COMPÉTENCES WEB</h3>
            <div id="logos">
              <img src={HTML} className="logo" id="logoHTML" alt="HTML" />
              <img src={CSS} className="logo" id="logoCSS" alt="CSS" />
              <img src={JS} className="logo" id="logoJS" alt="JS" />
              <img
                src={reactlogo}
                className="logo"
                id="logoREACT"
                alt="React"
              />
              <img src={Github} className="logo" id="logoGITHUB" alt="GitHub" />
            </div>
          </div>

          <div id="BottomRight">
            <h3>LANGUES</h3>
            <ul>
              <li className="languages">Français</li>
              <li className="languages">Anglais</li>
              <li className="languages">Espagnol</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default PageCV;
