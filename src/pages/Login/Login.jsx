import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../redux/authSlice";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const user = useSelector((state) => state.Auth.user);

  const nagitive = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      getUser({
        username,
        password,
      })
    );

    nagitive("/");
  };

  return (
    <div className="wapper">
      <Container>
        <form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              name="username"
              value={username}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default Login;
