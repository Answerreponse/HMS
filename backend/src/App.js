require('dotenv').config();
const express = require('express');
const cors = require('cors');
const patientRoutes = require('./routes/patients'); // Corrected path

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/patients', patientRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});