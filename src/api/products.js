import API from "./axios";

export const fetchProductsAPI = () => API.get('/products', { withCredentials: true,});
export const addProductAPI = (product) => API.post('/products', product, { withCredentials: true, });
export const updateProductAPI = (id, product) => API.put(`/products/${id}`, product, { withCredentials: true, });
export const deleteProductAPI = (id) => API.delete(`/products/${id}`);