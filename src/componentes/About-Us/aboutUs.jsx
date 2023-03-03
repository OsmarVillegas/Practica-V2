import React from "react";
import "../../estilos/About-Us/headerAbout.css";
import "../../estilos/About-Us/aboutVideo.css";
import "../../estilos/About-Us/experience.css";
import "../../estilos/About-Us/ourStory.css";
import Carousel from "react-bootstrap/Carousel";

export function HeaderAbout() {
  return (
    <Carousel>
        <img
          className="d-block w-100 "
          src={require("../../imagenes/cabeza/about.jpg")}
          alt="First slide"
        />
      <Carousel.Item className="HeaderAbout-item">
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
  // return (
  //     <div className="HeaderAbout-contenedor">
  //         <div className="HeaderAbout-img">
  //             <div className="HeaderAbout-whatIs">
  //                 <h1 className="HeaderAbout-titulo">What is Optimen</h1>
  //                     <p className="HeaderAbout-parrafo">Optimen is a Mexican Software Development company that provides resources management and optimization services to different industries. The company was designated and approved as an International Service Contractor for Jeppesen and Boeing.</p>
  //             </div>
  //             <div className="HeaderAbout-mission">
  //                 <h1 className="HeaderAbout-titulo"></h1>
  //                 <p className="HeaderAbout-parrafo"></p>
  //             </div>
  //             <div className="HeaderAbout-vision">
  //                 <h1 className="HeaderAbout-titulo"></h1>
  //                 <p className="HeaderAbout-parrafo"></p>
  //             </div>
  //             <div className="HeaderAbout-values">
  //                 <h1 className="HeaderAbout-titulo"></h1>
  //                 <p className="HeaderAbout-parrafo"></p>
  //             </div>
  //             <div className="HeaderAbout-buttons">
  //                 <button className="HeaderAbout-button-mision"></button>
  //                 <button className="HeaderAbout-button-values"></button>
  //                 <button className="HeaderAbout-button-values"></button>
  //             </div>
  //         </div>
  //     </div>
  // );
}

export function AboutVideo() {
  return (
    <div className="AboutVideo-contenedor">
      <div className="AboutVideo-video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/SIuF37EWaLU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <div className="Experience-contenido">
      <h1>Airline Experience</h1>
      <div className="Experience-cuadro">
        <div id="Experience-experiencia-1">
          <div className="Experiencia-movimiento"></div>
          <h5 className="Experience-titulo">Experience 1</h5>
          <p className="Experience-descripcion">
            Associated with long experience in the Airline Industry with high
            trust and tight relation with commercial airlines and industry key
            players.
          </p>
        </div>
        <div id="Experience-experiencia-2">
          <h5 className="Experience-titulo">Experience 2</h5>
          <p className="Experience-descripcion">
            Broad experience developing software in real Airline Operational
            Control Systems and implementation of Optimization Software.
          </p>
        </div>
        <div id="Experience-experiencia-3">
          <h5 className="Experience-titulo">Experience 3</h5>
          <p className="Experience-descripcion">
            Strong Project Management following the industry best practices.
          </p>
        </div>
      </div>
    </div>
  );
}

export function OurStory() {
  return (
    <div className="OurStory-contenido">
      <div className="OurStory-cuadro-izquierda">
        <h1 className="OurStory-cuadro-anios"></h1>
        <h3 className="OurStory-cuadro-subtitulo"></h3>
        <p className="OurStory-cuadro-descripcion"></p>
        <h5 className="OurStory-cuadro-suceso"></h5>
        <h5 className="OurStory-cuadro-suceso"></h5>
        <h5 className="OurStory-cuadro-suceso"></h5>
      </div>
      <div className="OurStory-cuadro-derecha">
        <h1 className="OurStory-cuadro-anios"></h1>
        <h3 className="OurStory-cuadro-subtitulo"></h3>
        <p className="OurStory-cuadro-descripcion"></p>
        <h5 className="OurStory-cuadro-suceso"></h5>
        <h5 className="OurStory-cuadro-suceso"></h5>
        <h5 className="OurStory-cuadro-suceso"></h5>
      </div>
      <div className="OurStory-cuadro-izquierda">
        <h1 className="OurStory-cuadro-anios"></h1>
        <h3 className="OurStory-cuadro-subtitulo"></h3>
        <p className="OurStory-cuadro-descripcion"></p>
        <h5 className="OurStory-cuadro-suceso"></h5>
        <h5 className="OurStory-cuadro-suceso"></h5>
        <h5 className="OurStory-cuadro-suceso"></h5>
      </div>
      <div className="OurStory-cuadro-derecha">
        <h1 className="OurStory-cuadro-anios"></h1>
        <h3 className="OurStory-cuadro-subtitulo"></h3>
        <p className="OurStory-cuadro-descripcion"></p>
        <h5 className="OurStory-cuadro-suceso"></h5>
        <h5 className="OurStory-cuadro-suceso"></h5>
        <h5 className="OurStory-cuadro-suceso"></h5>
      </div>
    </div>
  );
}

export function InnovationHub() {
  return (
    <div className="InnovationHub-contenido">
      <div className="InnovationHub-cuadroImg-1">
        <h1 className="InnovationHub-titulo"></h1>
        <p className="InnovationHub-descripcion"></p>
        <p className="InnovationHub-fecha"></p>
      </div>
      <div className="InnovationHub-cuadroImg-2">
        <h1 className="InnovationHub-titulo"></h1>
        <p className="InnovationHub-descripcion"></p>
        <p className="InnovationHub-fecha"></p>
      </div>
      <div className="InnovationHub-cuadroImg-3">
        <h1 className="InnovationHub-titulo"></h1>
        <p className="InnovationHub-descripcion"></p>
        <p className="InnovationHub-fecha"></p>
      </div>
      <div className="InnovationHub-cuadroImg-4">
        <h1 className="InnovationHub-titulo"></h1>
        <p className="InnovationHub-descripcion"></p>
        <p className="InnovationHub-fecha"></p>
      </div>
      <div className="InnovationHub-cuadroImg-5">
        <h1 className="InnovationHub-titulo"></h1>
        <p className="InnovationHub-descripcion"></p>
        <p className="InnovationHub-fecha"></p>
      </div>
    </div>
  );
}
