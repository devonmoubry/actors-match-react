//######## App.js #########
import React, { Component } from "react";
import "../styles/App.css";

//import React Router
import { BrowserRouter, Route, Switch } from "react-router-dom";

//component imports
import BaseLayout from "./BaseLayout";
import PeopleMenu from "./People";
import ActorInfo from "./ActorInfo";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route path="/people/:actor" component={ActorInfo} />
            <Route exact path="/people" component={PeopleMenu} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    );
  }
}

export default App;
