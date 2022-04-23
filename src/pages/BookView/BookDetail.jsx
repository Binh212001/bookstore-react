import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getBookById } from "../../redux/DetailSlice";
import Product from "../../img/1640768032-TAMNSHSBOOK101.jpg";
import { api } from "../../api/api";

function BookDetail() {
  const params = useParams();

  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const nagitive = useNavigate();
  const user = useSelector((state) => state.Auth.user);

  const handleAddToCart = async () => {
    if (user) {
      await api.addTocart({
        bookId: params.id,
        amount: qty,
      });
      nagitive("/cart");

      return;
    }
    nagitive("/login");
  };
  const detail = useSelector((state) => state.Detail.books);

  useEffect(() => {
    dispatch(getBookById(params));
  }, [dispatch, params]);

  return (
    <div className="wapper">
      <Container style={{ marginTop: "20px" }}>
        {detail.map((data, index) => (
          <div key={index}>
            <Row>
              <Col sm={12} md={6} lg={6}>
                <img
                  src={Product}
                  alt="detail"
                  style={{ width: "450px", height: "230px" }}
                />
              </Col>
              <Col sm={12} md={6} lg={6}>
                <h2>{data.name}</h2>
                <div>Hàng tồn : {data.quantity}</div>
                <b>${data.price}</b>
                <div className="btn__group">
                  <button
                    onClick={() => {
                      qty > 1 ? setQty(qty - 1) : setQty(1);
                    }}
                  >
                    -
                  </button>
                  <span>{qty}</span>
                  <button
                    onClick={() => {
                      setQty(qty + 1);
                    }}
                  >
                    +
                  </button>
                </div>
                <div className="add__card">
                  <Button onClick={() => handleAddToCart()}>
                    Thêm vào giỏ hàng
                  </Button>
                </div>
              </Col>
            </Row>
            <Row
              style={{
                margin: "20px 0",
                padding: " 0",
              }}
            >
              <p>{data.description}</p>
            </Row>
          </div>
        ))}
      </Container>
    </div>
  );
}

export default BookDetail;
