import React from 'react';
import ReactDOM from 'react-dom/client';

/*
HOT MODULE RELOAD USING PARCEL
USING FILE WATCHER ALGORITHM--C++
BUNDLING
MINIFY
CLEANING OR CODE
DEV & PRODUCTON BUILD
SUPER FAST BUILD ALGORITHM
IMAGE OPTIMIZATION
CACHING WHILE DEVELOPMENT
COMPRESSION
COMPATIBILITY WITH OLDER VERSION OF BROWSERS
ENABLE HTTPS N DEV
MANAGE PORT NUMBER
CONSISTENT HASHING ALGO TO CACHE
ZERO CONFIG

PARCEL USE TRANSITIVE DEPENDENCY TO PERFORM ALL THE ABOVE
OPERATION
*/

const heading = React.createElement(
  'h1',
  {
    id: 'title',
  },
  'Namaste Everyone from React'
);

const heading2 = React.createElement(
  'h2',
  {
    id: 'title',
  },
  'Hello world'
);

const container = React.createElement(
  'div',
  {
    id: 'container',
  },
  [heading, heading2]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
// passing a react element to root
root.render(container);
