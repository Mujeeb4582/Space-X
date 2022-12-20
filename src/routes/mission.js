import React from 'react';
import { useSelector } from 'react-redux';
import MissionDescription from './Missions/description';

export const baseUrl = 'https://api.spacexdata.com/v3/missions';

const MissionsPage = () => {
  const data = useSelector((state) => state.mission);
  console.log(data);

  return (
    <section className="mission-section">
      <div className="mission-container">
        <ul className="mission-details">
          { data.map((item) => (
            <MissionDescription
              key={item.mission_id}
              missionName={item.mission_name}
              description={item.description}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
export default MissionsPage;
