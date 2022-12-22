// file for navbar test
import TestRenderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Test Navbar component', () => {
  it('should renders Navbar component', () => {
    const NavbarComponent = TestRenderer.create(<Router><Navbar /></Router>).toJSON();
    expect(NavbarComponent).toMatchSnapshot();
  });
});
