import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRocketList } from '../redux/rockets/reducer';

const Rockets = () => {
  useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => dispatch(getRocketList()), []);

  return (
    <div />
  );
};

export default Rockets;
