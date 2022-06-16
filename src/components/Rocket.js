import React from 'react';
import { PropTypes } from 'prop-types';
import { Row, Col, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/rockets/reducer';
import './Rocket.css';

const Rocket = (props) => {
  const rocket = props;
  const {
    rocket_name: names,
    id, description,
    flickr_images: img,
    reserved,
  } = rocket.rocket;

  const dispatch = useDispatch();
  const reserveRocketHandler = () => {
    dispatch(reserveRocket(id));
  };

  return (
    <Row id={id} className="my-4">
      <Col md={3}>
        <img src={img} alt="rocket img" className="w-100" />
      </Col>
      <Col>
        <p className="rocket-name">{names}</p>
        <p className="rocket-desc">
          <span className={(reserved) ? 'reserve-span' : ' '}>{(reserved) ? 'Reserved' : null }</span>
          {description}
        </p>
        <Button onClick={reserveRocketHandler} variant={reserved ? 'outline-secondary' : 'primary'}>{reserved ? 'Cancel Reservation' : 'Reserve Rocket' }</Button>
      </Col>
    </Row>
  );
};

Rocket.protoTypes = {
  rocket: PropTypes.object.isRequired,
};

export default Rocket;
