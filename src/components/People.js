//############ people.js ############

import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

//import actors array
import actors from "../data/data.js";

export default class PeopleMenu extends Component {
  render() {
    //get access to the match object
    let match = this.props.match;
    //map through our array and create a NavLink for each object inside
    let NavPeeps = actors.map(actor => {
      return (
        <div key={actor.id} className={actor.firstName}>
          <NavLink
            activeClassName="selected"
            className="navlink"
            to={`${match.url}/${actor.firstName}`}>
            <img src={actor.imgFull} alt={actor.firstName} />
          </NavLink>
        </div>
      );
    });
    return (
      <div className="pictures">
        <Link className="btn btn-large btn-primary" to="/">
          Back To Home
        </Link>
        {NavPeeps}
      </div>
    );
  }
}
