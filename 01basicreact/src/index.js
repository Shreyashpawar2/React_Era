import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// const reactElemt={
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children:'click me to visit google'
// }

function MyApp() {
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}


// cant use in js file
// we can use this jsx file
// const anotherElemt = {
//   <a href:"https://google.com" c>click me to visit googl</a>
// }

const reactElemt=React.createElement(
  'a',
  { href:'https://google.com', target:'_blank' },
  'click me'
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // reactElemt
);

