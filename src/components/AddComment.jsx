import { Button, Form } from "react-bootstrap";
import { useState } from "react";

const AddComment = (props) => {
  /*  state = {
    comment: "",
    rate: "",
  }; */

  /*   sendComment(){} */

  const [comment, setComment] = useState("");
  const [rate, setRate] = useState("");

  console.log(comment);
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control
          type="input"
          placeholder="write your comment here"
          value={comment}
          onChange={(e) =>
            /* this.setState({ ...this.state, comment: e.target.value }) */
            setComment(e.target.value)
          }
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control
          type="input"
          placeholder="1-5 voto"
          value={rate}
          onChange={(e) =>
            /* this.setState({ ...this.state, rate: e.target.value }) */
            setRate(e.target.value)
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
};

export default AddComment;
