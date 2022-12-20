import React, { useState, useEffect } from 'react';
import MissionDescription from './Missions/description';

const baseUrl = 'https://api.spacexdata.com/v3/missions';

export const Missions = () => {
  const [missionData, setMissionData] = useState([]);

  useEffect(() => {
    fetch(baseUrl)
      .then((respone) => (respone.json()))
      .then((data) => (setMissionData(data)));
  }, [setMissionData]);

  return (
    <section className="mission-section">
      <div className="mission-container">
        <ul className="mission-details">
          { missionData.map((item) => (
            <MissionDescription
              key={item.mission_id}
              spaceData={item}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Missions;
