
import axios from 'axios';
export const getProduct = async (product) => await axios.get(`http://127.0.0.1:8000/api/products/${product}`)
