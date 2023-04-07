
import './App.css';
import Navbar from './components/Navbar'
import Navbottom from './components/Navbottom'
import FdBazaar from './components/FdBazaar';
import FirstPage from './components/FirstPage';
import FollowPage from './components/FollowPage';
import Frame from './components/Frame';
import Learning from './components/Learning';
import MeetTeam from './components/MeetTeam';
import PressPage from './components/PressPage';
import Saving from './components/Saving';
import TaxSaving from './components/TaxSaving';
import WhyFixed from './components/WhyFixed';
import FootPage from './components/FootPage';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Navbottom />
    <FirstPage />
    <FdBazaar />
    <Saving />
    <TaxSaving />
    <WhyFixed />
    <Learning />
    <MeetTeam />
    <PressPage />
    <FollowPage />
    <Frame />
    <FootPage />
    </div>
  );
}

export default App;
