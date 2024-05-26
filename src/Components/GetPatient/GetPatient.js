import React, { useEffect, useState } from 'react'

export default function GetPatient() {

    var [patients, setPatients] = useState([]);

    useState(() => {

      fetch("https://localhost:7071/api/Patient")
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setPatients(res);
        });
    });

  return (
    <div>
      <div className='get-user-div'>
        {patients.map((patient, index) => (
        <div key={index} className="user-list-div">
            <div className='user-name-div user-row'>Name :{patient.name}</div>
            <div className='user-gender-div user-row'>Age :{patient.age}</div>            
            <div className='user-email-div user-row'>Gender : {patient.gender}</div>
            <div className='user-phone-div user-row'>Phone : {patient.mobileNumber}</div><br/>
        </div>))}
      </div>
    </div>
  )
}
