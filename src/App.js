import {BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Navbar from "./Components/Navbar";
import Contact from './Components/Contact'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route component ={Home} path='/' exact/>
        <Route component ={About} path='/about'/>
        <Route component ={Projects} path='/projects'/>
        <Route component ={Contact} path='/contact'/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
