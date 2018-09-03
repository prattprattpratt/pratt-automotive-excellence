import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, HashRouter } from 'react-router-dom';
import './routes.css';

// Routes
import Header from '../components/Header';
import Home from '../components/Home/Home';

// import Rental from './Rental';

// Types
// import { DashboardContainerProps } from './DashboardContainer';
// import { FooterProps } from '../components/Site/Footer';

// const Footer = Loadable({
//   loader: () => import('../components/Site/Footer'),
//   loading: () => null,
//   render(loaded: { default: React.ComponentType<FooterProps> }, props: FooterProps) {
//     const LoadedFooter = loaded.default;
//     return <LoadedFooter {...props} />;
//   }
// });

class Routes extends Component {
  // constructor() {

  // }

  render() {
    const routesContainer = (
      <div className="site-container">
        <Route path="/:site?" component={Header} />
        <div className="routes-container">
          <Switch>
            {/* <Route path="/careers" component={Careers} />
            <Route path="/rentals" component={Rental} /> */}
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    );

    return <BrowserRouter>{routesContainer}</BrowserRouter>;
  }
}

export default Routes;
