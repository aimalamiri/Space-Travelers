import { useEffect } from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getRocketList } from '../redux/rockets/reducer';
import { missionsListAction } from '../redux/missions/missions';

const About = () => {
  const rockets = useSelector((state) => state.rockets);
  const missions = useSelector((state) => state.missions);

  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets.length === 0) dispatch(getRocketList());
    if (missions.length === 0) dispatch(missionsListAction());
  }, []);

  const reservedRockets = () => {
    const reservedRockets = rockets.filter((rocket) => rocket.reserved);
    return reservedRockets.map((rocket) => (
      <ListGroup.Item key={rocket.id}>{rocket.rocket_name}</ListGroup.Item>
    ));
  };

  const joinedMissions = () => {
    const joinedMissions = missions.filter((mission) => mission.isJoined);
    return joinedMissions.map((mission) => (
      <ListGroup.Item key={mission.mission_id}>{mission.mission_name}</ListGroup.Item>
    ));
  };

  return (
    <div>
      <Row>
        <Col>
          <h2>My Missions</h2>
          <ListGroup>{joinedMissions()}</ListGroup>
        </Col>
        <Col>
          <h2>My Rockets</h2>
          <ListGroup>{reservedRockets()}</ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default About;
