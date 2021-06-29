import React from "react";
import "./App.css";
import Login from "./Components/login";
import Signup from "./Components/Signup";
import Profile from "./Components/profile/profilePage";
import UpdateProfile from "./Components/profile/updateProfile";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./Components/MainPage";
import { ThemeProvider } from "@material-ui/styles";
import GlobalTheme from "./globalTheme";
import Activities from "./menu/registerActivity";
import Menu from "./menu/menu";

export default function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={GlobalTheme}>
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
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/updateprofile" component={UpdateProfile} />
          <Route exact path="/" component={MainPage} />
          <Route exact path="/activities" component={Activities} />
        </Switch>
      </div>
      <Menu/>
    </ThemeProvider>
    </BrowserRouter>
  );
}
