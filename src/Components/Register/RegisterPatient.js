import React, { useState } from 'react'

export default function RegisterPatient() {
    var [Username, setUsername] = useState('');
  var [Password, setPassword] = useState('');
  var [role, setRole] = useState('');
  var [name, setName] = useState('');
  var [age, setAge] = useState('');
  var [gender, setGender] = useState('');
  var [mobileNumber, setMobileNumber] = useState('');
  
  var patient={}
  function Register(){
    patient.username=Username
    patient.password=Password
    patient.role=role
    patient.name=name
    patient.age=age
    patient.gender=gender
    patient.mobileNumber=mobileNumber
    console.log(patient)

    var RequestOption ={
        method : 'POST',
        headers : {'Content-type':'application/json'},
        body : JSON.stringify(patient)
      }

      fetch("https://localhost:7071/api/User",RequestOption)
      .then(res=>res.json())
      .then(res=>{
        console.log(res)
        alert("Patient registered")
      })
      .catch(err=>{console.log(err)
        alert("User already present")})
  }
  
  return (
    <div>
      <form action="/register" method="post">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username"
                value={Username} onChange={(e)=>{setUsername(e.target.value)}} required/>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" 
                value={Password} onChange={(e)=>{setPassword(e.target.value)}} required/>
            </div>
            <div class="form-group">
                <label for="role">Role</label>
                <input type="text" id="role" name="role" 
                value={role} onChange={(e)=>{setRole(e.target.value)}} required/>
            </div>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" 
                value={name} onChange={(e)=>{setName(e.target.value)}}/>
            </div>
            <div class="form-group">
                <label for="age">Age</label>
                <input type="number" id="age" name="age"                 
                value={age} onChange={(e)=>{setAge(e.target.value)}}
                required/>
            </div>
            <div class="form-group">
                <label for="gender">Gender</label>
                <select id="gender" name="gender" 
                value={gender} onChange={(e)=>{setGender(e.target.value)}}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div class="form-group">
                <label for="mobileNumber">Mobile Number</label>
                <input type="tel" id="mobileNumber" name="mobileNumber"                
                value={mobileNumber} onChange={(e)=>{setMobileNumber(e.target.value)}}/>
            </div>
            <button onClick={Register}>Register</button>
        </form>
    </div>
  )
}
