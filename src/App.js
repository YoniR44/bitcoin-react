import React, { Component } from 'react';

import { HashRouter, Route, Switch } from 'react-router-dom'

import HomePage from './pages/HomePage'
import StatisticPage from './pages/StatisticPage'
import ContactPage from './pages/ContactPage'
import ContactDetails from './pages/ContactDetailsPage'
import ContactEdit from './pages/ContactEditPage'
import SignupPage from './pages/SignupPage/SignupPage';

import Header from './components/Header'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Header />

          <hr/>

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/stats" component={StatisticPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route path="/contact/edit/:id?" component={ContactEdit} />
            <Route exact path="/contact/:id" component={ContactDetails} />
            <Route path="/signup" component={SignupPage} />
          </Switch>
        </HashRouter>

      </div>
    );
  }
}

export default App;
