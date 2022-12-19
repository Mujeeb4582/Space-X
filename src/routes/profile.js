import React from 'react';

const Profile = () => (
  <main className="mt-6 px-12 w-full flex flex-col gap-6 md:flex-row">
    <section className="w-1/2">
      <h2 className="text-2xl font-semibold pl-2 pb-4">
        My Rockets
      </h2>
      <ul className="flex flex-col">
        <li className="flex w-full h-24 text-2xl font-lg text-gray-500 border-2 border-gray-500 items-center justify-center">
          Rockets function will display hare
        </li>
      </ul>
    </section>
    <section className="w-1/2">
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

export default Profile;
