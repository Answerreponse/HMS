import React from 'react'
import CreatePatient from "./components/CreatePatients";
import api from "./services/api";
function App() {
  const handleCreate=async (patientData) => {
    try {
    await api.createPatient(patientData)
    alert
    ("Patient saved successfully!");}
  catch (error) {
    alert("Error saving patients:",error);
  }
  
}
return (
    <div>
      <CreatePatient  onSubmit={handleCreate}/>
    </div>
  )
}
export default App;
