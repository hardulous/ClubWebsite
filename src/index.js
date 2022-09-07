import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootNode = document.getElementById("root");
const rootElement1 = ReactDOM.createRoot(document.getElementById("root"))

if (rootNode.hasChildNodes()) {
  ReactDOM.hydrateRoot(document.getElementById("root"),<App/>)
} else {
  rootElement1.render(<App/>);
}

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

