import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login/Login';
import Registro from './login/Registro';
import MenuPrincipal from './menu-principal/MenuPrincipal';
import NavigationBar from './NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
        <NavigationBar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path= "/login/Registro" element={<Registro />} />
            <Route path="/menu-principal/MenuPrincipal" element={<MenuPrincipal />} />
          </Routes>
        </div>
        </Router>
    </div>
  );
}

export default App;
