import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import MissionsPage from '../routes/mission';

afterEach(cleanup);
describe('Missions page component', () => {
  test('Renders Missions component', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <MissionsPage />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
