'use strict';

// JSX
var template = React.createElement(
  'p',
  null,
  'This JSX from app.js'
);
var appRoot = document.getElementById('app');

// html, location
ReactDOM.render(template, appRoot);
