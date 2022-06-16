import React from 'react';
import { PropTypes } from 'prop-types';
import { Row, Col } from 'react-bootstrap';

const Rocket = (props) => {
  const rocket = props;
  const {
    rocket_name: names,
    id, description,
    flickr_images: img,
  } = rocket.rocket;

  return (
    <Row id={id} className="my-4">
      <Col md={5}>
        <img src={img} alt="rocket img" className="w-100" />
      </Col>
      <Col>
        <p className="rocket-name">{names}</p>
        <p className="rocket-desc">{description}</p>
      </Col>
    </Row>
  );
};

Rocket.protoTypes = {
  rocket: PropTypes.object.isRequired,
};

export default Rocket;
