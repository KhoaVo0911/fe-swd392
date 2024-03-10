import Projects from "../../api/projects"
import "../../styles/components/project.scss"
import {Link} from "react-router-dom"
const Project = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <div className="wpo-project-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="wpo-section-title">
                        <span>Featured Works</span>
                        <h2>Our Projects</h2>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="wpo-project-wrap">
                        <div className="sortable-gallery">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project-grids gallery-container clearfix">
                                        {Projects.slice(3, 9).map((project, pot) => (
                                            <div className="grid" key={pot}>
                                                <div className="wpo-project-item">
                                                    <div className="wpo-project-img">
                                                        <img src={project.pImg} alt="" />
                                                        <div className="left-border"></div>
                                                        <div className="right-border"></div>
                                                    </div>
                                                    <div className="wpo-project-text">
                                                        <h2><Link to={`project-single`} onClick={ClickHandler}>{project.title}</Link></h2>
                                                        <span>{project.subTitle}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Project