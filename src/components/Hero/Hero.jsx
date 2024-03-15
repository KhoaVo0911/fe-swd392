import "../../styles/components/hero.scss";

const Hero = () => {
  return (
    <section className="static-hero">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-7 col-12">
                                <div className="static-hero-inner">
                                    <div data-swiper-parallax="200" className="slide-visible-text">
                                        <h2>Interior</h2>
                                    </div>
                                    <div data-swiper-parallax="300" className="slide-title">
                                        <h2>Construction Quotation System </h2>
                                    </div>
                                    <div data-swiper-parallax="400" className="slide-btn">
                                        <a href="/project" className="theme-btn">Discover Project</a>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="static-hero-right">
                <div className="static-hero-img">
                    <div className="static-hero-img-inner">
                        <img src='https://img.freepik.com/free-psd/3d-illustration-isometric-room_23-2150102464.jpg' alt=""/>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default Hero;
