import React from 'react';
import Rocket from '../components/rocket';

const Rockets = () => {
  const rocketDetails = [
    {
      id: 1,
      rocketName: 'Falcon 1',
      description:
        'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
      flickerImages: 'https://imgur.com/DaCfMsj.jpg',
    },
    {
      id: 2,
      rocketName: 'Falcon 9',
      description:
        'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
      flickerImages:
        'https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg',
    },
    {
      id: 3,
      rocketName: 'Falcon heavy',
      description:
        'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
      flickerImages:
        'https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg',
    },
  ];

  return (
    <ul>
      {rocketDetails.map((rocket) => (
        <Rocket
          key={rocket.id}
          rocket={rocket}
        />
      ))}
    </ul>
  );
};

export default Rockets;
