import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Comp2 from "./components/Comp2";
import State from "./components/State";
import Parent from "./components/Parent"
import Parent1 from './components/Parent1';
import Changestate from './components/Changestate';
import Changestate1 from './components/ChangeState1';
import CondRendaring from './components/CondRendaring';
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Get1 from './components/Get1';
import Post from './components/Post';
import Post2 from './components/Post2'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Post2/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
