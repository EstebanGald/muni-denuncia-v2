import { EstadisticasPorDenuncia } from "../../../Data/DataListManager";

const data= EstadisticasPorDenuncia();

const ListadoDenuncias=() => {
    //console.log("data: ",data);
    return(
        <div>
            <ul>
                {Object.entries(data).map(([key,value])=>(
                    <li key={key}>
                        <p>Publicador: {value.Publicador}</p>
                        <p>Tipo: {value.Tipo}</p>
                        <p>Clase: {value.Clase}</p>
                        <p>Ubicacion: {value.Direccion}</p>
                        <p>Estado: {value.Estado}</p>
                    </li>
                ))}

            </ul>
        </div>
    );
}

export default ListadoDenuncias;