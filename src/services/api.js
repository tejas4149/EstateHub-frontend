import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const propertyAPI = {
  // Get all properties with filters
  getAll: async (filters = {}) => {
    const params = new URLSearchParams(filters);
    const response = await axios.get(`${API_BASE_URL}/properties?${params}`);
    return response.data;
  },

  // Get single property
  getById: async (id) => {
    const response = await axios.get(`${API_BASE_URL}/properties/${id}`);
    return response.data;
  },

  // Create property
  create: async (propertyData) => {
    const response = await axios.post(`${API_BASE_URL}/properties`, propertyData);
    return response.data;
  },

  // Update property
  update: async (id, propertyData) => {
    const response = await axios.put(`${API_BASE_URL}/properties/${id}`, propertyData);
    return response.data;
  },

  // Delete property
  delete: async (id) => {
    const response = await axios.delete(`${API_BASE_URL}/properties/${id}`);
    return response.data;
  }
};

// Format currency
export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(price);
};