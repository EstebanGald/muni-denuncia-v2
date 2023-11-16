import React from 'react';
import { EstadisticasPorDenuncia } from "../../../Data/DataListManager";
import './listDenuncias.css';

const data= EstadisticasPorDenuncia();

const ListadoDenuncias=() => {
    return(
        <div className="ListaDenuncias">
            <h1>Listado de Denuncias</h1>
            <div className="Contenido">
                <table>
                    <thead>
                        <tr>
                            <th>Publicador:</th>
                            <th>Tipo:</th>
                            <th>Clase:</th>
                            <th>Ubicacion:</th>
                            <th>Estado:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(data).map(([key,value])=>(
                            <tr key={key}>
                                <td>{value.Publicador}</td>
                                <td>{value.Tipo}</td>
                                <td>{value.Clase}</td>
                                <td>{value.Direccion}</td>
                                <td>{value.Estado}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListadoDenuncias;