/* eslint-env browser */
import React from 'react';
import Iframe from './iframe';

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
    strategy: React.PropTypes.oneOf([ 'iframe' ]),
    iframe: React.PropTypes.shape(Iframe.propTypes),
  };
}
