import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import ThreadListPage from './ThreadListPage';
import ProfilePage from './ProfilePage';
import SettingPage from './SettingPage';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/home" component={HomePage} />
      <Route path="/threads" component={ThreadListPage} />
      <Route path="/profile/:username" component={ProfilePage} />
      <Route path="/setting" component={SettingPage} />
    </Switch>
    <Footer />
  </div>
);

export default App;
