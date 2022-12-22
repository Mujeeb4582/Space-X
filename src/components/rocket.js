import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserve } from '../redux/rocketReducer';

const Rocket = ({
  rocketName, imgURL, description, reserved, id,
}) => {
  const dispatch = useDispatch();
  return (
    <li className="md:flex justify-center gap-4 mx-12 mb-4">
      <img
        className="h-56 w-full object-cover md:h-full md:w-72"
        src={imgURL}
        alt={rocketName}
      />
      <div>
        <h2 className="text-2xl font-semibold">{rocketName}</h2>
        <div>
          {reserved ? (
            <p className="my-2 text-justify">
              <span className="bg-cyan-500 text-white px-1 text-sm rounded-sm">Reserved</span>
              {' '}
              {description}
            </p>
          )
            : <p className="my-2 text-justify">{description}</p>}
        </div>

        <button
          type="button"
          className={`${reserved ? 'bg-gray-400' : 'bg-blue-500'} text-white mt-2 py-1 px-2 rounded-sm`}
          onClick={() => dispatch(reserve({
            rocketName, imgURL, description, reserved, id,
          }))}
        >
          {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </li>
  );
};
Rocket.propTypes = {
  rocketName: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default Rocket;
