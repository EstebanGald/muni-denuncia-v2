import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import "./NavBarStyles.css";

//Barra de navegacion para el usuario en login
const NavLoginUsuario= () => (
    <nav>
        <ul>
            <li>
                <div>Muni-denuncias</div>
            </li>
            <li className='navMenuPrincipal'>
                <Button variant="contained" component={Link} to='/Admin/login'>
                    Login Admin
                </Button>
                <Button variant="contained" component={Link} to='/User/Register'>
                    Registro Usuario
                </Button>
            </li>
        </ul>
    </nav>
);

//Barra de navegacion para el usuario en registro
const NavRegisterUsuario= () => (
    <nav>
        <ul>
            <li>
                <div>Muni-denuncias</div>
            </li>
            <li className='navMenuPrincipal'>
                <Button variant="contained" component={Link} to='/User/login'>
                    Login Usuario
                </Button>
                <Button variant="contained" component={Link} to='/Admin/login'>
                    Login Admin
                </Button>
            </li>
        </ul>
    </nav>
);

//Barra de navegacion para el administrador en login
const NavLoginAdmin= () => (
    <nav>
        <ul>
            <li>
                <div>Muni-denuncias</div>
            </li>
            <li className='navMenuPrincipal'>
                <Button variant="contained" component={Link} to='/User/login'>
                    Login Usuario
                </Button>
                <Button variant="contained" component={Link} to='/User/Register'>
                    Registro Usuario
                </Button>
            </li>
        </ul>
    </nav>
);

//Barra de navegacion para funcionalidades del usuario
const NavFunctionUser=() => (
    <nav>
        <ul>
            <li>
                <div>Muni-denuncias</div>
            </li>
            <li className='navMenuPrincipal'>
                <Button variant="contained" component={Link} to='/User/App/Mapa'>
                    Mapa
                </Button>
                <Button variant="contained" component={Link} to='/User/App/Filtro'>
                    Ver Denuncias
                </Button>
                <Button variant="contained" component={Link} to='/User/App/Generar'>
                    Generar Denuncia
                </Button>
                <Button variant="contained" component={Link} to='/User/App/Perfil'>
                    Editar Perfil
                </Button>
                <Button variant="contained" component={Link} to='/'>
                    Logout
                </Button>
            </li>
        </ul>
    </nav>
);

//Barra de navegacion para funcionalidades del admin
const NavFunctionAdmin=() => (
    <nav>
        <ul>
            <li>
                <div>Muni-denuncias</div>
            </li>
            <li className='navMenuPrincipal'>
                <Button variant="contained" component={Link} to='/Admin/App/Denuncias'>
                    Listado Denuncias
                </Button>
                <Button variant="contained" component={Link} to='/Admin/App/Users'>
                    Ver Usuarios
                </Button>
                <Button variant="contained" component={Link} to='/'>
                    Logout
                </Button>
            </li>
        </ul>
    </nav>
);

//La barra de navegacion que finalmente se renderizara en la pantalla
const NavigationBar=() => {
    //console.log("Selecting navigation bar");
    //const path= useLocation().pathname;
    //console.log("Navigator: Current path is ",path);
    const NavbarToRender=() => {
        switch(useLocation().pathname){
            case '/User/login':
                //console.log("Navigator: Selected User Login");
                return <NavLoginUsuario />;
            case '/User/Register':
                //console.log("Navigator: Selected User Register");
                return <NavRegisterUsuario />;
            case '/User/App':
                //console.log("Navigator: Selected User Functions Map default");
                return <NavFunctionUser />;
            case '/User/App/Mapa':
                //console.log("Navigator: Selected User Functions Map");
                return <NavFunctionUser />;
            case '/User/App/Filtro':
                //console.log("Navigator: Selected User Functions filtro");
                return <NavFunctionUser />;
            case '/User/App/Generar':
                //console.log("Navigator: Selected User Functions Generar Denuncia");
                return <NavFunctionUser />;
            case '/User/App/Perfil':
                //console.log("Navigator: Selected User Functions Perfil");
                return <NavFunctionUser />;
            case '/Admin/login':
                //console.log("Navigator: Selected Admin Login");
                return <NavLoginAdmin />;
            case '/Admin/App':
                //console.log("Navigator: Selected Admin functions ver denuncias by default");
                return <NavFunctionAdmin />;
            case '/Admin/App/Denuncias':
                //console.log("Navigator: Selected Admin functions ver denuncias");
                return <NavFunctionAdmin />;
            case '/Admin/App/Users':
                //console.log("Navigator: Selected Admin functions ver usuarios");
                return <NavFunctionAdmin />;
            default:
                //console.log("Navigator: Selected User Login as Default");
                return <NavLoginUsuario />;
        }
    };
    return(
        <div>
            { NavbarToRender() }
        </div>
    );
};

export default NavigationBar;