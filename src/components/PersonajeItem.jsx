
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
export const PersonajeItem = ({ name, image }) => {
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};
