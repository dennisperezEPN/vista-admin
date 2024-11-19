import React, {Component} from "react"
import Header from "./Header";
import ContenedorOpciones from "./ContenedorOpciones";
import "./ContenedorSecundario.css"


class ContenedorSecundario extends Component {
    render() {
        return (
            <div id = "contenedor-secundario"> 
                <Header></Header>
                <ContenedorOpciones></ContenedorOpciones>
            </div>
        );
    }
}

export default ContenedorSecundario;