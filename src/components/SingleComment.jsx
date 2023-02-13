import { ListGroup } from "react-bootstrap";

function SingleComment(props) {
  return (
    <ListGroup>
      <ListGroup.Item>{props.comment.author}</ListGroup.Item>
      <ListGroup.Item>{props.comment.comment}</ListGroup.Item>
      <ListGroup.Item>{props.comment.rate}</ListGroup.Item>
    </ListGroup>
  );
}

export default SingleComment;
