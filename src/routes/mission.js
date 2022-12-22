import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../redux/mission/missionReducer';
import Status from './Missions/status';
import MissionBadge from './Missions/MissionBadge';

const MissionsPage = () => {
  const data = useSelector((state) => state.mission);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data.length) {
      dispatch(getMissions());
    }
  }, [dispatch, data]);
  return (
    <section className="mission-section">
      <div className="mission-heading">
        <div className="mission-div">
          <h2 className="mission-text">Mission</h2>
        </div>
        <div className="mission-div">
          <h2 className="mission-text">Description</h2>
        </div>
        <div className="mission-div">
          <h2 className="mission-text">Status</h2>
        </div>
      </div>
      <div className="space-mission">
        <ul className="mission-details">
          { data.map((item) => (
            <li key={item.mission_id} className="mission-list-elements">
              <div className="name-div">
                <h2 className="mission-name">{item.mission_name}</h2>
              </div>
              <div className="mission-description">
                <p>{item.description}</p>
              </div>
              <div className="mission-status">
                <MissionBadge reserved={!!item.reserved} className="badge" />
              </div>
              <div className="mission-status">
                <Status
                  key={item.mission_id}
                  reserved={!!item.reserved}
                  missionId={item.mission_id}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default MissionsPage;
