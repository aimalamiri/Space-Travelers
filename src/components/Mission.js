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
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{description}</td>
    </tr>
  );
};

Mission.protoTypes = {
  mission: PropTypes.object.isRequired,
};

export default Mission;
