import 'babel-polyfill';
import React from 'react';
import Widget from './';

export default (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
  }}>
    <Widget iframe={{
      src: 'http://127.0.0.1:8080/widget.html',
      width: '595px',
    }} />
  </div>
);
