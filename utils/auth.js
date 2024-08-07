// utils/auth.js
import api from './api';

export const signup = async (email, password) => {
  return await api.post('/auth/signup', { email, password });
};

export const signin = async (email, password) => {
  return await api.post('/auth/signin', { email, password });
};

export const getMe = async () => {
  return await api.get('/auth/me');
};
