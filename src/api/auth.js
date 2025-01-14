import API from "./axios";

export const checkAuthAPI = () => API.get('/auth/verify', { withCredentials: true });
export const loginAPI = (credentials) => API.post('/auth/login', credentials); 
export const signupAPI = (userData) => API.post('/auth/signup', userData); 
export const forgotPasswordAPI = (email) => API.post('/auth/forgot-password', { email }); 