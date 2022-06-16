import { PropTypes } from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { joinMissionAction } from '../redux/missions/missions';
import './Mission.css';

const Mission = (props) => {
  const mission = props;
  const {
    mission_name: name,
    mission_id: id,
    description,
    IsJoined,
  } = mission.mission;

  const dispach = useDispatch();

  const handleJoinMission = () => {
    dispach(joinMissionAction(id));
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{description}</td>
      <td>
        {' '}
        <p className="member-status">NOT A MEMBER</p>
      </td>
      <td>
        {' '}
        {IsJoined ? '' : (
          <Button variant="outline-secondary" type="Button" id={id} onClick={handleJoinMission}>
            Join Mission
          </Button>
        )}

      </td>
    </tr>
  );
};

Mission.protoTypes = {
  mission: PropTypes.object.isRequired,
};

export default Mission;
