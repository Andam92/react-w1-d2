import { useState } from "react";
import SingleBook from "./SingleBook";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import CommentArea from "./CommentArea";

const BookList = (props) => {
  /* state = {
    searchValue: "",
    asin: null,
    selected: false,
  }; */

  /*  selectBook = (asin) => {
    this.setState({ ...this.state, bookAsin: asin });
  }; */

  const [searchValue, setSearchValue] = useState("");
  const [asin, setAsin] = useState(null);
  const [selected, setSelected] = useState(false);

  const getAsin = (value, selected) => {
    /* this.setState({ ...this.state, asin: value, selected: selected }); */
    setAsin(value);
    setSelected(selected);
  };

  console.log(asin);
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
                /* this.setState({
                    ...this.state,
                    searchValue: event.target.value.toLowerCase(),
                  }) */
                setSearchValue(event.target.value.toLowerCase())
              }
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Container>
          <Row>
            {props.category
              .filter((e) => {
                return e.title.toLowerCase().includes(searchValue);
              })
              .map((e, index) => (
                <SingleBook
                  element={e}
                  key={index}
                  id={e.asin}
                  /* selectBook={this.selectBook} */
                  getAsin={getAsin}
                  selected={selected}
                  asin={asin}
                />
              ))}
          </Row>
        </Container>
      </Col>
      <Col xs={6}>
        <CommentArea asin={asin} />
      </Col>
    </>
  );
};

export default BookList;
