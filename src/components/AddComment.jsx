import { Button, Form } from "react-bootstrap";
import { Component } from "react";

class AddComment extends Component {
  state = {
    comment: "",
    rate: "",
  };

  sendComment() {}

  render() {
    console.log(this.state.comment);
    return (
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="input"
            placeholder="write your comment here"
            value={this.state.comment}
            onChange={(e) =>
              this.setState({ ...this.state, comment: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="input"
            placeholder="1-5 voto"
            value={this.state.rate}
            onChange={(e) =>
              this.setState({ ...this.state, rate: e.target.value })
            }
          />
        </Form.Group>
        <Button
          onClick={(e) => {
            e.preventDefault();
            this.sendComment();
          }}
        />
      </Form>
    );
  }
}

export default AddComment;
