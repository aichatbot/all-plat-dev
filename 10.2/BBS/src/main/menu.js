import { app, Menu, dialog } from 'electron';
import { win } from './createWindow';

const logout = () => {
  win.webContents.send('logout', true);
};

const template = [
  {
    label: '账户',
    submenu: [
      {
        label: '退出登陆',
        click: logout,
        id: 'logout',
        enabled: true,
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
