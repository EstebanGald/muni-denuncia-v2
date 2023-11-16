//import React from 'react';
//import { useState } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './loginStyles.css';

//Vista asociada al proceso de logeo
const Login = () => {
  return(
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
        {useLocation().pathname.includes('Admin') &&
          <Button variant="contained" component={Link} to='/Admin/App'>
            Login
          </Button>
        }{!useLocation().pathname.includes('Admin') &&
          <Button variant="contained" component={Link} to='/User/App'>
            Login
          </Button>
        }{!useLocation().pathname.includes('Admin') &&
          <div>
            No tienes Cuenta?
            <Button variant="contained" component={Link} to='/User/Register'>
              Registrarse
            </Button>
          </div>
        }
    </div>
  );
}

export default Login;