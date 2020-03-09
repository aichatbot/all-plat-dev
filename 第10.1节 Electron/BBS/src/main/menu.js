import { app, Menu, dialog } from 'electron';
import { win } from './createWindow';

const sayHello = () => dialog.showMessageBox({
  message: '你好',
});

const changeColor = () => {
  win.webContents.send('color', 'primary');
};

const template = [
  {
    label: '测试',
    submenu: [
      {
        label: '打招呼',
        click: sayHello,
      },
      {
        label: '变蓝色',
        click: changeColor,
        id: 'changeColor',
        enabled: false,
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
