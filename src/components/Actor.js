//########## actor.js ###########
import React from "react";

const Actor = props => {
  //create a variable "actor" with the data passed in via props.
  let actor = props.data;
  return (
    <div className="actor-stuff">
      <ul className="actor_bio_ul">
        <li className="actor_content" key={actor.id}>
          <img className="actor-image" src={actor.imgThumb} alt="actor" />
          <div className="actor-info">
            <h3>{actor.name}</h3>
            <h5>Birthname: {actor.birthName}</h5>
            <h5>Birthday: {actor.birthday}</h5>
            <h6>Birth Place: {actor.birthplace}</h6>
            <h6>{actor.credits}</h6>
            <h6>First Movie: {actor.firstMovie}</h6>
          </div>
          <div className="actor-bio">
            <p>
              <strong>Biography:</strong> {actor.bio}
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Actor;
