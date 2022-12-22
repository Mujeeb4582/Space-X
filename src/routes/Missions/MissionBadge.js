import PropTypes from 'prop-types';

const MissionBadge = (props) => {
  const { reserved } = props;
  if (reserved) {
    return (
      <div className="mission-btn">
        <button type="button" className="join-btn">Active Member</button>
      </div>
    );
  }
  return (
    <div className="mission-btn">
      <button type="button" className="leave-btn">NOT A MEMBER</button>
    </div>
  );
};

MissionBadge.propTypes = {
  reserved: PropTypes.bool.isRequired,
};
export default MissionBadge;
