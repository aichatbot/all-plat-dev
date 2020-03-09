import { BrowserWindow } from 'electron';

let win;
const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  win.loadURL(`file://${__dirname}/../index.html`);
  //win.webContents.openDevTools();
  win.on('closed', () => {
    win = null;
  });
};

export { win };
export default createWindow;
