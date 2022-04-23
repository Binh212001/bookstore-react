import React, { useContext, useState } from "react";
import {
  Container,
  Nav,
  Dropdown,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/gd-logo.png";
import { AuthContext } from "../pages/Login/AuthProvider";
import CustomLink from "./ActiveLink";

function Header() {
  const [search, setSearch] = useState("");
  const user = useContext(AuthContext);
  const nagitive = useNavigate();
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nagitive(search);
  };
  const LinkList = [
    {
      to: "/mamnon",
      displayName: " Mầm Non",
    },
    {
      to: "/tieuhoc",
      displayName: " Tiểu Học",
    },
    {
      to: "/thcs",
      displayName: " THCS",
    },
    {
      to: "/thpt",
      displayName: " THPT",
    },
  ];
  return (
    <div className="header">
      <Navbar expand={false} style={{ display: "block" }}>
        <Container style={{ display: "block" }}>
          <div className="header__btn">
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
          </div>

          <div className="header__nomal">
            <Nav
              defaultActiveKey="/home"
              as="ul"
              style={{
                flexDirection: "row",
                gap: "30px",
                alignItems: "center",
              }}
            >
              <Nav.Item as="li">
                <Link to="/">
                  <img className="header_logo" src={logo} alt="logo" />
                </Link>
              </Nav.Item>
              {LinkList.map((link, index) => (
                <Nav.Item key={index} as="li">
                  <CustomLink to={link.to} id={index}>
                    {link.displayName}
                  </CustomLink>
                </Nav.Item>
              ))}
            </Nav>

            <div className="header__nomal__btn">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="search"
                  value={search}
                  onChange={onChangeSearch}
                  style={{
                    height: "100%",
                    gap: "20px",
                    marginRight: "20px",
                    border: "1px solid green",
                    borderRadius: "5px",
                    outline: "none",
                    color: "green",
                  }}
                />
                <Button variant="outline-success" type="submit">
                  Search
                </Button>
              </form>
              {user ? (
                <div
                  style={{ display: "flex", gap: "30px", alignItems: "center" }}
                >
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {user.username}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        <Link to="/cart">
                          <i className="fa-solid fa-cart-shopping"></i>
                          Gio hang
                        </Link>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Link to="cart">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </Link>
                </div>
              ) : (
                <Link to="/login">
                  <Button variant="primary">Đăng Nhập</Button>
                </Link>
              )}
            </div>
          </div>

          <Navbar.Offcanvas
            style={{ height: "100vh" }}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="top"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                  <Dropdown.Item href="#/action-1">
                    <Link to="/cart">
                      <i className="fa-solid fa-cart-shopping"></i>
                      Gio hang
                    </Link>
                  </Dropdown.Item>
                </NavDropdown>
              </Nav>

              <br />
              <Button variant="primary">Đăng Nhập</Button>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
