import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import '../../estilos/About-Us/About.css';

function Basic() {
  return (
    <div className="basic">
      <div className="row align-items-center" >
        <div className="col-12">
      <h1 className="juan">Airline Experience</h1>
      </div>
      </div>
      <div className='contenedor-principal1'>
      <div class="row">
        <div class="col-4"> 
          <Card style={{ width: "18rem",padding:10,
        margin:10 }}>
            <Card.Img variant="top" src="../../imagenes/experiencia/image1.jpg" />
            <Card.Body>
              <Card.Title>Experiencia 1</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div class="col-4">
          <Card style={{ width: "18rem",padding:10,
        margin:10 }}>
            <Card.Img variant="top" src="../../imagenes/experiencia/image2.jpg" />
            <Card.Body>
              <Card.Title>Experiencia 2</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div class="col-4">
          <Card style={{ width: "18rem",padding:10,
        margin:10 }}>
            <Card.Img variant="top" src="../../imagenes/experiencia/image3.jpg" />
            <Card.Body>
              <Card.Title>Experiencia 3</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Basic;