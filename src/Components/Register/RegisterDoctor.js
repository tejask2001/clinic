import React, { useState } from 'react'

export default function Register() {
  var [Username, setUsername] = useState('');
  var [Password, setPassword] = useState('');
  var [role, setRole] = useState('');
  var [name, setName] = useState('');
  var [age, setAge] = useState('');
  var [qualification, setQualification] = useState('');
  var [experience, setExperience] = useState('');
  var [specialty, setSpeciality] = useState('');

  var doctor={}
  function Register(){
    doctor.username=Username
    doctor.password=Password
    doctor.role=role
    doctor.name=name
    doctor.age=age
    doctor.qualification=qualification
    doctor.specialty=specialty
    doctor.experience=experience
    console.log(doctor)
    var RequestOption ={
        method : 'POST',
        headers : {'Content-type':'application/json'},
        body : JSON.stringify(doctor)
      }

      fetch("https://localhost:7071/api/User",RequestOption)
      .then(res=>res.json())
      .then(res=>{
        console.log(res)
        alert("Doctor registered")
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
                value={Username} onChange={(e)=>setUsername(e.target.value)}
                required/>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" 
                value={Password} onChange={(e)=>setPassword(e.target.value)}
                required/>
            </div>
            <div class="form-group">
                <label for="role">Role</label>
                <input type="text" id="role" name="role" 
                value={role} onChange={(e)=>setRole(e.target.value)}
                required/>
            </div>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name"
                value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div class="form-group">
                <label for="age">Age</label>
                <input type="number" id="age" name="age" required
                value={age} onChange={(e)=>setAge(e.target.value)}/>
            </div>
            <div class="form-group">
                <label for="qualification">Qualification</label>
                <input type="text" id="qualification" name="qualification"
                value={qualification} onChange={(e)=>setQualification(e.target.value)}/>
            </div>
            <div class="form-group">
                <label for="experience">Experience</label>
                <input type="text" id="experience" name="experience"
                value={experience} onChange={(e)=>setExperience(e.target.value)}/>
            </div>
            <div class="form-group">
                <label for="specialty">Specialty</label>
                <input type="text" id="specialty" name="specialty"
                value={specialty} onChange={(e)=>setSpeciality(e.target.value)}/>
            </div>
            <button onClick={Register}>Register</button>
        </form>
    </div>
  )
}
