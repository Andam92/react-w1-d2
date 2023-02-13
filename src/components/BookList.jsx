import { Component } from "react";
import SingleBook from "./SingleBook";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    searchValue: "",
    asin: null,
    selected: false,
  };

  /*  selectBook = (asin) => {
    this.setState({ ...this.state, bookAsin: asin });
  }; */

  getAsin = (value, selected) => {
    this.setState({ ...this.state, asin: value, selected: selected });
  };

  render() {
    console.log(this.state.asin);
    return (
      <>
        <Col xs={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Search a book</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter book's title"
                onChange={(event) =>
                  this.setState({
                    ...this.state,
                    searchValue: event.target.value.toLowerCase(),
                  })
                }
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <Container>
            <Row>
              {this.props.category
                .filter((e) => {
                  return e.title.toLowerCase().includes(this.state.searchValue);
                })
                .map((e, index) => (
                  <SingleBook
                    element={e}
                    key={index}
                    id={e.asin}
                    /* selectBook={this.selectBook} */
                    getAsin={this.getAsin}
                    selected={this.state.selected}
                    asin={this.state.asin}
                  />
                ))}
            </Row>
          </Container>
        </Col>
        <Col xs={6}>
          <CommentArea asin={this.state.asin} />
        </Col>
      </>
    );
  }
}

export default BookList;
