import "./App.css";
import GetPatient from "./Components/GetPatient/GetPatient";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import PatientDashboard from "./Components/PatientsDashboard/PatientDashboard";
import Register from "./Components/Register/RegisterDoctor";
import RegisterPatient from "./Components/Register/RegisterPatient";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import UpdatePatient from "./Components/UpdatePatient/UpdatePatient";
import DeletePatient from "./Components/DeletePatient/DeletePatient";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"/>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />        
        <Route path="register" element={<Register />} />        
        <Route path="registerPatient" element={<RegisterPatient />} />        
        <Route path="patientDashboard" element={<PatientDashboard />} />
        <Route path="getPatient" element={<GetPatient />} />
        <Route path="updatePatient" element={< UpdatePatient/>} />
        <Route path="deletePatient" element={< DeletePatient/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
