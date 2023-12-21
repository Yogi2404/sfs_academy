import axios from 'axios';

// Create an axios instance with common configurations
const axiosInstance = axios.create({
    baseURL: 'http://localhost:5001/api/', // Your API base URL
    timeout: 10000, // Request timeout in milliseconds
    // Other common configurations...
});

// Define your global HTTP request methods
export const apiGet = async (endpoint, token = null) => {
    try {
        const headers = {};

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const response = await axiosInstance.get(endpoint, { headers });
        return response.data;
    } catch (error) {
        // Handle error or throw it to be handled at the component level
        throw error;
    }
};

export const apiPost = async (endpoint, data, token = null) => {
    try {
        const headers = {};

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const response = await axiosInstance.post(endpoint, data, { headers });
        return response.data;
    } catch (error) {
        // Handle error or throw it to be handled at the component level
        throw error;
    }
};


// You can define more methods for other HTTP verbs (PUT, DELETE, etc.) if needed
