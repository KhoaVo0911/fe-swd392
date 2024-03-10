
import Blog from "../../components/Blog/Blog";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Pricing from "../../components/Pricing/Pricing";
import Service from "../../components/Service/Service";
import Navbar from "../../components/Navbar/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      <Pricing pClass={'wpo-pricing-section-s2'}/>
      <Blog />
      <Footer ftClass={'wpo-site-footer-s2'}/>
    </div>
  );
};

export default HomePage;
