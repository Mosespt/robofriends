import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyApp from './containers/MyApp.js';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*
    <Hello greeting={'Hello React Dev'} />
      // * TODO: Comment - from this point
      We can add props or properties with the HTML attribute.

      // greeting={'Hello' + 'React Dev'}
      // Unexpected string concatenation of literals  no-useless-concat
      // * to this point
    */}

    <MyApp />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
