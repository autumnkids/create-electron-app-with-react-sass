const net = require('net');

const client = new net.Socket();

let isElectronStarted = false;
const tryConnection = () =>
  client.connect({port: 8080}, () => {
    client.end();
    if (!isElectronStarted) {
      isElectronStarted = true;
      const exec = require('child_process').exec;
      exec('npm run electron-dev');
    }
  });

tryConnection();

client.on('error', error => {
  setTimeout(tryConnection, 6500);
});
