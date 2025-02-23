import './App.css';
import Header from './pages/Header';
import Main from './pages/Main';
import Nav from './pages/Nav';
import Footer from './pages/Footer';

function App() {
  return (
    <div className='container'>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
