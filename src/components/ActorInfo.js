//############# actor_info.js #################

import React, { Component } from "react";
import { Link } from "react-router-dom";

//import our array of actors
import actors from "../data/data.js";

//import Components
import Actor from "./Actor";

//create the class ActorInfo
export default class ActorInfo extends Component {
  render() {
    //accessing the name of the actor from the match object using params and the ":actor" endpoint
    const { actor } = this.props.match.params;

    //map through all actors
    let favActors = actors.map(celeb => {
      //if actor matches the name of the URL endpoint, render <Actor>
      if (celeb.firstName === actor) {
        return <Actor key={celeb.id} data={celeb} />;
      }
    });

    return (
      <div>
        <Link className="btn btn-large btn-danger" to="/people">
          Back To Celeb Menu
        </Link>
        {favActors}
      </div>
    );
  }
}
