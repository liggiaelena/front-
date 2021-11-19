import axios from 'axios';

const URL = 'http://localhost:4000';

function createHeaders(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function postSingUp(body){
  const promise = axios.post(`${URL}/sing-up`, body);
  return promise;
}

function postLogIn(body){
  const promise = axios.post(`${URL}/sing-in`, body);
  return promise;
}

export{
    postSingUp,
    postLogIn,
}