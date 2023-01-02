import React from 'react';
import ReactDOM from 'react-dom/client';

/*
GIT:   git push --set-upstream origin third-lecture

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
TREE SHAKING- remove unwanted

PARCEL USE TRANSITIVE DEPENDENCY TO PERFORM ALL THE ABOVE
OPERATION
*/

const heading = React.createElement(
  'h1',
  {
    id: 'title',
    key: 'h1',
  },
  'Namaste Everyone from React'
);
//  React.createElement gives => Object => HTML(and put up on DOM)
// const heading2 = React.createElement(
//   'h2',
//   {
//     id: 'title',
//     key: 'h2',
//   },
//   'Hello world'
// );
// below code is not HTML inside javascript, it is JSX which is a HTML like syntax
// in javascript
const heading3 = (
  <h1 id='title' key='h2'>
    Namaste React JS
  </h1>
);

// const container = React.createElement(
//   'div',
//   {
//     id: 'container',
//   },
//   [heading]
// );

// good practise to start with Capital letter
const HeaderComponent = () => {
  return (
    <div>
      {heading3}
      <h1>Hello</h1>
      <h2>Helo 2</h2>
    </div>
  );
};

const HeaderComponent2 = () => (
  <div>
    <h1>Hello</h1>
    <h2>Helo 2</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
// passing a react element to root
root.render(<HeaderComponent />);
