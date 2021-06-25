import React from 'react';
import logo from './logo.svg';
import './App.css';
import Users from "./Users.json";
import Login from "./Components/login";
import Signup from "./Components/Signup";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Link} from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
    <div>
      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/"  component={Signup} />
      </Switch>
    </div>
  </BrowserRouter>
  );
}
