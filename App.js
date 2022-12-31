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
heading.innerHTML = 'Hello';
console.log('heading: ', heading);
