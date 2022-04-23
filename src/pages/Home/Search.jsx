import React, { useEffect } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { searchBook } from "../../redux/BookSlice";
import anh from "../../img/1640768032-TAMNSHSBOOK101.jpg";
import { Link } from "react-router-dom";

function Search() {
  const params = useParams();

  const dispatch = useDispatch();

  const bookData = useSelector((state) => state.Books.search);

  useEffect(() => {
    dispatch(searchBook(params));
  }, [dispatch, params]);

  return (
    <div className="wapper">
      <Container
        style={{
          marginTop: "50px",
        }}
      >
        {bookData.length > 0 ? (
          <Row>
            {bookData.map((data, index) => (
              <Col key={index} sm={12} md={6} lg={3}>
                <Link to={`/book/${data.id}`}>
                  <Card>
                    <Card.Img variant="top" src={anh} />
                    <Card.Body>
                      <Card.Title
                        style={{
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          width: "100%",
                          height: "1.2em",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {data.name}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        ) : (
          <Spinner />
        )}
      </Container>
    </div>
  );
}

export default Search;
