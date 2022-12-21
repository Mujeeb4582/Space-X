import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const missions = useSelector((state) => (state.mission));
  const reservedMissions = missions.filter((mission) => mission.reserved === true);
  return (
    <main className="mt-6 px-12 w-full flex flex-col gap-6 md:flex-row">
      <section className="w-1/2">
        <h2 className="text-2xl font-semibold pl-2 pb-4">
          My Missions
        </h2>
        <ul className="flex flex-col">
          {reservedMissions.map((reserved) => (
            <li
              key={reserved.mission_id}
              className="flex w-full h-24 text-2xl font-lg text-gray-500 border-2 border-gray-500 items-center justify-center"
            >
              {reserved.mission_name}
            </li>
          ))}
        </ul>
      </section>
      <section className="w-1/2">
        <h2 className="text-2xl font-semibold pl-2 pb-4">
          My Rockets
        </h2>
        <ul className="flex flex-col">
          <li className="flex w-full h-24 text-2xl font-lg text-gray-500 border-2 border-gray-500 reserveds-center justify-center">
            Rockets function will display hare
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Profile;
