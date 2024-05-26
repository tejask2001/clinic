import React, { useState } from 'react'

export default function UpdatePatient() {
    var [id, setId] = useState('');
  var [age, setAge] = useState('');

  var patients={}
    function Update(){
        patients.id=id
        patients.age=age

        var RequestOption={
            method : 'PUT',
            headers : {
                'Content-Type':'application/json',
            },
            body : JSON.stringify(patients)
        }

        fetch("https://localhost:7071/api/Patient",RequestOption)
        .then(res=>res.json())
            .then(res=>{
                console.log(res);
                alert('Patients updated successfully');
                return
            })
            .catch(err => {
                console.error('Error:', err);
                alert('Error updating patients.');
              });

    }

  return (
    <div>
      <form action="/login" method="post">
            <div className="form-group">
                <label htmlFor="patientId">Id</label>
                <input type="text" id="id" name="id"
                value={ id} onChange={(e)=>setId(e.target.value)}
                required/>
            </div>
            <div className="form-group">
                <label htmlFor="age">Age</label>
                <input type="age" id="age" name="age" 
                value={age} onChange={(e)=>setAge(e.target.value)}
                required/>
            </div>
            <button onClick={Update}>Update</button>
        </form>
    </div>
  )
}
