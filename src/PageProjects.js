import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from './GlobalNavbar';

class PageProjects extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Je suis la page "Projets"
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default PageProjects;
