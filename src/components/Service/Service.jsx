import Services from "../../api/services.js";
import "../../styles/components/service.scss"
import "../../styles/pages/homePage.scss"
const Service = () => {



  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }
  return (
    <div className={`wpo-service-area-s2 section-padding pt-0`}>
      <div className="container-fluid">
        <div className="row">
          <div className="wpo-section-title-s2">
            <span>Our Capabilities</span>
            <h2>What We Do</h2>
            <div className="invisible-text">
              <h2>Services</h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          {Services.slice(6, 10).map((service, sitem) => (
            <div className="col-lg-3 col-md-6 col-12" key={sitem}>
              <div className="wpo-service-item">
                <div className="wpo-service-img">
                  <img src={service.sImg} alt="" />
                </div>
                <div className="wpo-service-text">
                  <h2><a onClick={ClickHandler}>{service.sTitle}</a></h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
