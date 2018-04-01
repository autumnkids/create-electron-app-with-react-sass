/**
 * Webview component
 *
 * @author Yinlin Zhou <kelonzhou@gmail.com>
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from './button';
import './webview.scss';

class Webview extends Component {
  static propTypes = {
    initialSrc: PropTypes.string.isRequired
  };

  static defaultProps = {
    initialSrc: ''
  };

  state = {
    canGoBack: false,
    canGoForward: false,
    src: this.props.initialSrc
  };

  componentDidMount() {
    this.browseWindow.addEventListener('new-window', this.handleNewWindowEvent);
    this.browseWindow.addEventListener('dom-ready', this.handleDomReady);
  }

  componentWillUnmount() {
    this.browseWindow.removeEventListener(
      'new-window',
      this.handleNewWindowEvent
    );
    this.browseWindow.removeEventListener('dom-ready', this.handleDomReady);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.initialSrc !== nextProps.initialSrc) {
      this.setState({src: nextProps.initialSrc});
    }
  }

  handleNewWindowEvent = event => {
    this.setState({src: event.url});
  };

  handleDomReady = () => {
    this.setState({
      canGoBack: this.browseWindow.canGoBack(),
      canGoForward: this.browseWindow.canGoForward()
    });
  };

  getBrowseWindowRef = element => {
    this.browseWindow = element;
  };

  handleGoBack = () => {
    this.browseWindow.goBack();
  };

  handleGoForward = () => {
    this.browseWindow.goForward();
  };

  render() {
    return (
      <div className="BrowseWindow">
        <div className="BrowseWindow-navigation">
          {this.state.canGoBack && (
            <Button text="<-" onClick={this.handleGoBack} />
          )}
          {this.state.canGoForward && (
            <Button text="->" onClick={this.handleGoForward} />
          )}
        </div>
        <webview
          className="BrowseWindow-container"
          ref={this.getBrowseWindowRef}
          src={this.state.src}
        />
      </div>
    );
  }
}

export default Webview;
