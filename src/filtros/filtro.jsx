import React, { useState } from 'react';

const data = [
  { id: 1, nombre: 'Denuncia 1', tipo: 'seguridad', clase: 'A' },
  { id: 2, nombre: 'Denuncia 2', tipo: 'seguridad', clase: 'B' },
  { id: 3, nombre: 'Denuncia 3', tipo: 'transito', clase: 'C' },
  { id: 4, nombre: 'Denuncia 4', tipo: 'infraestructura', clase: 'D' },
  // Agrega más datos según sea necesario
];

const Filtro = () => {
  const [topic, setTopic] = useState(''); // Inicializa el tema en una cadena vacía

  const filteredData = topic ? data.filter(item => item.tipo === topic) : data;

  return (
    <div>
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
            <p>Tipo: {item.tipo}</p>
            <p>Clase: {item.clase}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filtro;