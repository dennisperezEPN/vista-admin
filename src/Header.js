import React, {Component} from "react"
import "./Header.css"

class Header extends Component {
    render() {
        return (
            <header>
                <form action="/buscar" method="get">
                    <input type="search" name="query" placeholder="Buscar"/>
                </form>
                <div id="bienvenida">Bienvenido Administrador</div>
            </header>
        );
    }
}

export default Header;