// core
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// stylesheet module
import '../scss/index.scss';

// components
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

// views
import ProfileView from './profile/index';
import ImagesView from './images/index';
import MusicView from './music/index';

const route = [
  { label: 'Profile', url: '/profile', active: true },
  { label: 'Images', url: '/images', active: false },
  { label: 'Music', url: '/music', active: false },
];

function App() {
  return (
    <Router>
      <Navbar route={route} />
      <Switch>
        <Route path="/profile" exact component={ProfileView} />
        <Route path="/images" exact component={ImagesView} />
        <Route path="/music" exact component={MusicView} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
