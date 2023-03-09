import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import "./Carrusel.css";
import FabricaInterior from "./images/FabricaInterior.jpeg";
import FabricaInteriorVidrios from "./images/FabricaInteriorVidrios.jpeg";
import MaquinaDVH from "./images/MaquinaDVH.jpeg";
import MaquinaDVH2 from "./images/MaquinaDVH2.jpeg";

export default function Trabajos() {
  return (
    <div className='CarouselDiv'> {/* <div style={{ display: 'block', width: 700, padding: 30 }}>*/}
  
      <Carousel>

        <Carousel.Item interval={1500}>
          <img
            className="ImagenCarousel"
            src={FabricaInterior}
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1500}>
          <img 
            className="ImagenCarousel"
            src={MaquinaDVH}
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1500}>
          <img id='Vidrios1'
            className="ImagenCarousel"
            src={FabricaInteriorVidrios}
            alt="Image Three"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1500}>
          <img id='DVH2'
            className="ImagenCarousel"
            src={MaquinaDVH2}
            alt="Image Four"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
  );
}