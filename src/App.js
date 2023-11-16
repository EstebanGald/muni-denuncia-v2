import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Importa la barra de navegacion
import NavigationBar from './Components/Navbar';
//Vistas sobre Acceso a la app
import Login from './Components/Access/Login';
import Registro from './Components/Access/Registro';
//Vistas sobre funcionalidades de la app para usuario
import ViewMenu from './Components/User/Menu/Menu';
import Filtro from './Components/User/Filtro/filtro';
import Formulario from './Components/User/GenerarDenuncias/Formulario';
import PerfilUsuario from './Components/User/Perfil/Perfil';
//Vistas sobre funcionalidades de la app para admin
import ListadoDenuncias from './Components/Admin/ListaDenuncias/ListaDenuncias';
import ListadoUsuarios from './Components/Admin/ListaUsuarios/ListaUsuarios';
import Estadisticas from './Components/User/Estadisticas';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavigationBar/>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/User/login" element={<Login/>}/>
            <Route path="/User/Register" element={<Registro/>}/>
            <Route path="/User/App" element={<ViewMenu/>}/>
            <Route path="/User/App/Mapa" element={<ViewMenu/>}/>
            <Route path="/User/App/Filtro" element={<Filtro/>}/>
            <Route path="/User/App/Generar" element={<Formulario/>}/>
            <Route path="/User/App/Perfil" element={<PerfilUsuario/>}/>
            <Route path="/Admin/login" element={<Login/>}/>
            <Route path="/Admin/App" element={<ListadoDenuncias/>}/>
            <Route path="/Admin/App/Denuncias" element={<ListadoDenuncias/>}/>
            <Route path="/Admin/App/Users" element={<ListadoUsuarios/>}/>
            <Route path="/User/App/Estadisticas" element={<Estadisticas/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
