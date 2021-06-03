import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://my-react-burger-7e899-default-rtdb.firebaseio.com/',
});

export default instance;
