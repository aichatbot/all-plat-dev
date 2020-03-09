import React, { useContext } from 'react';
import { ipcRenderer } from 'electron';
import { HOST, PORT, DOMAIN } from '../config';
import { userContext } from './App';
import PostButton from './PostButton';
import ModifyButton from './ModifyButton';
import DeleteButton from './DeleteButton';

const Header = () => {
  const {
    setUser, setAuth,
  } = useContext(userContext);
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
  return (
    <header className="toolbar toolbar-header fixed-top">
      <div className="toolbar-actions">
        <div className="btn-group">
          <button className="btn btn-default" onClick={() => logout()}>
            <span className="icon icon-logout" />
          </button>
        </div>
        <div className="btn-group">
          <PostButton />
          <ModifyButton />
          <DeleteButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
