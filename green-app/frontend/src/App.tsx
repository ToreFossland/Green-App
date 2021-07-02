import ProtectedRoute from "./ProtectedRoute";
import "./App.css";
import Login from "./components/Login";
import Signup from "./pages/SignupPage";
import Profile from "./components/profile/ProfilePage";
import UpdateProfile from "./components/profile/UpdateProfile";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import { ThemeProvider } from "@material-ui/styles";
import GlobalTheme from "./GlobalTheme";
import Activities from "./pages/RegisterActivityPage";
import Menu from "./menu/Menu";

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
