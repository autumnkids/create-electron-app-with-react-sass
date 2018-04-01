/**
 * Example App
 * which shows the menu with buttons on the left hand side,
 * and a webview on the right hand side.
 *
 * @author Yinlin Zhou <kelonzhou@gmail.com>
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, {Component} from 'react';
import Button from './button';
import Webview from './webview';
import {MENU} from './lib/data';
import './app.scss';

const ENTER_KEYCODE = 13;

class App extends Component {
  state = {
    showMenu: true,
    src: ''
  };

  handleClick = ({key, value}) => () => {
    if (this.state.src !== value) {
      this.setState({src: value});
    }
  };

  render() {
    return (
      <div className="App">
        {this.state.showMenu && (
          <ul className="App-menu">
            {MENU.map(item => (
              <li key={item.key}>
                <Button text={item.key} onClick={this.handleClick(item)} />
              </li>
            ))}
          </ul>
        )}
        <Webview initialSrc={this.state.src} />
      </div>
    );
  }
}

export default App;
