import React from 'react';
import '../../estilos/About-Us/Testimoni.css';
import Card from 'react-bootstrap/Card';



function Testimonio(props) {
  let juan = props.partes.split(", ")
  return (
    <div className='contenedor-testimonio'>
      <Card>
        <div className="col-md-4"> <Card.Img src={require(`../../imagenes/testimonio-${props.imagen}.jpg`)} alt="Card image" />   </div>

        <div className="col-md-8">
          <Card.Title><strong>{props.ano}</strong> in {props.paso}</Card.Title>
          <div>
            {juan.map(parte => (<Card.Text>
              {parte}
            </Card.Text>))
            }
          </div>

          <Card.Text>{props.descripcion}</Card.Text>
        </div>
      </Card>
    </div>
  );
}


export default Testimonio;