import React, { useState } from 'react';

function CreatePatients({onSubmit}) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    ward: "",
    diagnosis: ""
  });
// const[submittedData, setSubmittedData] = useState(null);
  const handleChange = (e) => { 
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Log the full form data clearly
//  setSubmittedData(formData);
//   };
const handleSubmit = (e) => {
  e.preventDefault();
  onSubmit(formData);
  console.table(formData);
};

  return (
    <div>
      <h1>Hospital Management System</h1>

      <h2>Patient Form</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label><br />
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
        /><br /><br />

        <label htmlFor="age">Age:</label><br />
        <input
          type="number"
          name="age"
          id="age"
          value={formData.age}
          onChange={handleChange}
          required
        /><br /><br />

        <label htmlFor="ward">Ward:</label><br />
        <input
          type="text"
          name="ward"
          id="ward"
          value={formData.ward}
          onChange={handleChange}
          required
        /><br /><br />

        <label htmlFor="diagnosis">Diagnosis:</label><br />
        <input
          type="text"
          name="diagnosis"
          id="diagnosis"
          value={formData.diagnosis}
          onChange={handleChange}
          required
        /><br /><br />

        <label htmlFor="gender">Gender:</label><br />
        <select
          name="gender"
          id="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select><br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreatePatients;