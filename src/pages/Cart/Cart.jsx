import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCart } from "../../redux/CartSlice";
import FormCart from "./FormCart";
import ProductCart from "./ProductCart";

function Cart() {
  const [isShowForm, setIsShowForm] = useState(false);
  const user = useSelector((state) => state.Auth.user);
  const product = useSelector((state) => state.Cart.product);
  const dispatch = useDispatch();

  const nagitive = useNavigate();

  useEffect(() => {
    if (!user) {
      nagitive("/login");
    }
    dispatch(getCart());
  }, [dispatch, user, nagitive]);

  const handleShowForm = () => {
    setIsShowForm(false);
  };
  return (
    <div className="wapper">
      <div className="cart">
        <h1>Gio hang</h1>
        <button
          onClick={() => {
            setIsShowForm(true);
          }}
          className="cart__button cart__button-open"
        >
          <i class="fa-solid fa-plus"></i> Them dia chi
        </button>
      </div>
      <Container>
        <Row>
          {isShowForm ? (
            <Col sm={12} md={6} lg={6}>
              <FormCart show={handleShowForm} setOpenForm={setIsShowForm} />
            </Col>
          ) : null}
          {product.map((data, index) => (
            <Col key={index} sm={12} md={6} lg={6}>
              <ProductCart product={data} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Cart;
