/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import Status from './status';

const MissionDescription = (props) => (
  <div className="mission-list-elements">
    <li className="mission-elem">{props.spaceData.mission_name}</li>
    <li className="mission-elem">{props.spaceData.description}</li>
    <li className="mission-elem">
      <Status />
    </li>
  </div>
);
export default MissionDescription;
