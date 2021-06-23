import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleBottomNavigation from './navbar';
import ProfilePage from './Components/profile/profilePage';
import Login from "./Components/login";

function App() {
  return (
    <div className="App">
        <ProfilePage/>
    </div>
  );
}

export default App;
