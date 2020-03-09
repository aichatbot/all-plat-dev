import React, { createContext, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import ThreadListPage from './ThreadListPage';
import ProfilePage from './ProfilePage';
import SettingPage from './SettingPage';
import { HOST, PORT, DOMAIN } from '../config';

const userContext = createContext({
  user: {},
  setUser: () => { },
  auth: false,
  setAuth: () => { },
});

const App = () => {
  const [user, setUser] = useState({});
  const [auth, setAuth] = useState(false);
  const authenticate = async () => {
    try {
      const body = await JSON.parse(localStorage.getItem(DOMAIN));
      const res = await fetch(`${HOST}:${PORT}/api/users/auth`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const result = await res.json();
      if (res.ok) {
        setUser(result.data);
        setAuth(true);
      } else {
        alert(result.message);
      }
    } catch (err) {
      throw err;
    }
  };
  useEffect(() => {
    authenticate();
  }, []);
  return (
    <userContext.Provider value={{
      user, setUser, auth, setAuth,
    }}
    >
      <Helmet
        titleTemplate="%s | xxBBS —— 连接你和我"
        meta={[
          { name: 'charset', content: 'utf-8' },
          { name: 'description', content: '全世界最不为人所知的电子留言板' },
        ]}
      />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/threads" component={ThreadListPage} />
        <Route path="/profile/:username" component={ProfilePage} />
        <Route path="/setting" component={SettingPage} />
      </Switch>
      <Footer />
    </userContext.Provider>
  );
};

export { userContext };
export default App;
