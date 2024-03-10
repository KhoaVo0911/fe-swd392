import Projects from '../../api/projects'
import "../../styles/components/projectSingle.scss"

const RelatedProject = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
  return (
    <div className="wpo-project-single-item">
            <div className="wpo-project-single-title">
                <h3>Related Projects</h3>
            </div>
            <div className="wpo-project-area">
                <div className="row align-items-center">
                    <div className="wpo-project-wrap">
                        <div className="sortable-gallery">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project-grids gallery-container clearfix">
                                        {Projects.slice(0, 3).map((project, pot) => (
                                            <div className="grid" key={pot}>
                                                <div className="wpo-project-item">
                                                    <div className="wpo-project-img">
                                                        <img src={project.pImg} alt="" />
                                                        <div className="left-border"></div>
                                                        <div className="right-border"></div>
                                                    </div>
                                                    <div className="wpo-project-text">
                                                        <h2><a onClick={ClickHandler}>{project.title}</a></h2>
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
}

export default RelatedProject