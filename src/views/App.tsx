// core
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// stylesheet module
import '../scss/index.scss';

// components
import Navbar from '../components/navbar/Navbar';

// views
import ProfileViews from './profile/index';

const route = [
  { label: 'Profile', url: '/profile', active: true },
  { label: 'Images', url: '/images', active: false },
  { label: 'Music', url: '/music', active: false },
];

function App() {
  return (
    <Router>
      <Switch>
        <Navbar route={route} />
        <Route path="/images" exact component={ImagesView} />
      </Switch>
    </Router>
  );
}

export default App;

const ImagesView = () => {
  return <p>Images View Pages</p>;
};
