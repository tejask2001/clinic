import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function PatientDashboard() {
    var navigate=useNavigate()
  return (
    <div>
      <button onClick={()=>navigate('/getPatient')}>Get</button>
      <button onClick={()=>navigate('/updatePatient')}>Update</button>
      <button onClick={()=>navigate('/deletePatient')}>Delete</button>
    </div>
  )
}
