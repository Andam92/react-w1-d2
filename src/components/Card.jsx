import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Books from "../books/fantasy.json";

function MyCard(props) {
  return (
    <Container>
      <Row>
        {Books.map((elem, index) => {
          return (
            index < 15 && (
              <Col xs={12} sm={6} md={4} lg={3}>
                <Card
                  className="m-2"
                  /* style={{ width: "18rem" }}  */ key={index}
                >
                  <Card.Img
                    variant="top"
                    src={elem.img}
                    style={{ height: "300px" }}
                  />
                  <Card.Body>
                    <Card.Title style={{ fontSize: props.font }}>
                      {elem.title}
                    </Card.Title>
                    <Card.Text>{elem.price + " €"}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )
          );
        })}
      </Row>
    </Container>
  );
}

export default MyCard;
