import './App.css';
import { Route, Switch,Routes ,Link } from "react-router-dom";
import { render } from "react-dom";
import Headers from './Heders/Header';
import Home from "./Home.js"
import {createStore}from 'redux';
import{Provider,connect}from 'react-redux';
import reduser from './reduser';
import { composeWithDevTools } from 'redux-devtools-extension';
import Login from './Login';
import SighnUp from './SighnUp';
import Product from "./Prouduct/Product"
function App() {
  const store=createStore(reduser,composeWithDevTools())
  return (
    <Provider store={store}>
    <div className="app">
    <Headers/>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/sighnup" element={<SighnUp/>} />
      <Route path="/Product/:id" element={<Product/>} />

    </Routes>

    </div>
    </Provider>
  );
}

export default App;
