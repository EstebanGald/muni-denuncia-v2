import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './loginStyles.css';

//Vista asociada al proceso de logeo
const Registro = () => {
  return(
    <div className='registro'>
      <TextField
          id="outlined-search" 
          label="nombre de usuario" 
          type="search" 
      />
      <TextField
        id="outlined-password-input"
        label="ingrese contraseña"
        type="password"
        autoComplete="current-password"
      />
      <Button variant="contained" component={Link} to='/User/App'>
          Registrarse
      </Button>
    </div>
  );
}

export default Registro;