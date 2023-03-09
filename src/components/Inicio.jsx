import './Inicio.css';
import Trabajos from "./Carrusel";

function Presentacion() {
    return (
        <>
            <div className='Inicio'>
                <h2 className='TituloInicio'> Nuestros Trabajos </h2>

                <Trabajos/>
                

            </div>
        </>
  );
}

export default Presentacion;