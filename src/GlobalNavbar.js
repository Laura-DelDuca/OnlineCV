import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <ul id="NavBar">
        <Link to="/"><li className="ListNavBar">Accueil</li></Link>
        <Link to="/about"><li className="ListNavBar">Parcours</li></Link>
        <Link to="/cv"><li className="ListNavBar">Mon CV</li></Link>
        <Link to="/projets"><li className="ListNavBar">Projets</li></Link>
        <Link to="/interets"><li className="ListNavBar">Intérêts</li></Link>
      </ul>
    );
  }
}

export default NavBar;
