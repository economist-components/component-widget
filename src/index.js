/* eslint-env browser */
import React from 'react';
import Iframe from './iframe';
import PropTypes from 'prop-types';

export default function Widget({ strategy, iframe }) {
  if (strategy === 'iframe') {
    return <Iframe {...iframe} />;
  }
  return null;
}

Widget.defaultProps = {
  strategy: 'iframe',
};

if (process.env.NODE_ENV !== 'production') {
  Widget.propTypes = {
    strategy: PropTypes.oneOf([ 'iframe' ]),
    iframe: PropTypes.shape(Iframe.propTypes),
  };
}
