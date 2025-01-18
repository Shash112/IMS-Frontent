import API from "./axios";

export const getBranchesAPI = () => API.get('/stores', { withCredentials: true, });
export const createBranchesAPI = (store) => API.post('/stores', store, { withCredentials: true, });