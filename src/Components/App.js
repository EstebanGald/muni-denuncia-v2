import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Importa la barra de navegacion
import NavigationBar from './Navbar';
//Vistas sobre Acceso a la app
import Login from './Access/Login';
import Registro from './Access/Registro';
//Vistas sobre funcionalidades de la app para usuario
import ViewMenu from './User/Menu/Menu';
import Filtro from './User/Filtro/filtro';
import Formulario from './User/GenerarDenuncias/Formulario';
import PerfilUsuario from './User/Perfil/Perfil';
//Vistas sobre funcionalidades de la app para admin
import ListadoDenuncias from './Admin/ListaDenuncias/ListaDenuncias';
import ListadoUsuarios from './Admin/ListaUsuarios/ListaUsuarios';


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
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
