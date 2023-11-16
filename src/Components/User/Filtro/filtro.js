import React from 'react';
import { useState } from 'react';
import './filtros.css';
//Importa del manejador de datos JSON aquel que genera la data
import { ListDenunciaUsuario } from './../../../Data/DataListManager';

//Guarda los resultados de ListDenunciaUsuario() en una constante
const data= ListDenunciaUsuario();

const Filtro = () => {
  const [topic, setTopic] = useState(''); // Inicializa el tema en una cadena vacía

  const filteredData = topic ? data.filter(item => item.tipo === topic) : data;

  return (
    <div className='formulario'>
      <select
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      >
        <option value="">Mostrar Todo</option>
        <option value="seguridad">Seguridad</option>
        <option value="transito">Transito</option>
        <option value="infraestructura">Infraestructura</option>
      </select>

      <ul>
        {filteredData.map(item => (
          <li key={item.id}>
            <p>Nombre: {item.nombre}</p>
            <p>Tópico: {item.tipo}</p>
            <p>Tipo: {item.clase}</p>
            <p>Dirección: {item.direccion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filtro;