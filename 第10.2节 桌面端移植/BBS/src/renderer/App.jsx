import React, { createContext, useEffect, useState } from 'react';
import RegLogPage from './RegLogPage';
import { ipcRenderer } from 'electron';
import { HOST, PORT, DOMAIN } from '../config';
import ThreadListPage from './ThreadListPage';

const userContext = createContext({
  user: {},
  setUser: () => { },
  auth: false,
  setAuth: () => { },
});

const App = () => {
  const [user, setUser] = useState({});
  const [auth, setAuth] = useState(false);
  const logout = async () => {
    try {
      const data = JSON.parse(await localStorage.getItem(DOMAIN));
      const res = await fetch(`${HOST}:${PORT}/api/users/logout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setAuth(false);
        setUser({});
        ipcRenderer.send('logoutMenuItem', false);
      }
    } catch (err) {
      throw err;
    }
  };
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
        ipcRenderer.send('logoutMenuItem', true);
      } else {
        ipcRenderer.send('logoutMenuItem', false);
      }
    } catch (err) {
      throw err;
    }
  };
  useEffect(() => {
    authenticate();
  }, []);
  ipcRenderer.on('logout', (e, msg) => {
    if (msg) {
      logout();
      setAuth(false);
      setUser({});
    }
  });
  return (
    <userContext.Provider value={{
      user, setUser, auth, setAuth,
    }}
    >
      <div className="m-0 p-0 w-100">
        {auth
          ? <ThreadListPage />
          : <RegLogPage />}
      </div>
    </userContext.Provider>
  );
};

export { userContext };
export default App;
