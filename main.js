const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1200, 
    height: 780,
    minHeight: 699,
    minWidth: 1199,
    icon: __dirname + '/favicon.ico',
    title: 'aiCloud',
    show: false,
    center: true,
    frame: false,
    titleBarStyle: 'hidden',
    type: 'normal',
    webPreferences:{
      webSecurity: true
    }
  });
  mainWindow.loadURL('https://aidersite.com');
  mainWindow.setContentProtection(true);
  //DevTools
  //mainWindow.webContents.openDevTools()
  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
  });
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
  setInterval(() => {
    mainWindow.reload();
  }, (1000 * 60 * 10))
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});