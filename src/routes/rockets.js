import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../redux/rocketReducer';
import Rocket from '../components/rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketDetails = useSelector((state) => state.rockets.rockets);
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <ul>
      {rocketDetails && rocketDetails.map((rocket) => (
        <Rocket
          key={rocket.id}
          rocketName={rocket.rocket_name}
          imgURL={rocket.flickr_images[0]}
          description={rocket.description}
        />
      ))}
    </ul>
  );
};

export default Rockets;
