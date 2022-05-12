import logo from './logo.svg';
import './App.css';
import UserLogin from './Components/UserLogin'
import UserList from './Components/UserList';
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react"

function App() {
  const [loginUser, setLoginUser] = useState({})

  const userDetail = (user) => {
    setLoginUser(user)
  }
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<UserLogin userDetail={userDetail} />} />
        <Route path="/list" element={<UserList loginUser={loginUser} />} />
      </Routes>
    </div>
  );
}

export default App;
