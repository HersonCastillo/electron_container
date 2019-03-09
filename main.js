const electron = require('electron');
const app = electron.app;
const shell = electron.shell;
const BrowserWindow = electron.BrowserWindow;
let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1200, 
        height: 800,
        minHeight: 699,
        minWidth: 1199,
        icon: __dirname + '/favicon.ico',
        title: 'aiCloud',
        show: false,
        center: true,
        frame: false,
        titleBarStyle: 'hidden',
        type: 'normal',
        resizable: true,
        webPreferences:{
          webSecurity: true
        }
    });
    mainWindow.loadURL("file://" + __dirname + "/www/index.html");
    mainWindow.setContentProtection(true);
    //mainWindow.webContents.openDevTools()
    mainWindow.on('ready-to-show', () => {
        mainWindow.show();
    });
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
    mainWindow.webContents.on('new-window', (event, url) => {
        event.preventDefault();
        shell.openExternal(url);
    });
    exports.closeWindow = () => {
        app.quit();
    }
    exports.minWindow = () => {
        BrowserWindow.getFocusedWindow().minimize();
    }
    setInterval(() => {
        mainWindow.reload();
    }, (1000 * 60 * 10))
});

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit();
});