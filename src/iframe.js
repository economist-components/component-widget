/* eslint-env browser */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
    const { src, width, height, className, scrollStatus, id } = this.props;
    return (
      <iframe
        src={src}
        id={id}
        width={width}
        height={height}
        className={classNames('widget-iframe', className)}
        ref={this.saveRef}
        frameBorder="0"
        scrolling={scrollStatus}
      />
    );
  }
}

Iframe.defaultProps = {
  scrollStatus: 'auto',
};

if (process.env.NODE_ENV !== 'production') {
  Iframe.propTypes = {
    src: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    className: PropTypes.string,
    scrollStatus: PropTypes.string,
    id: PropTypes.string,
  };
}
