import React from 'react';
import { useState } from 'react';
import './filtros.css';
//Importa del manejador de datos JSON aquel que genera la data
import { ListDenunciaUsuario } from './../../../Data/DataListManager';

//Guarda los resultados de ListDenunciaUsuario() en una constante
const data= ListDenunciaUsuario();

const ColorEstado = (estado) => {
  switch (estado) {
    case 'Completada':
      return 'green'; 
    case 'En Curso':
      return 'orange';
    case 'En Espera':
      return 'red';
    default:
      return 'black';
  }
};


const IconoEstado = (estado) => {
  switch (estado) {
    case 'Completada':
      return '✔️'; 
    case 'En Curso':
      return '⚠️';
    case 'En Espera':
      return '❌';
    default:
      return '';
  }
};

const Filtro = () => {
  const [topic, setTopic] = useState(''); // Inicializa el tema en una cadena vacía

  const filteredData = topic ? data.filter(item => item.tipo.toLowerCase() === topic.toLowerCase()) : data;

  console.log('topic:', topic);
  console.log('filteredData:', filteredData);


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
  
      <table>
        <thead>
          <tr>
            <th>Nombre Denunciante</th>
            <th>Tema Denuncia</th>
            <th>Carácter Denuncia</th>
            <th>Ubicación</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.id}>
              <td>{item.nombre}</td>
              <td>{item.tipo}</td>
              <td>{item.clase}</td>
              <td>{item.direccion}</td>
              <td>
                <span style={{ color: ColorEstado(item.Estado) }}>
                  {IconoEstado(item.Estado)}
                  {item.Estado}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Filtro;
