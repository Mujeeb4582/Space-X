import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './routes/profile';
import Rockets from './routes/rockets';
import MissionsPage from './routes/mission';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Rockets />} />
            <Route path="/my-profile" element={<Profile />} />
            <Route path="/missions" element={<MissionsPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
