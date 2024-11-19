import React, {useState} from 'react';
import Buton from './Components/Buton'
import Input from './Components/Input'
import './ActualizarPedido.css'

const ActualizarPedido = ({ onClose, onUpdate, initialData }) => {

    const [formData, setFormData] = useState({
        /* cliente: initialData.cliente || "",
        tecnico: initialData.tecnico || "",
        trabajo: initialData.trabajo || "",
        estado: initialData.estado || "", */
        
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(formData); // Pasar los datos actualizados al padre
        onClose(); // Cerrar el modal o componente
      };

    return(
        <div className = 'contenedor-actualizar-pedidos'>
            <div className = 'contenido-actualizar-pedidos'>
                <h3>Actualizar Pedido</h3>
                <form onSubmit={handleSubmit}>
                    <div className = 'campos'>
                        <label>Cliente:</label>
                        <Input name='cliente'></Input>
                    </div >
                    <div className = 'campos'>
                        <label>Técnico:</label>
                        <select name="tecnico">
                            <option value="Bryan">Bryan</option>
                            <option value="David">David</option>
                            <option value="Dennis">Dennis</option>
                        </select>
                    </div>
                    <div className = 'campos'>
                        <label>Trabajo:</label>
                        <Input name='trabajo'></Input>
                    </div>
                    <div className = 'campos'>
                        <label>Estado:</label>
                        <select 
                            name="estado"
                            value={formData.estado}
                            onChange={handleChange}
                        >
                            <option value="Aprobado">Aprobado</option>
                            <option value="Rechazado">Rechazado</option>
                            <option value="Pendiente">Pendiente</option>
                        </select>
                    </div>
                    <div className = 'campos-btn'>
                        <Buton texto="Actualizar" type="submit" estilo="Buton"></Buton>
                        <Buton texto="Cancelar" type="button" estilo="Buton" onclick={onClose}></Buton>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ActualizarPedido;