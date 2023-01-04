
import axios from 'axios';
export const getAllProducts = async () => await axios.get('http://127.0.0.1:8000/api/products/')
