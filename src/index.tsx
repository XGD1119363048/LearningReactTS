import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './05-redux/App';
import reportWebVitals from './reportWebVitals';

// import './01-ts基础/06-类+接口'

ReactDOM.render(
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
