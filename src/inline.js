import React from 'react';
import PropTypes from 'prop-types';
import load from 'promisescript';

export default class Inline extends React.Component {

  componentWillMount() {
    const { script: url, stylesheet } = this.props;
    load({
      url,
      type: 'script',
    });
    load({
      url: stylesheet,
      type: 'style',
    });
  }

  render() {
    return <div id="interactive" />;
  }
}

if (process.env.NODE_ENV !== 'production') {
  Inline.propTypes = {
    script: PropTypes.string,
    stylesheet: PropTypes.string,
  };
}
