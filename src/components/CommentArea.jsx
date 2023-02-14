import { InputGroup, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

const CommentArea = (props) => {
  /*  state = {
    comment: [],
    rate: 0,
    elementId: "",
  }; */

  const [comment, setComment] = useState([]);

  const fetchComments = async (bookId) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${bookId}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U1MGNjM2EyNDc4ZDAwMTNhMDU4MzMiLCJpYXQiOjE2NzU5NTcxNDEsImV4cCI6MTY3NzE2Njc0MX0.OKmm1zbdxq182zC-x7_tC31kC-sr6t4PVJH-wqyDTCE",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        /* this.setState({ comment: data }); */
        setComment(data);
      } else {
        console.log("errore di response", response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  /*   componentDidMount() {
    this.props.asin && this.fetchComments(this.props.asin);
  } */

  /*  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.fetchComments(this.props.asin);
    }
  } */

  useEffect(() => {
    console.log("QUESTO è asin", props.asin);
    fetchComments(props.asin);
  }, [props.asin]);

  return (
    <>
      <CommentList commentsArray={comment} />
      <InputGroup>
        <InputGroup.Text>Comment</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>
      <AddComment />
    </>
  );
};

export default CommentArea;
