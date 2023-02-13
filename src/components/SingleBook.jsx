import { Component } from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Col xs={12} sm={6} md={4} lg={3}>
        <Card
          className="m-2"
          key={`Libro n°: ` + this.props.key} /* style={{ width: "18rem" }}  */
          /* onClick={() => this.setState({ selected: !this.state.selected })} */
          style={{
            border: this.props.asin === this.props.id ? "2px solid red" : "",
            transform: this.props.asin === this.props.id ? "scale(1.2)" : "",
          }}
          onClick={() => {
            this.props.getAsin(this.props.id, !this.props.selected);
          }}
        >
          <Card.Img
            variant="top"
            src={this.props.element.img}
            style={{ height: "300px" }}
          />
          <Card.Body>
            <Card.Title style={{ fontSize: this.props.element.font }}>
              {this.props.element.title}
            </Card.Title>
          </Card.Body>
        </Card>
        {/*  {this.state.selected && <CommentArea id={this.props.id} />} */}
      </Col>
    );
  }
}

export default SingleBook;
