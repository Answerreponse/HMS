import axios from 'axios';  

const API_BASE_URL = 'http://localhost:3000/api/patients';
const api = {
    createPatient: async (patientData) => {
        const response = await axios.post(API_BASE_URL, patientData);
        return response.data;
    }
}
export default api;