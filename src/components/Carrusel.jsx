import './Carrusel.css';
import FabricaInteriorVidrios from "./images/FabricaInteriorVidrios.jpeg"
import FabricaInterior from "./images/FabricaInterior.jpeg"
import MaquinaDVH from "./images/MaquinaDVH.jpeg"
import MaquinaDVH2 from "./images/MaquinaDVH2.jpeg"

function Trabajos() {
    return (
        <>

            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                </div>
                <div class="carousel-inner">

                    <div class="carousel-item active">
                        <img className='' src={FabricaInteriorVidrios} alt="" />
                        <div class="carrusel-texto">
                        <h1><p class="carrusel-titulo">Titulo</p></h1>
                            <p id="VidriosInterior" class="texto-Inicio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac interdum mi. In ullamcorper libero sem, vel malesuada erat efficitur et. Nam pellentesque quis dui in pellentesque. Suspendisse at massa orci.
                             Curabitur laoreet dapibus porta. Vivamus elit lectus, maximus in odio a, feugiat venenatis massa. Nam ultricies nisi quam, vel tristique ante ullamcorper id. Donec vel massa est. In scelerisque viverra augue, quis ultrices nisi faucibus ac. Proin auctor ullamcorper consectetur.</p>
                        </div>  
                    </div>

                    <div class="carousel-item">
                        <img className='' src={MaquinaDVH} alt="" />
                        <h1><p class="carrusel-titulo">Titulo</p></h1>
                        <p id="MaquinaDVH1" class="texto-inicio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac interdum mi. In ullamcorper libero sem, vel malesuada erat efficitur et.</p>
                    </div>

                    <div class="carousel-item">
                        <img className='' src={FabricaInterior} alt="" />
                        <h1><p class="carrusel-titulo">Titulo</p></h1>
                        <p id="Fabrica" class="texto-inicio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac interdum mi. In ullamcorper libero sem, vel malesuada erat efficitur et. Nam pellentesque quis dui in pellentesque. Suspendisse at massa orci.
                             Curabitur laoreet dapibus porta. Vivamus elit lectus.</p>
                    </div>
                    
                    <div class="carousel-item">
                        <img className='' src={MaquinaDVH2} alt="" />
                        <h1><p class="carrusel-titulo">Titulo</p></h1>
                        <p id="MaquinaDVHRoja" class="texto-inicio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac interdum mi. In ullamcorper libero sem, vel malesuada erat efficitur et. Nam pellentesque quis dui in pellentesque. Suspendisse at massa orci.
                             Curabitur laoreet dapibus porta. Vivamus elit lectus.</p>
                    </div>

                    <div class="carousel-item">
                        
                        <h1><p class="carrusel-titulo">Titulo</p></h1>
                        <p id="" class="texto-inicio"></p>
                    </div>

                    <div class="carousel-item">
                        
                        <h1><p class="carrusel-titulo">Titulo</p></h1>
                        <p id="" class="texto-inicio"></p>
                    </div>

                    <div class="carousel-item">
                        
                        <h1><p class="carrusel-titulo">Titulo</p></h1>
                        <p id="" class="texto-inicio"></p>
                    </div>
                </div>  

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
                </button>
            </div>

        </>
  );
}

export default Trabajos;