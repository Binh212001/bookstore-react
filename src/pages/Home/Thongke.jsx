import React from "react";
import { Col, Container, Row, Card, ListGroup } from "react-bootstrap";

function Thongke() {
  return (
    <div className="thongke">
      <Container>
        <h1>NHỮNG CON SỐ ẤN TƯỢNG</h1>
        <Row>
          <Col sm={12} md={6} lg={3}>
            <Card style={{ width: "15rem" }}>
              <ListGroup.Item
                style={{
                  backgroundColor: "#2A629F",
                  boxShadow: "4px 4px 2px #1c4877",
                  color: "#fff",
                }}
              >
                <h5>63</h5>
                <div>Triển khai khắp 63 tỉnh, thành phố</div>
              </ListGroup.Item>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <Card style={{ width: "15rem" }}>
              <ListGroup.Item
                style={{
                  backgroundColor: "#2A629F",
                  boxShadow: "4px 4px 2px #1c4877",
                  color: "#fff",
                }}
              >
                <h5>7,000 +</h5>
                <div>Hơn 7 nghìn buổi tập huấn đã được triển khai</div>
              </ListGroup.Item>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <Card style={{ width: "15rem" }}>
              <ListGroup.Item
                style={{
                  backgroundColor: "#2A629F",
                  boxShadow: "4px 4px 2px #1c4877",
                  color: "#fff",
                }}
              >
                <h5>1,000,000 +</h5>
                <div>Hơn 1 triệu tài khoản người dùng Sách Mềm</div>
              </ListGroup.Item>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <Card style={{ width: "15rem" }}>
              <ListGroup.Item
                style={{
                  backgroundColor: "#2A629F",
                  boxShadow: "4px 4px 2px #1c4877",
                  color: "#fff",
                }}
              >
                <h5>5,000,000+</h5>
                <div>Hơn 5 triệu học sinh đang theo học hằng năm</div>
              </ListGroup.Item>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Thongke;
