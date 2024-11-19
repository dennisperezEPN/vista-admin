import React, {Component} from "react"
import "./ColumnaOpciones.css"

class ColumnaOpciones extends Component {
    render() {
        return(
            <div id="columna-opciones">
                <ul>
                    <li><a href="#">Usuarios</a></li>
                    <li><a href="#">Pedidos</a></li>
                    <li><a href="#">Facturación</a></li>
                </ul>
            </div>
        );
    }
}

export default ColumnaOpciones;