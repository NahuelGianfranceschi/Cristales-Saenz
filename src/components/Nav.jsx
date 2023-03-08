import './Nav.css';

function Navbar() {
    return (
        <>
            <div className="NavContainer">

             <h1>Cristales Saenz</h1>

                <ul class="navegacion">
                        <li> <a> Inicio </a> </li>
                        <li> <a> Sobre Nosotros </a> </li>
                        <li> <a> Productos </a> </li>
                        <li> <a> Contacto </a> </li>
                </ul>
            </div>
        </>
  );
}

export default Navbar;
