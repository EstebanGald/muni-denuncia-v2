import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import './loginStyles.css';

const Login = () => {

    const [registerButton, setregisterButton] = useState("");

    const handleButtonClick = () => {
      setregisterButton("Registro");
    }
    return ( <>
    { registerButton !== "Registro" && 
    <div className='login'>
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
        <Button variant="contained" component={Link} to='/menu-principal/MenuPrincipal'>
            Login
        </Button>
        <div>No tienes cuenta? <Button  onClick={handleButtonClick} variant="text">Regístrate</Button></div>
    </div>}
    { registerButton === "Registro" && 
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
    <Button variant="contained" component={Link} to='/menu-principal/MenuPrincipal'>
        Registrarse
    </Button>
    </div>}
    </>
    )
}

export default Login;

//<div>No tienes cuenta? <Button  component={Link} to='/login/Registro' variant="text">Regístrate</Button></div>