import "../../styles/components/pricing.scss";
import { useState } from "react";
const Pricing = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const [styles] = useState([]);

  // useEffect(() => {
  //     const fetchData = async () => {
  //         try {
  //             console.log("Making API call..."); // Log before the API call
  //             const response = await axios.get("https://swp391api.developvn.click/api/Products/GetListStyle");
  //             console.log("API response:", response.data); // Log the fetched data after a successful response
  //             setStyles(response.data);
  //         } catch (error) {
  //             console.error("Error fetching data:", error); // Log any errors in fetching data
  //         }
  //     };

  //     fetchData();
  //     console.log(styles);
  // });

  console.log("styles state:", styles); // Log the state variable after rendering

  return (
    <section className={`wpo-pricing-section section-padding`}>
      <div className="container">
        <div className="row">
          <div className="wpo-section-title-s2">
            <span>Pricing Plan</span>
            <h2>Choose Your Optimal Plan</h2>
            <div className="invisible-text">
              <h2>Pricing Plan</h2>
            </div>
          </div>
        </div>
        <div className="wpo-pricing-wrap">
          <div className="row">
            {styles.map((style) => (
              <div className="col col-lg-4 col-md-6 col-12" key={style.id}>
                <div className="wpo-pricing-item">
                  <div className="wpo-pricing-top">
                    <div className="pricing-thumb">
                      <span>{style.name}</span>
                    </div>
                    <div className="wpo-pricing-text">
                      <h2>
                        $50<span>/per m²</span>
                      </h2>
                      <p>123</p>
                    </div>
                  </div>
                  <div className="wpo-pricing-bottom">
                    <div className="wpo-pricing-bottom-text">
                      <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                      </ul>
                      <a onClick={ClickHandler}>Choose Plan</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="invisible-title1">
        <h2>Pricing</h2>
      </div>
    </section>
  );
};

export default Pricing;
