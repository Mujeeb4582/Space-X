import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets);
  const rocketsReserved = rockets.filter((rocket) => rocket.reserved);
  return (
    <main className="mt-6 px-12 w-full flex flex-col gap-6 md:flex-row">
      <section className="md:w-1/2">
        <h2 className="text-2xl font-semibold pl-2 pb-4">
          My Rockets
        </h2>
        <ul className="flex flex-col border-t-2 border-gray-500">
          {rocketsReserved.length > 0
            ? rocketsReserved.map((rocket) => (
              <li className="flex h-12 text-lg border-2 border-t-0 border-gray-500 items-center p-4" key={rocket.id}>
                {rocket.rocket_name}
              </li>
            ))
            : <span className="flex h-24 text-lg border-2 border-t-0 border-gray-500 items-center p-4">You have no reserved rockets</span>}
        </ul>
      </section>
      <section className="md:w-1/2">
        <h2 className="text-2xl font-semibold pl-2 pb-4">
          My Missions
        </h2>
        <ul className="flex flex-col">
          <li className="flex w-full h-24 text-2xl font-lg text-gray-500 border-2 border-gray-500 items-center justify-center">
            Missions function will display hare
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Profile;
