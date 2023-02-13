import SingleComment from "./SingleComment";

function CommentList(props) {
  return props.commentsArray.map((comment) => (
    <SingleComment comment={comment} />
  ));
}

export default CommentList;
