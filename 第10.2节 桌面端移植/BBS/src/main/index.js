import { app, Menu, ipcMain } from 'electron';
import menu from './menu';
import createWindow from './createWindow';

app.on('ready', () => {
  createWindow();
  Menu.setApplicationMenu(menu);
  const item = menu.getMenuItemById('logout');
  ipcMain.on('logoutMenuItem', (e, msg) => {
    item.enabled = !!msg;
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
