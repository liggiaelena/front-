import './styles/reset.css';
import Cover from './pages/Cover';
import Home from './pages/Home';
import SingIn from './pages/SingIn';
import SingUp from './pages/SinUp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" exact element = {<Cover />} />
        <Route path = "/home" exact element = {<Home />} />
        <Route path = "/sing-in" exact element = {<SingIn />} />
        <Route path = "/sing-up" exact element = {<SingUp />} />
      </Routes>
    </Router>
  );
}
