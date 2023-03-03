import React from 'react';
import '../../estilos/About-Us/Video.css'


export function Video() {
  return(
    <div className="contenedor-video">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/odFaxAu7s5w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  );
}