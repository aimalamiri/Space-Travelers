import { PropTypes } from 'prop-types';
import React from 'react';
import './Mission.css';

const Mission = (props) => {
  const mission = props;
  const {
    mission_name: name,
    mission_id: id,
    description,
  } = mission.mission;

  return (
    <div className="mission">
      <span>{id}</span>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

Mission.protoTypes = {
  mission: PropTypes.object.isRequired,
};

export default Mission;
