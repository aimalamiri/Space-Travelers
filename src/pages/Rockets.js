import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import Rocket from '../components/Rocket';

import { getRocketList } from '../redux/rockets/reducer';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => dispatch(getRocketList()), []);

  return (
    <div className="rockets-main-container">
      <Container>
        { rockets.map((rocket) => (
          <Rocket id={rocket.id} key={rocket.id} />
        ))}
      </Container>
    </div>
  );
};

export default Rockets;
