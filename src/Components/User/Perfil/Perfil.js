import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { ListadoComunas } from "../../../Data/DataListManager";
import fotoDefault from './fotoPersona.png';
import './perfil.css'

const Comunas= ListadoComunas();

const PerfilUsuario=() => {
    const [nombre,setNombre]= useState('Carlos');
    const [direccion,setDireccion]= useState('Los Pacos 69');
    const [comuna,setComuna]= useState('Comuna 1');
    //Efecto que almacena cambios en el perfil
    useEffect(()=>{
        const storedNombre= localStorage.getItem('nombre');
        const storedDireccion= localStorage.getItem('direccion');
        const storedComuna= localStorage.getItem('comuna');
        if(storedNombre) setNombre(storedNombre);
        if(storedDireccion) setDireccion(storedDireccion);
        if(storedComuna) setComuna(storedComuna);
    },[]);
    //Efecto que actualiza los fields del perfil
    const handleNombreChange= (event)=>{
        setNombre(event.target.value);
    };
    const handleDireccionChange= (event)=>{
        setDireccion(event.target.value);
    };
    const handleComunaChange= (event)=>{
        setComuna(event.target.value);
    };
    //Accion de guardado de los parametros
    const handleGuardar=()=>{
        //Guarda el contenido localmente
        localStorage.setItem('nombre',nombre);
        localStorage.setItem('direccion',direccion);
        localStorage.setItem('comuna',comuna);
        //Fuerza un refresh de la pagina
        window.location.reload();
    };
    return(
        <div className="Perfil">
            <h1>Perfil del Usuario</h1>
            <div className="FotoPerfil">
                <img src={fotoDefault} alt="fotoPerfil" className="fotoPerfil"/>
            </div>
            <div className="DatosUsuario">
                <ul>
                    <li>
                        <FormControl fullWidth>
                            <TextField
                                id="nombre-label" 
                                label="Nombre Completo:"
                                variant="outlined"
                                value={nombre}
                                onChange={handleNombreChange}
                            />
                        </FormControl>
                    </li>
                    <li>
                        <FormControl fullWidth>
                            <TextField
                                id="ubicacion-label" 
                                label="Direccion:"
                                variant="outlined"
                                value={direccion}
                                onChange={handleDireccionChange}
                            />
                        </FormControl>
                    </li>
                    <li>
                        <FormControl fullWidth>
                            <InputLabel id="comuna-label">Comuna:</InputLabel>
                            <Select
                                labelId="comuna-label"
                                id="comuna"
                                value={comuna}
                                label="comuna"
                                onChange={handleComunaChange}
                            >
                            {Comunas.map(item=>(
                                    <MenuItem key={item.key} value={item.nombre}>
                                        {item.nombre}
                                    </MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                    </li>
                </ul>
            </div>
            <Button variant="contained" component={Link} to='/User/App/Perfil' onClick={handleGuardar}>
                Guardar
            </Button>
        </div>
    );
}

export default PerfilUsuario;