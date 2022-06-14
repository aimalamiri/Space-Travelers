import { PropTypes } from 'prop-types';
import React from 'react';
import './Mission.css';

const Mission = (props) => {
  const mission = props;
  const {
    mission_name: name,
    mission_id: id,
    manufacturers,
    payload_ids: payloadIds,
    wikipedia,
    website,
    twitter,
    description,
  } = mission.mission;

  return (
    <div className="mission">
      <span>{id}</span>
      <h2>{name}</h2>
      <ul>
        {manufacturers.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ul>
      <div>
        Payload Ids:
        <ul>
          {payloadIds.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
      <a href={wikipedia}>Read in wikipedia</a>
      <a href={website}>Read in the official website</a>
      <a href={twitter}>Twitter</a>
      <p>{description}</p>
    </div>
  );
};

Mission.protoTypes = {
  mission: PropTypes.object.isRequired,
};

export default Mission;
