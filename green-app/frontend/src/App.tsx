import ProtectedRoute from "./ProtectedRoute";
import "./App.css";
import Login from "./components/login";
import Signup from "./components/Signup";
import Profile from "./components/profile/profilePage";
import UpdateProfile from "./components/profile/updateProfile";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage";
import { ThemeProvider } from "@material-ui/styles";
import GlobalTheme from "./GlobalTheme";
import Activities from "./components/RegisterActivity";
import Menu from "./menu/menu";

export default function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={GlobalTheme}>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <ProtectedRoute exact path="/profile" component={Profile} />
          <ProtectedRoute exact path="/updateprofile" component={UpdateProfile}/>
          <Route exact path="/home" component={MainPage} />
          <Route exact path="/activities" component={Activities} />
        </Switch>
        <Menu/>
      </div>
    </ThemeProvider>
    </BrowserRouter>
  );
}
