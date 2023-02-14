/* import { useState } from "react"; */
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const SingleBook = (props) => {
  /*   state = {
    selected: false,
  }; */

  /*   const [selected, setSelected] = useState("false"); */

  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <Card
        className="m-2"
        key={`Libro n°: ` + props.key} /* style={{ width: "18rem" }}  */
        /* onClick={() => this.setState({ selected: !this.state.selected })} */
        style={{
          border: props.asin === props.id ? "2px solid red" : "0px",
          transform: props.asin === props.id ? "scale(1.2)" : "0px",
        }}
        onClick={() => {
          props.getAsin(props.id, !props.selected);
        }}
      >
        <Card.Img
          variant="top"
          src={props.element.img}
          style={{ height: "300px" }}
        />
        <Card.Body>
          <Card.Title style={{ fontSize: props.element.font }}>
            {props.element.title}
          </Card.Title>
        </Card.Body>
      </Card>
      {/*  {this.state.selected && <CommentArea id={this.props.id} />} */}
    </Col>
  );
};

export default SingleBook;
