import React, { useState } from 'react';
import './filtros.css';

const data = [
  { id: 1, nombre: 'Juan Perez Gonzalez', tipo: 'seguridad', clase: 'Portonazo', direccion: 'Calle Falsa 123' },
  { id: 2, nombre: 'María Isabel Galdame', tipo: 'seguridad', clase: 'Robo de vivienda', direccion: 'MejorPaisDeChile 123' },
  { id: 3, nombre: 'Armando Casas Robustas', tipo: 'transito', clase: 'Semáforo defectuoso', direccion: 'Pyong Yang 444' },
  { id: 4, nombre: 'Pedro Perez Pereira', tipo: 'infraestructura', clase: 'Rayado', direccion: 'LosVTR 003' },
  // Agrega más datos según sea necesario
];

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