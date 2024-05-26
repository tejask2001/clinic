import React, { useState } from 'react'

export default function DeletePatient() {

    var[id,setId]=useState()

    function DeletePatient(){

        var RequestOption={
            method : 'DELETE',
            headers : {
              'Content-Type':'application/json'
            }
        }

        fetch(`https://localhost:7071/api/Patient?id=${id}`,RequestOption)
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
            alert('patient deleted successfully');
        })
        .catch(err => {
            console.error('Error:', err);
            alert('Error deleting patient.');
          });
    }

    
  return (
    <div>
      <input type="number" id="id" name="id" required
                value={id} onChange={(e)=>setId(e.target.value)}/>
                <button onClick={DeletePatient}>Delete</button>
    </div>
  )
}
