import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import fotoDefault from './fotoPersona.png';

const PerfilUsuario=() => {
    return(
        <div>
            <h1>Perfil del Usuario</h1>
            <img src={fotoDefault} alt="fotoPerfil" className="fotoPerfil"/>
            <div className="Datos Usuario">
                Nombre:
                <TextField
                    id="outlined-search" 
                    label="nombre completo:" 
                    type="search" 
                />
                Residencia:
                <TextField
                    id="outlined-search" 
                    label="Residencia:" 
                    type="search" 
                />
            </div>
            <Button variant="contained" component={Link} to='/User/App/Mapa'>
                Guardar
            </Button>
        </div>
    );
}

export default PerfilUsuario;