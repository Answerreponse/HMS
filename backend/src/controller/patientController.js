const db = require('../config/db');

// Get all patients
const getAllPatients = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM patients');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching patients:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create patient
const createPatient = async (req, res) => {
  try {
    const { name, age, gender, ward, diagnosis } = req.body;

    if (!name || !age || !gender) {
      return res.status(400).json({ message: 'Name, age, and gender are required' });
    }

    const [result] = await db.query(
      'INSERT INTO patients (name, age, gender, ward, diagnosis) VALUES (?, ?, ?, ?, ?)',
      [name, age, gender, ward, diagnosis]
    );

    res.status(201).json({ message: 'Patient registered successfully', patientId: result.insertId });
  } catch (error) {
    console.error('Error registering patient:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update patient
const updatePatient = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, gender, ward, diagnosis } = req.body;

    if (!id) return res.status(400).json({ message: 'Patient ID is required' });

    await db.query(
      'UPDATE patients SET name = ?, age = ?, gender = ?, ward = ?, diagnosis = ? WHERE id = ?',
      [name, age, gender, ward, diagnosis, id]
    );

    res.json({ message: 'Patient updated successfully' });
  } catch (error) {
    console.error('Error updating patient:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete patient
const deletePatient = async (req, res) => {
  try {
    const { id } = req.params;
    await db.query('DELETE FROM patients WHERE id = ?', [id]);
    res.json({ message: 'Patient deleted successfully' });
  } catch (error) {
    console.error('Error deleting patient:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { getAllPatients, createPatient, updatePatient, deletePatient };