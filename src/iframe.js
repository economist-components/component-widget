/* eslint-env browser */
import React from 'react';

export default class Iframe extends React.Component {

  constructor(props) {
    super(props);
    this.receiveMessage = this.receiveMessage.bind(this);
    this.saveRef = this.saveRef.bind(this);
  }

  componentDidMount() {
    window.addEventListener('message', this.receiveMessage, false);
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.receiveMessage, false);
  }

  saveRef(component) {
    this.iframe = component;
  }

  receiveMessage(message) {
    const { type, payload } = message.data;
    if (type === 'RESIZE' && this.props.src === payload.origin) {
      this.iframe.height = payload.height;
    }
  }

  render() {
    const { src, width } = this.props;
    return (
      <iframe
        className="widget-iframe"
        ref={this.saveRef}
        src={src}
        width={width}
        frameBorder="0"
      />
    );
  }
}

if (process.env.NODE_ENV !== 'production') {
  Iframe.propTypes = {
    src: React.PropTypes.string,
    width: React.PropTypes.string,
  };
}
