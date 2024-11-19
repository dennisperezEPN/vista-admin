import ColumnaOpciones from './ColumnaOpciones';
import ContenedorSecundario from './ContenedorSecundario';
import Footer from './Footer';
import CrearPedido from './CrearPedido';
import ActualizarPedido from './ActualizarPedido';

import './App.css';

function App() {
  return (
    /* Vista administrador */
    <div className="App">
      <div id = "contenedor">
        <ColumnaOpciones></ColumnaOpciones>
        <ContenedorSecundario></ContenedorSecundario>
      </div>
      <Footer></Footer>
    </div>

      /* Vistas Pedidos */
    /* <CrearPedido></CrearPedido> */
    /* <ActualizarPedido></ActualizarPedido> */
    
  );
}

export default App;
