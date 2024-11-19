import React, { Component } from "react";
import Buton from './Components/Buton'
import Input from './Components/Input'
import './CrearPedido.css'

const CrearPedido = ({isOpen, onClose, onCreate}) => {
    //if (!isOpen) return null; // No renderiza si no esta abierto

    return(
        <div className = 'contenedor-pedidos'>
            <div className = 'contenido-pedidos'>
                <h3>Crear Pedido</h3>
                <form onSubmit={onCreate}>
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
                        <select name="estado">
                            <option value="Aprobado">Aprobado</option>
                            <option value="Rechazado">Rechazado</option>
                            <option value="Pendiente">Pendiente</option>
                        </select>
                    </div>
                    <div className = 'campos-btn'>
                        <Buton texto="Crear" type="submit" estilo="Buton"></Buton>
                        <Buton texto="Cancelar" type="button" estilo="Buton" onclick={onClose}></Buton>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CrearPedido;