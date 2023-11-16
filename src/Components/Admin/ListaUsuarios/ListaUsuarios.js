import React from 'react';
import { EstadisticasDelUsuario } from "../../../Data/DataListManager";
import './listUsuarios.css';

const data= EstadisticasDelUsuario();

const ListadoUsuarios=() =>{
    return(
        <div className="ListaUsuarios">
            <h1>Listado de Usuarios</h1>
            <div className="Contenido">
                <table>
                    <thead>
                        <th>Nombre:</th>
                        <th>Cantidad de Denuncias:</th>
                        <th>Denuncias por Tipo:</th>
                        <th>Denuncias por Clase:</th>
                        <th>Tipo de Denuncia mas usual:</th>
                        <th>Clase de Denuncia mas usual:</th>
                    </thead>
                    <tbody>
                        {Object.entries(data).map(([key,value])=>(
                            <tr key={key}>
                                <td>{value.Nombre}</td>
                                <td>{value.cantidadDenuncias}</td>
                                <td>
                                    <div className="Tipos">
                                        {Object.entries(value.DenunciasPorTipo).map(([kTipos,tipos])=>(
                                            <ul>
                                                <li key={kTipos}> 
                                                    <small>{tipos[0]} : {tipos[1]}</small>
                                                </li>
                                            </ul>
                                        ))}
                                    </div>
                                </td>
                                <td>
                                    <div className="Clases">
                                        {Object.entries(value.DenunciasPorClase).map(([kClase,clase])=>(
                                            <ul>
                                                <li key={kClase}> 
                                                    <small>{clase[0]} : {clase[1]}</small>
                                                </li>
                                            </ul>
                                        ))}
                                    </div>
                                </td>
                                <td>{value.MayorTipoDeDenuncia[0]}:{value.MayorTipoDeDenuncia[1]}</td>
                                <td>{value.MayorClaseDeDenuncia[0]}:{value.MayorClaseDeDenuncia[1]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListadoUsuarios;