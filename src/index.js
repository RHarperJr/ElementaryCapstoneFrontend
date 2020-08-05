import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, NavLink, Switch, BrowserRouter as Router } from 'react-router-dom';
import NotFound from './NotFound';
import MathMain from './Components/math/MathMain';
import DiscountCalc from './Components/math/DiscountCalc';
import WeightGame from './Components/math/WeightGame';
import PlanetGame from './Components/science/PlanetGame';
import GeographyGame from './Components/geography/GeographyGame';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HeaderWithRouter2 from './Components/Header2';
  
const myRoutes = (
  <Router>
    <HeaderWithRouter2/>
    <div>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/math" component={MathMain}/>
        <Route path="/math/calc" component={DiscountCalc}/>
        <Route path="/math/weight" component={WeightGame}/>
        <Route path="/science" component={PlanetGame}/>
        <Route path="/geography" component={GeographyGame}/>
        <Route component={NotFound} />
      </Switch>
    </div>
    <Footer />
  </Router>
)


ReactDOM.render(
  myRoutes,
  document.getElementById('root')
);


