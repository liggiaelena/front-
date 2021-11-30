import './styles/reset.css';
import Cover from './pages/Cover';
import Subscribe from './pages/Subscribe';
import SingIn from './pages/SingIn';
import SingUp from './pages/SinUp';
import SubscribePlan from './pages/SubscribePlan';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from 'react';
import UserContext from './context/UserContext';
import SubscribeDelivery from './pages/SubscribeDelivery';
import Home from './pages/Home';

export default function App() {
  const [user, setUser] = useState(JSON.parse(window.localStorage.getItem('user')) || {});
  const [subscriptionsInfo, setSubscriptionsInfo] = useState(JSON.parse(window.localStorage.getItem('SubscriptionsInfo')) || {});

  return (
  <UserContext.Provider value={{ user, setUser }}>
    <Router>
      <Routes>
        <Route path = "/" exact element = {<Cover />} />
        <Route path = "/subscribe" exact element = {<Subscribe />} />
        <Route path = "/sing-in" exact element = {<SingIn />} />
        <Route path = "/sing-up" exact element = {<SingUp />} />
        <Route path = "/subscribe" exact element = {<SubscribePlan />} />
        <Route path = "/subscribe-delivery" exact element = {<SubscribeDelivery />} />
        <Route path = "/home" exact element = {<Home subscriptionsInfo={subscriptionsInfo} setSubscriptionsInfo={setSubscriptionsInfo}/>} />
      </Routes>
    </Router>
  </UserContext.Provider>
  );
}
