import { app, Menu, dialog } from 'electron';
import { win } from './createWindow';

const load = () => {
  win.webContents.send('menu', 'load');
};

const save = () => {
  win.webContents.send('menu', 'save');
};

const template = [
  {
    label: '文件',
    submenu: [
      {
        label: '打开',
        click: load,
        accelerator: 'CmdOrCtrl+O',
        id: 'load',
      },
      {
        label: '另存为',
        click: save,
        accelerator: 'CmdOrCtrl+S',
        id: 'save',
      },
      { type: 'separator' },
      {
        role: 'close',
        label: '关闭',
      },
    ],
  }];


if (process.platform === 'darwin') {
  template.unshift({
    label: app.getName(),
    submenu: [
      { role: 'about' },
      { type: 'separator' },
      { role: 'services' },
      { type: 'separator' },
      { role: 'hide' },
      { role: 'hideothers' },
      { role: 'unhide' },
      { type: 'separator' },
      { role: 'quit' },
    ],
  });
}
const menu = Menu.buildFromTemplate(template);

export default menu;
