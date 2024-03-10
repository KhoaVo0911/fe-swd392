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
                                        <h2>Unique</h2>
                                    </div>
                                    <div data-swiper-parallax="300" className="slide-title">
                                        <h2>Creating Your Future With <span>Affection</span></h2>
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
                        <img src='https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=""/>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default Hero;
