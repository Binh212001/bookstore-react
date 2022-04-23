import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Mu from "../../img/kisspng-graduation-ceremony-square-academic-cap-clip-art-g-mantiya-net-mantiyalarn-sat-v-kirays-5ce132b2a2f116.0707000515582624506674.jpg";
import Sach from "../../img/220px-Open_book_nae_02.svg.png";
import Book from "../../img/download.jpg";

function Overview() {
  return (
    <div className="overview">
      <Container>
        <Row>
          <Col
            sm={12}
            md={4}
            lg={4}
            style={{ textAlign: "center", padding: "20px" }}
          >
            <img
              src={Mu}
              alt="mu"
              style={{
                width: "130px",
                backgroundColor: "#fff",
                height: "130px",
              }}
            />
            <h3 className="  overview__title overview__title-blue">
              NỘI DUNG ĐA DẠNG CHUẨN XÁC
            </h3>
            <div className="over__des">
              Đội ngũ tác giả uy tín của Việt Nam hợp tác với các nhà xuất bản
              tổ chức giáo dục quốc tế.
            </div>
          </Col>
          <Col sm={12} md={4} lg={4} style={{ textAlign: "center" }}>
            <img
              src={Sach}
              alt="sach"
              style={{
                width: "130px",
                backgroundColor: "#fff",
                height: "130px",
              }}
            />
            <h3 className=" overview__title overview__title-orange">
              HỖ TRỢ TỐI ĐA VIỆC DẠY VÀ HỌC
            </h3>
            <div className="over__des">
              Hỗ trợ toàn diện và hữu ích, bao gồm các khóa tập huấn offline và
              online, hệ thống học liệu điện tử và phần mềm hỗ trợ giảng dạy,
              các kênh tham khảo và tương tác đa dạng.
            </div>
          </Col>
          <Col sm={12} md={4} lg={4} style={{ textAlign: "center" }}>
            <img
              src={Book}
              alt="dfs"
              style={{
                width: "130px",
                backgroundColor: "#fff",
                height: "130px",
              }}
            />
            <h3 className=" overview__title overview__title-success">
              HỆ SINH THÁI ĐA DẠNG PHONG PHÚ
            </h3>
            <div className="over__des">
              Sách giáo khoa, sách tham khảo bổ trợ. Kho tài nguyên học liệu
              điện tử thường xuyên được cập nhật; Trung tâm ngoại ngữ GLOBAL
              SUCCESS.
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Overview;
