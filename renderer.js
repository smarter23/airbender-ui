// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
console.log('renderer')

// In renderer process (web page).
const { ipcRenderer } = require('electron')
ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log(arg) 
})

ipcRenderer.send('speaker-info', 'Received Speaker info!')

ipcRenderer.on('speakerInfo', (event, message) => {
  console.log("From Main Speaker list",message)
})