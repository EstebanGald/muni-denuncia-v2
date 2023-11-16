//Importa datos que almacenan las estadisticas de los usuarios en el sistema
import { EstadisticasDelUsuario } from "../../../Data/DataListManager";

const data= EstadisticasDelUsuario();

const ListadoUsuarios=() =>{
    //console.log("data: ",data);
    return(
        <div>
            <ul>
                {Object.entries(data).map(([key,value]) => (
                    <li key={key}> 
                        <p>Nombre: {value.Nombre}</p>
                        <p>Cantidad de Denuncias: {value.cantidadDenuncias}</p>
                        <ul>
                            <p>Denuncias por Tipo:</p>
                            {Object.entries(value.DenunciasPorTipo).map(([kTipos,tipos])=>(
                                <li key={kTipos}> 
                                    <p>{tipos[0]} : {tipos[1]}</p>
                                </li>
                            ))}
                        </ul>
                        <ul>
                            <p>Denuncias por Clase:</p>
                            {Object.entries(value.DenunciasPorClase).map(([kClase,clase])=>(
                                <li key={kClase}> 
                                    <p>{clase[0]} : {clase[1]}</p>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListadoUsuarios;