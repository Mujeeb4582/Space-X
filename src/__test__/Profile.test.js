// file for profile test
import TestRenderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Profile from '../routes/profile';

describe('Test Profile component', () => {
  it('should renders Profile component', () => {
    const ProfileComponent = TestRenderer.create(
      <Provider store={store}><Router><Profile /></Router></Provider>,
    ).toJSON();
    expect(ProfileComponent).toMatchSnapshot();
  });
});
