import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({ rocketName, imgURL, description }) => (
  <li className="flex h-48 gap-4 mx-12 mb-4">
    <img className="w-56" src={imgURL} alt={rocketName} />
    <div>
      <h2 className="text-2xl font-semibold">{ rocketName }</h2>
      <p className="my-2 text-justify">{description}</p>
      <button type="button" className="bg-blue-500 text-white mt-2 py-1 px-2 rounded-sm">Resver Rocket</button>
    </div>
  </li>
);
Rocket.propTypes = {
  rocketName: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Rocket;
