// file for rockets test
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Rocket from '../components/rocket';

test('renders correctly', () => {
  const data = {
    id: 1,
    rocket_name: 'Falcon 1',
    description: 'A very fast ship',
    flickr_images: ['img'],
  };

  const { getByText } = render(
    <Provider store={store}>
      <Rocket
        key={data.id}
        rocketName={data.rocket_name}
        imgURL={data.flickr_images}
        description={data.description}
        reserved={!!data.reserved}
        id={data.id}
      />
    </Provider>,
  );

  expect(getByText(/Reserve/i)).toBeInTheDocument();
});
