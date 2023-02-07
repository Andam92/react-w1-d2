import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MyFooter(props) {
  return (
    <footer className="bg-dark mt-3 py-2" style={{ height: props.heightValue }}>
      <Row className="text-center ">
        <Col>
          <a className="text-light" href="#about">
            {props.about}
          </a>
        </Col>
        <Col>
          <a className="text-light" href="#jobs">
            {props.jobs}
          </a>
        </Col>
        <Col>
          <a className="text-light" href="#contacts">
            {props.contacts}
          </a>
        </Col>
      </Row>
    </footer>
  );
}

export default MyFooter;
