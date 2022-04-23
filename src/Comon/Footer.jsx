import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import BoCongThuong from "../img/20150827110756-dathongbao.png";

function Footer() {
  return (
    <div className="footer">
      <Container fluid>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <Container>
              <h5 className="footer__title">Nhà xuất bản Giáo dục Việt Nam</h5>
              <p>
                Công ty Cổ phần Đầu tư và Phát triển Giáo dục Hà Nội <br /> Giấy
                chứng nhận Đăng ký Kinh doanh số 0102222393 <br /> Ngày cấp:
                26/04/2021 <br /> Nơi cấp: Sở Kế Hoạch Và Đầu Tư TP. <br /> Hà
                Nội Giấy phép thiết lập mạng Xã hội Số 405/GP - BTTTT <br /> Do
                Bộ Thông tin và Truyền thông Cấp ngày 21/08/2017
              </p>
              <li>
                <img src={BoCongThuong} alt="bo" style={{ width: "200px" }} />
              </li>
            </Container>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <Container>
              <h4 className="footer__title">Liên Hệ</h4>
              <ul className="footer_list">
                <li>
                  <i className="fa-solid fa-location-pin"></i> Tòa nhà VP HEID,
                  ngõ 12 Láng Hạ, Thành Công, Ba Đình, Hà Nội
                </li>
                <li>
                  <i className="fa-solid fa-phone"></i> Hỗ trợ Sách Mềm: 0243
                  512 222 - 0888 969 599 lienhe@sachmem.vn
                </li>
                <li>
                  <i className="fa-solid fa-message"></i> Lienhe@sachmem.vn
                </li>
              </ul>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
