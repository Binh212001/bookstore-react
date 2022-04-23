import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../../Comon/Card";
import { getCategory } from "../../redux/BookSlice";
function PrSchool() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Books.productbycategory);

  useEffect(() => {
    dispatch(getCategory(params));
  }, [dispatch]);

  return (
    <div className="wapper">
      <Container>
        <Row>
          {data.map((data, index) => (
            <Col sm={12} md={6} lg={3} key={index}>
              <Card data={data} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default PrSchool;
