import React, { Component } from "react";
import NavBar from "./GlobalNavbar";

class PageInterests extends Component {
  render() {
    return (
      <div className="PageInterests">
        <div id="NavBar_PageInterests">
          <NavBar />
        </div>

        <div className="Tiles">
          <div className="Anticipation">
            <p className="TilesTitle">Récits d'Anticipation</p>
            <p className="TxAnticipation">
              En cinéma ou en littérature, j'aime les univers de science
              fictions, dystopiques et/ou futuristes qui permettent une
              reflexion sur l'avenir. Ces récits amènent un débat sur l'éthique
              politique, scientifique ou sociale. C'était d'ailleurs le sujet de
              mon mémoire.
            </p>
          </div>

          <div className="Music">
            <p className="TilesTitle">Musique</p>
            <p className="TxMusic">Je suis une fervente amatrice de concerts et de festivals
              et une grande adepte du metal sous beaucoup de ses formes
              avec une préférence pour ses penchants extrèmes.
            </p>
          </div>

          <div className="Litterature">
            <p className="TilesTitle">Littérature</p>
            <p className="TxLitterature">
              J'ai fait de ma passion pour les livres mes études. J'aime en
              particuliers les récits SF et d'anticipation, les thrillers
              psychologiques, ésothériques ou historiques. Tout sauf des romans
              à l'eau de rose! Mes chouchous: Beukes, Dos Santos, Rice, King et
              Hosseini.
            </p>
          </div>

          <div className="Videogames">
            <p className="TilesTitle">Jeux Video</p>
            <p className="TxVideogames">
              Un bon jeu est une magnifique forme d'évasion sans quitter son
              salon. J'aime les belles histoires et les beaux graphismes, sans
              pour autant snober les jeux de mon enfance. Je ne rate jamais une
              foire aux jeux, avec l'espoir de dénicher des raretés.
            </p>
          </div>

          <div className="JiuJitsu">
            <p className="TilesTitle">Jiu Jitsu</p>
            <p className="TxJiuJitsu">
              Ceinture noire de ce beau sport, j'ai été coach pour adultes dans
              un dojo. Au délà du sport de défense, le JiuJitsu permet
              d'apprendre beaucoup sur soi, et de gérer des situations
              quotidiennes avec ma$itrise. En tant que coach, j'ai aimé me
              sentir utile en voyant évoluer mes padawans.
            </p>
          </div>

          <div className="Animals">
            <p className="TilesTitle">Cause Animale</p>
            <p className="TxAnimals">
              Grande défenseur des droits et du bien-être de nos amis les
              animaux, et par extension celle de la nature. C'est un combat qui
              me tient énormément à coeur.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PageInterests;
