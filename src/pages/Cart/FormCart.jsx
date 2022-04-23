import { useFormik } from "formik";
import React from "react";
import { Form } from "react-bootstrap";

function FormCart(props) {
  const { show, setOpenForm } = props;
  const formik = useFormik({
    initialValues: {
      firstName: "",
      location: "",
      phone: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      setOpenForm(false);
    },
  });

  const handleShow = () => {
    show();
  };
  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Label htmlFor="firstName">First Name</Form.Label>
        <Form.Control
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        <Form.Label htmlFor="lastName">Location</Form.Label>
        <Form.Control
          id="location"
          name="location"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.location}
        />
        <Form.Label htmlFor="phone">Phone</Form.Label>
        <Form.Control
          id="phone"
          name="phone"
          type="phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
        <div className="cart__btn">
          <button type="submit" className="cart__btn-submit">
            Submit
          </button>

          <button onClick={() => handleShow()} className="cart__btn-close">
            Close
          </button>
        </div>
      </Form>
    </div>
  );
}

export default FormCart;
