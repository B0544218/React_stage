import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// document.getElementID會去public裡面index.html找id為root的標籤
// <為甚麼會找public內的index.html可以去看react的webpack文件>
// reportWebVitals();
