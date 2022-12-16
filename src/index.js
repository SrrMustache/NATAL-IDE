import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Menu from './components/menu/menu';
import Topo from './components/Topo/Topo';
import FooterIDE from './components/Footeride/footeride';
import Sobre from './components/Sobre/Sobre';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


  <Topo/>
  <Menu/>
  <Sobre/>
  <FooterIDE/>



  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
