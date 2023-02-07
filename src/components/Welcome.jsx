import { Container } from "react-bootstrap";

function Welcome(props) {
  return (
    <div
      class="jumbotron jumbotron-fluid"
      style={{
        backgroundImage: `url("https://citynews-udinetoday.stgy.ovh/~media/horizontal-mid/19828583265752/librerie-2.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container>
        <h1
          class="display-4 text-light"
          style={{ backgroundColor: props.bgColor, opacity: props.opacity }}
        >
          LOT OF BOOKS
        </h1>
        <p
          class="lead text-light"
          style={{ backgroundColor: props.bgColor, opacity: props.opacity }}
        >
          The best bookshop in town! We have everything you need :D
        </p>
      </Container>
    </div>
  );
}

export default Welcome;
