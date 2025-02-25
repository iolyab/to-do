import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/header/Header';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Main from './components/main/Main';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';

const App = () => (
<Router>
  <>
  <Header />
  <Nav />
  <Footer />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </>
</Router>
);

export default App;
