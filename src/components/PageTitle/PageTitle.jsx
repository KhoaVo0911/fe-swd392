import "../../styles/components/pagetitle.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PageTitle = (props) => {
  return (
    <section className="wpo-page-title">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="wpo-breadcumb-wrap">
              <h2>{props.pageTitle}</h2>
              <ol className="wpo-breadcumb-wrap">
                <li>
                  <Link href="/home">Home</Link>
                </li>
                <li>
                  <span>{props.pagesub}</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
PageTitle.propTypes = {
  pageTitle: PropTypes.string,
  pagesub: PropTypes.string,
};

export default PageTitle;
