import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Users from "./Users.json";
import Login from "./Components/login";
import Signup from "./Components/Signup";
import Profile from "./Components/profile/profilePage";
import UpdateProfile from "./Components/profile/updateProfile";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

function isAuthenticated() {
  let token = localStorage.getItem("token");
  return token ? true : false;
}

export default function App() {
  let token = localStorage.getItem("token");
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
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <ProtectedRoute exact path="/profile" component={Profile} />
          <Route exact path="/updateprofile" component={UpdateProfile} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
