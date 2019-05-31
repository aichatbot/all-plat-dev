import { app, Menu, ipcMain } from 'electron';
import menu from './menu';
import createWindow from './createWindow';

app.on('ready', () => {
  createWindow();
  Menu.setApplicationMenu(menu);
  const item = menu.getMenuItemById('changeColor');
  ipcMain.on('toggle', (e, msg) => {
    if (msg) {
      item.enabled = !item.enabled;
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', (_e, hasVisibleWindows) => {
  if (!hasVisibleWindows) {
    createWindow();
  }
});
