import Services from "../../api/services";
import Projects from "../../api/projects";
import "../../styles/components/footer.scss";
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import TtyOutlinedIcon from '@mui/icons-material/TtyOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
const Footer = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <footer className={`wpo-site-footer ${props}`}>
      <div className="wpo-upper-footer">
        <div className="container">
          <div className="row">
            <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget about-widget">
                <div className="logo widget-title">
                  <a onClick={ClickHandler} className="logo" href="/">
                    <img src="" alt="" />
                  </a>
                  <h2>Interior Design</h2>

                </div>
                <p>
                  Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.
                  Viverra laoreet ultrices donec placerat commodo elementum
                  justo, consequat.
                </p>
              </div>
            </div>
            <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>Our Services</h3>
                </div>
                <ul>
                  {Services.slice(0, 5).map((service, srv) => (
                    <li key={srv}>
                      <a onClick={ClickHandler} href="/service/[slug]">
                        {service.sTitle}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget wpo-service-link-widget">
                <div className="widget-title">
                  <h3>Contact </h3>
                </div>
                <div className="contact-ft">
                  <ul>
                    <li>
                      {" "}
                      <RoomOutlinedIcon/> Lô E2a-7, Đường
                      D1, Đ. D1, Long Thạnh Mỹ, <br /> Thành Phố Thủ Đức, Thành
                      phố Hồ Chí Minh 700000
                    </li>
                    <li>
                      <TtyOutlinedIcon/> 028 7300 5588
                    </li>
                    <li>
                      <MarkEmailUnreadOutlinedIcon/> interior@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget instagram">
                <div className="widget-title">
                  <h3>Our Gallery</h3>
                </div>
                <ul className="d-flex">
                  {Projects.slice(0, 6).map((project, srv) => (
                    <li key={srv}>
                      <a onClick={ClickHandler} href="/project">
                        <img src={project.pImg} alt="" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wpo-lower-footer">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <ul>
                <li>
                  &copy; 2024 Interior Design{" "}
                  <a onClick={ClickHandler} href="/"></a>. All Rights Reserved.
                </li>
                <li>
                  <a onClick={ClickHandler} href="/">
                    Terms of use |
                  </a>{" "}
                  <a onClick={ClickHandler} href="/">
                    Privacy Environmental Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
