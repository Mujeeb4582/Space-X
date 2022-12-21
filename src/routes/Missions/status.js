import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/mission/missionReducer';

const Status = ({ missionId, reserved }) => {
  const dispatch = useDispatch();

  const handleJoinMission = () => {
    dispatch(joinMission(missionId));
  };

  const handleLeaveMission = () => {
    dispatch(leaveMission(missionId));
  };

  if (reserved) {
    return (
      <div className="mission-btn">
        <button type="button" onClick={handleLeaveMission} className="member-btn-no">NOT A MEMBER</button>
      </div>
    );
  }
  return (
    <div className="mission-btn">
      <button type="button" onClick={handleJoinMission} className="member-btn-yes">Active Member</button>
    </div>
  );
};
Status.propTypes = {
  missionId: PropTypes.string.isRequired,
  reserved: PropTypes.string.isRequired,
};
export default Status;
