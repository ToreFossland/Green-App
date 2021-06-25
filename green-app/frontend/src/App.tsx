import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleBottomNavigation from './menu/menu';
import Login from "./Components/login";
import UpdateProfile from './Components/profile/updateProfile';
import Profile from './Components/profile/profilePage';
import { Route, Switch } from "react-router-dom";


export default function App() {
  return (
    <div className="App">
        <SimpleBottomNavigation/>

        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/updateProfile" component={UpdateProfile} />
        </Switch>
    </div>
  );
}




