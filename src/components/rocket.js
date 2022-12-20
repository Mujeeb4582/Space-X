import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({ rocket }) => {
  const { flickerImages, rocketName, description } = rocket;
  return (
    <li>
      <img src={flickerImages} alt="Rocket" />
      <h2 className="text-3xl font-bold">{ rocketName }</h2>
      <p>{description}</p>
      <button type="button" className="bg-blue-400">Resver Rocket</button>
    </li>
  );
};
Rocket.propTypes = {
  rocket: PropTypes.shape({
    rocketName: PropTypes.string.isRequired,
    flickerImages: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Rocket;
