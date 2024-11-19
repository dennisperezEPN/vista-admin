import React, {Component} from "react"
import "./ContenedorOpciones.css"

class ContenedorOpciones extends Component {
    render() {
        return (
            /*<div id = 'graficos'>
                <div id="contenedor-pedidos-materiales">
                    <div id="Pedidos">
                        <div>Pedidos finalizados</div>
                        <img src="pedidos.png" alt="pedidos"/>
                    </div>
                    <div id="Materiales">
                        <div>Materiales consumidos</div>
                        <img src="materiales.webp" alt="materiales"/>
                    </div>
                </div>
                <div id="Ventas">
                    <div>Ventas semanales</div>
                    <img src="ventas.png" alt="ventas"/>
                </div>
            </div>8*/

            <div id = "contenedor-pedidos">
                <form id = "contenedor-form" action="/buscar" method="get">
                    <input type="search" name="query" placeholder="Nombre"/>
                    <button type = "submit">Buscar</button>
                </form>
                <div id = "contenedor-boton">
                    <button id = "boton-crear">Crear</button>
                </div>
                <div id = "contenedor-tabla">
                    <table>
                        <thead>
                            <tr>
                                <th>Cliente</th>
                                <th>Técnico</th>
                                <th>Trabajo</th>
                                <th>Estado</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>David Vega</td>
                                <td>David Vega</td>
                                <td>Iniciado</td>
                                <td className="aprobado">Aprobado</td>
                                <td className="actions">
                                    <span className="edit">✏️</span>
                                    <span className="delete">🗑️</span>
                                </td>
                            </tr>
                            <tr>
                                <td>David Vega</td>
                                <td>David Vega</td>
                                <td>Iniciado</td>
                                <td className="aprobado">Aprobado</td>
                                <td className="actions">
                                    <span className="edit">✏️</span>
                                    <span className="delete">🗑️</span>
                                </td>
                            </tr>
                            <tr>
                                <td>David Vega</td>
                                <td>David Vega</td>
                                <td>Iniciado</td>
                                <td className="aprobado">Aprobado</td>
                                <td className="actions">
                                    <span className="edit">✏️</span>
                                    <span className="delete">🗑️</span>
                                </td>
                            </tr>
                            <tr>
                                <td>David Vega</td>
                                <td>David Vega</td>
                                <td>Iniciado</td>
                                <td className="rechazado">Rechazado</td>
                                <td className="actions">
                                    <span className="edit">✏️</span>
                                    <span className="delete">🗑️</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ContenedorOpciones;