// import Services from "../../api/services";
// import Projects from "../../api/projects";
// import "../../styles/components/footer.scss";
// import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
// import TtyOutlinedIcon from '@mui/icons-material/TtyOutlined';
// import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
// const Footer = (props) => {
//   const ClickHandler = () => {
//     window.scrollTo(10, 0);
//   };
//   return (
//     <footer className={`wpo-site-footer ${props}`}>
//       <div className="wpo-upper-footer">
//         <div className="container">
//           <div className="row">
//             <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
//               <div className="widget about-widget">
//                 <div className="logo widget-title">
//                   <a onClick={ClickHandler} className="logo" href="/">
//                     <img src="" alt="" />
//                   </a>
//                   <h2>Interior Design</h2>

//                 </div>
//                 <p>
//                   Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.
//                   Viverra laoreet ultrices donec placerat commodo elementum
//                   justo, consequat.
//                 </p>
//               </div>
//             </div>
//             <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
//               <div className="widget link-widget">
//                 <div className="widget-title">
//                   <h3>Our Services</h3>
//                 </div>
//                 <ul>
//                   {Services.slice(0, 5).map((service, srv) => (
//                     <li key={srv}>
//                       <a onClick={ClickHandler} href="/service/[slug]">
//                         {service.sTitle}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//             <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
//               <div className="widget wpo-service-link-widget">
//                 <div className="widget-title">
//                   <h3>Contact </h3>
//                 </div>
// <div className="contact-ft">
//   <ul>
//     <li>
//       {" "}
//       <RoomOutlinedIcon/> Lô E2a-7, Đường
//       D1, Đ. D1, Long Thạnh Mỹ, <br /> Thành Phố Thủ Đức, Thành
//       phố Hồ Chí Minh 700000
//     </li>
//     <li>
//       <TtyOutlinedIcon/> 028 7300 5588
//     </li>
//     <li>
//       <MarkEmailUnreadOutlinedIcon/> interior@gmail.com
//     </li>
//   </ul>
// </div>
//               </div>
//             </div>

//             <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
//               <div className="widget instagram">
//                 <div className="widget-title">
//                   <h3>Our Gallery</h3>
//                 </div>
//                 <ul className="d-flex">
//                   {Projects.slice(0, 6).map((project, srv) => (
//                     <li key={srv}>
//                       <a onClick={ClickHandler} href="/project">
//                         <img src={project.pImg} alt="" />
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="wpo-lower-footer">
//         <div className="container">
//           <div className="row">
//             <div className="col col-xs-12">
//               <ul>
//                 <li>
//                   &copy; 2024 Interior Design{" "}
//                   <a onClick={ClickHandler} href="/"></a>. All Rights Reserved.
//                 </li>
//                 <li>
//                   <a onClick={ClickHandler} href="/">
//                     Terms of use |
//                   </a>{" "}
//                   <a onClick={ClickHandler} href="/">
//                     Privacy Environmental Policy
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import "../../styles/components/footer.scss";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import TtyOutlinedIcon from "@mui/icons-material/TtyOutlined";

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
            src="https://www.leaz.co/wp-content/uploads/2022/11/Final-Logo-V3-01.png"
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
            SWD392
            <p>Tous droits réservés</p>
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
