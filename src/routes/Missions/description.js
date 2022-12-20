import PropTypes from 'prop-types';
import Status from './status';

const MissionDescription = ({ missionName, description }) => (
  <div className="mission-list-elements">
    <li className="mission-elem">{missionName}</li>
    <li className="mission-elem">{description}</li>
    <li className="mission-elem">
      <Status />
    </li>
  </div>
);
MissionDescription.propTypes = {
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default MissionDescription;
