import { PropTypes } from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Badge } from 'react-bootstrap';
import { joinMissionAction } from '../redux/missions/missions';
import './Mission.css';

const Mission = (props) => {
  const mission = props;
  const {
    mission_name: name,
    mission_id: id,
    description,
    isJoined,
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
        <Badge bg={isJoined ? 'info' : 'secondary'}>
          { isJoined ? 'Active Member' : 'NOT A MEMBER' }
        </Badge>
      </td>
      <td>
        <Button
          variant={isJoined ? 'outline-danger' : 'outline-secondary'}
          className="btn-action"
          onClick={handleJoinMission}
        >
          { isJoined ? 'Leave Mission' : 'Join Mission' }
        </Button>
      </td>
    </tr>
  );
};

Mission.protoTypes = {
  mission: PropTypes.object.isRequired,
};

export default Mission;
