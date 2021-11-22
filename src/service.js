import axios from 'axios';

const URL = 'http://localhost:5000';

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

function getSubscriptions(token){
  const config = createHeaders(token);
  const promise = axios.get(`${URL}/subscriptions`, config)
  return promise;
}

export{
    postSingUp,
    postLogIn,
    getSubscriptions
}