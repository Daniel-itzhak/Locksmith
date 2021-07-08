import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import About from './componants/about/About';
import Game from './componants/game/Game';
import Header from './componants/header/Header';
import Home from './componants/home/Home';
import Footer from './componants/footer/Footer';

function App() {
  return (
    <div className="App">
        <Router>
          <Route path='/' component={Header}/>
          <Route exact path='/' component={Home}/>
          <Route path='/discount-game' component={Game} />
          <Route path='/about-me' component={About} />
          <Route path='/' component={Footer} />
        </Router>
    </div>
  );
}

export default App;
