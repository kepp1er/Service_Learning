// main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow(htmlFilePath) {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // Load the HTML file
  win.loadFile("D:/Software and Stuff/Service Learning/V4.0/Patient Database/index.html");

}

app.whenReady().then(() => {
  createWindow(path.join(__dirname, 'Software and Stuff/Service Learning/V4.0/Welcome Page/index.html'));

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow(path.join(__dirname, 'Software and Stuff/Service Learning/V4.0/Welcome Page/index.html'));
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
