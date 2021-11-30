import axios from 'axios';

const URL = 'https://gratibox-liggiaelena.herokuapp.com';

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

function postDelivery(body){
  const promise = axios.post(`${URL}/delivery-days`, body);
  return promise;
}

function postSubscription(token, body){
  const config = createHeaders(token);
  const promise = axios.post(`${URL}/subscriptions`, body, config);
  return promise;
}

function postSubscribe(token, body){
  const config = createHeaders(token);
  const promise = axios.post(`${URL}/subscribe`, body, config);
  return promise;
}

function getStates(){
  const promise = axios.get(`${URL}/states`);
  return promise;
}

export{
    postSingUp,
    postLogIn,
    getSubscriptions,
    postDelivery,
    postSubscription,
    postSubscribe,
    getStates,
}