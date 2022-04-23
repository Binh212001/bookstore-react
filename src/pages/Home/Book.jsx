import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import Card from "../../Comon/Card";
import { useDispatch, useSelector } from "react-redux";
import { getAllBook } from "../../redux/BookSlice";
import Product from "../../img/1640768032-TAMNSHSBOOK101.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
function Book() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBook());
  }, [dispatch]);

  const book = useSelector((state) => state.Books);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="book">
      <h1>Sánh nổi bật tháng này</h1>
      <Container style={{ position: "relative", overflow: "hidden" }}>
        <Carousel responsive={responsive} infinite={true}>
          {book.books.map((data, index) => (
            <Card key={index} data={data} />
          ))}
        </Carousel>
      </Container>
    </div>
  );
}

export default Book;
