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

export default function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://cors-anywhere.herokuapp.com/http://localhost:8000/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch(console.log);
  });

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
          <Route exact path="/" component={Signup} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/updateprofile" component={UpdateProfile} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
