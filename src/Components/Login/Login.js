import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  var [Username, setUsername] = useState('');
  var [Password, setPassword] = useState('');

  var navigate=useNavigate()

  var user = {};
  var Login = (e) => {
    if(!Username || !Password){
      alert("Please enter username and password")
      return;
    }
    e.preventDefault();
    user.username = Username;
    user.password = Password;
    user.role = "doctor";
    user.token = "";
    var requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };

    fetch("https://localhost:7071/api/User/Login",requestOptions)
    .then((res) => res.json())
    .then((res) => {
      sessionStorage.setItem("token", res.token);
      sessionStorage.setItem("username", res.username);
      sessionStorage.setItem("role", res.role);
      alert("Login success - " + res.username);

      if (sessionStorage.getItem("role") == "patient") {
          navigate('/patientDashboard')
      }
    })
    .catch((err) => console.log(err));
    
  }

  return (
    <div>
      <form action="/login" method="post">
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username"
                value={ Username} onChange={(e)=>setUsername(e.target.value)}
                required/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" 
                value={Password} onChange={(e)=>setPassword(e.target.value)}
                required/>
            </div>
            <button onClick={Login}>Login</button>
        </form>
    </div>
  )
}
