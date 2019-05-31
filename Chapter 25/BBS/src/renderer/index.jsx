import React, { useState } from 'react';
import { ipcRenderer } from 'electron';
import ReactDOM from 'react-dom';
import { Alert } from 'react-bootstrap';

const App = () => {
  const [color, setColor] = useState('positive');
  ipcRenderer.on('color', (e, color) => {
    setColor(color);
  });
  const toggleMenu = () => {
    ipcRenderer.send('toggle', true);
  };
  return (
    <button
      className={`btn btn-large btn-${color}`}
      onClick={() => toggleMenu()}
    >
      Hello Photon
    </button>
  );
};

const root = document.querySelector('#root');
ReactDOM.render(<App />, root);
