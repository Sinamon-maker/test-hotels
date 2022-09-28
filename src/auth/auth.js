import axios from "axios";

export const URL = "http://188.225.83.80:6719/";

const auth = "api/v1/auth/login";

 function login(data) {
  console.log('data', data)
  const response = axios.post(URL+auth, data);

  return response;
}

export default login


