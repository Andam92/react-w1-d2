import { Component } from "react";
import BookList from "./BookList";
import { Row } from "react-bootstrap";

class MyMain extends Component {
  render() {
    return (
      <Row>
        <BookList category={this.props.category} />
      </Row>
    );
  }
}

export default MyMain;
