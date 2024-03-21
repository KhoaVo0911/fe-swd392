import "../../styles/components/footer.scss";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import TtyOutlinedIcon from "@mui/icons-material/TtyOutlined";
// import logo from "../../../public/images/logo.png"

export default function App() {
  return (
    <div
      class="container-fluid"
      style={{
        backgroundColor: "#212121",
        width: "auto",
        Height: "auto",
        paddingLeft: "100px",
        paddingRight: "100px",
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
    >
      <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        <div class="col mb-3">
          <img
            className="logoFooter"
            src="/images/logo.png"
          />

          <div className="text-a">
            <a
              href="mailto:contact@leaz.co"
              style={{ color: "white", textDecoration: "none" }}
            >
              <p>Interior Construction Quotation</p>
            </a>
          </div>
          <div class="text-b">
            <p>SWD392</p>
          </div>
        </div>

        <div class="col mb-4"></div>

        <div class="col mb-4">
          <h5 className="title-menu-1">Menu</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="/project" class="title-menu-2">
                Project
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/blog" class="title-menu-2">
                Blog
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="/contact" class="title-menu-2">
                Contact us
              </a>
            </li>
            {/* <li>
              <MarkEmailUnreadOutlinedIcon /> interior@gmail.com
            </li> */}
          </ul>
        </div>

        <div class="col mb-4">
          <h5 className="title-menu-1">Informations</h5>
          <div className="contact-ft">
            <ul>
              <li>
                {" "}
                <RoomOutlinedIcon /> Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ,{" "}
                <br /> Thành Phố Thủ Đức, Thành phố Hồ Chí Minh 700000
              </li>
              <li>
                <TtyOutlinedIcon /> 0399997857
              </li>
              <li>
                <MarkEmailUnreadOutlinedIcon /> swd392@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
