import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import PageWelcome from "./PageWelcome";
import PageAbout from "./PageAbout";
import PageCV from "./PageCV";
import PageProjects from "./PageProjects";
import PageInterests from "./PageInterests";

export default class Routing extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={PageWelcome} />
                        <Route path="/about" component={PageAbout} />
                        <Route path="/cv" component={PageCV} />
                        <Route path="/projets" component={PageProjects} />
                        <Route path="/interets" component={PageInterests } />
                    </Switch>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<Routing />, document.getElementById("root"));

serviceWorker.unregister();
