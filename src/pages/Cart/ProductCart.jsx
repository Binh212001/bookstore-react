import React, { useState } from "react";
import PropTypes from "prop-types";
import anh from "../../img/1640768032-TAMNSHSBOOK101.jpg";
import { api } from "../../api/api";
import { useDispatch } from "react-redux";
import { deleteProcuct } from "../../redux/CartSlice";
function ProductCart(props) {
  const { product } = props;

  const dispatch = useDispatch();
  const handleDelCart = (id) => {
    dispatch(deleteProcuct(id));
    api.deleteProductOnCart(id);
  };
  return (
    <div className="product">
      <div className="product__img">
        <img src={anh} alt="key" />
      </div>
      <div className="product__content">
        <div className="product__content__title">{product.book.name}</div>
        <div className="product__content__sum">
          <div className="product__content__sum__amount">
            So luong :{product.amount}
          </div>
          <i
            onClick={() => handleDelCart(product.bookId)}
            className="fa-solid fa-trash"
          ></i>
        </div>
      </div>
    </div>
  );
}

ProductCart.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    bookId: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    book: PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      categoryId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      publicationDate: PropTypes.string.isRequired,
      private: PropTypes.bool.isRequired,
      category: PropTypes.string,
      image: PropTypes.string,
      comment: PropTypes.string,
    }),
  }).isRequired,
};
export default ProductCart;
