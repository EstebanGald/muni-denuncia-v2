import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import './form.css';
const Formulario = () => {

    const { register, formState: { errors }, watch, handleSubmit } = useForm({
        defaultValues: {
            nombre: 'Nombre completo...',
            direccion: 'Inserte direccion...'
        }
    });

    const onSubmit = (data) => {
        console.log(data);
        alert("La denuncia se ha creado correctamente.");

        console.log(Denuncia);

        window.location.href = "http://localhost:3000/menu-principal/MenuPrincipal";
    }


    const incluirComentarios = watch('incluirComentarios');
    const [Denuncia, setDenuncia] = useState('seguridad');
    
    
    const handleDenunciaChange = (e) => {
        setDenuncia(e.target.value);
      };


    const inputStyle = {
        width: "800px",
        height: "100px"
      };


    return (
       <div className="form-container">
        <h2>Nueva Denuncia</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Nombre</label>
                <input type="text" {...register('nombre', {
                    required: true,
                    maxLength: 50
                })} />
                {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
                {errors.nombre?.type === 'maxLength' && <p>El campo nombre debe tener menos de 50 caracteres</p>}
            </div>
            <div>
                <label>Dirección </label>
                <input type="text" {...register('direccion', {
                    required: true
                })} />
                {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
            </div>
            <div>
                <label>Topico denuncia  </label>
                <select {...register('Denuncia')}
                    value={Denuncia}
                    onChange={handleDenunciaChange}
                >
                    <option value="seguridad">Seguridad</option>
                    <option value="transito">Transito</option>
                    <option value="infraestructura">Infraestructura</option>
                </select>
            </div>
            {Denuncia === 'seguridad' && (
                    <div>
                        <label>Tipo </label>
                        <select {...register('tipo')}>
                            <option value="RV">Robo a vivienda</option>
                            <option value="AS">Asalto</option>
                            <option value="POR">Portonazo</option>
                        </select>
                    </div>
                )}
            {Denuncia === 'transito' && (
                    <div>
                        <label>Tipo </label>
                        <select {...register('tipo')}>
                            <option value="SD">Semaforo defectuoso</option>
                            <option value="AC">Accidente</option>
                            <option value="CON">Congestion</option>
                        </select>
                    </div>
                )}
            {Denuncia === 'infraestructura' && (
                    <div>
                        <label>Tipo </label>
                        <select {...register('tipo')}>
                            <option value="LA">Luz apagada</option>
                            <option value="RY">Rayados</option>
                            <option value="BA">Baches</option>
                        </select>
                    </div>
                )}
            <div>
                <label>Comentarios Adicionales</label>
                <input type="checkbox" {...register('incluirComentarios')} />
            </div>
            {incluirComentarios && (
                <div>
                    <label></label>
                    <input type="text" {...register('comentario')} style={inputStyle} />
                </div>
            )}
            <input type="submit" value="Enviar" />
        </form>
    </div>
    );
}

export default Formulario;
