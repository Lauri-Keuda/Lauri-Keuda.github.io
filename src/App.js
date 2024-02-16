import './Style.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Something from './pages/Something';
import Discordbot from './pages/Discordbot';
import Blender from './pages/Blender';
import Projects from './components/Projects';
import ScrollToTop from './components/ScrollToTop';
import RedirectToFlappyBird from './components/RedirectToFlappyBird';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" exact Component={HomePage} />
          <Route path="/contact" Component={ContactPage} />
          <Route path='/something' Component={Something} />
          <Route path='/discordbot' Component={Discordbot} />
          <Route path='/blender' Component={Blender} />
          <Route path='/test' Component={Projects} />
          <Route path='/game' Component={RedirectToFlappyBird} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
