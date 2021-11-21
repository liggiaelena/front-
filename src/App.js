import './styles/reset.css';
import Cover from './pages/Cover';
import Home from './pages/Home';
import SingIn from './pages/SingIn';
import SingUp from './pages/SinUp';
import SubscribePlan from './pages/SubscribePlan';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from 'react';
import UserContext from './context/UserContext';
import SubscribeDelivery from './pages/SubscribeDelivery';
import Plan from './pages/Plan';

export default function App() {
  const [user, setUser] = useState({});

  return (
  <UserContext.Provider value={{ user, setUser }}>
    <Router>
      <Routes>
        <Route path = "/" exact element = {<Cover />} />
        <Route path = "/home" exact element = {<Home />} />
        <Route path = "/sing-in" exact element = {<SingIn />} />
        <Route path = "/sing-up" exact element = {<SingUp />} />
        <Route path = "/subscribe" exact element = {<SubscribePlan />} />
        <Route path = "/subscribe-delivery" exact element = {<SubscribeDelivery />} />
        <Route path = "/plan" exact element = {<Plan />} />
      </Routes>
    </Router>
  </UserContext.Provider>
  );
}
