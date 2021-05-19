import axios from 'axios';

const url = 'http://localhost:5000/products';

export const fetchProducts = () => axios.get(url);
export const fetchProduct = (id) => axios.get(`${url}/${id}`);
