/**
 * App starter to launch the electron app
 *
 * @author Yinlin Zhou <kelonzhou@gmail.com>
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
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
