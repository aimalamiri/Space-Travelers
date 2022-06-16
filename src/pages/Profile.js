import { useEffect } from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getRocketList } from '../redux/rockets/reducer';

const About = () => {
  const rockets = useSelector((state) => state.rockets);

  const dispach = useDispatch();

  useEffect(() => {
    if (rockets.length === 0) dispach(getRocketList());
  }, []);

  const reservedRockets = () => {
    const reservedRockets = rockets.filter((rocket) => rocket.reserved);
    return reservedRockets.map((rocket) => (
      <ListGroup.Item key={rocket.id}>{rocket.rocket_name}</ListGroup.Item>
    ));
  };

  return (
    <div>
      <Row>
        <Col>
          <h2>My Missions</h2>
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
