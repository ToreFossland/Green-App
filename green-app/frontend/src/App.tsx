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
  const [postId, setPostId] = useState(0);

  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    let formData = new FormData();

    formData.append("username", "tore@mail.com");
    formData.append("password", "secret");

    const requestOptions = {
      method: "POST",
      headers: {},
      body: formData,
    };
    fetch("http://127.0.0.1:8000/token", requestOptions).then((response) =>
      console.log(response)
    );
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

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
