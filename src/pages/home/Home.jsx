import Banner from "../../components/Banner/Banner";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import Sponsor from "../../components/Sponser/Sponser";
import TestimonialSection from "../../components/Testimonial/TestimonialSection";
import Contact from "../Contact/Contact";
import PricingPage from "../PricingPage/PricingPage";
import Service from "../Service/Service";


const Home = () => {
    return (
        <div>
             <HeroBanner />
          <Sponsor></Sponsor>
      <Banner></Banner>
      <Service></Service>
      <PricingPage></PricingPage>
      <Contact></Contact>
      <TestimonialSection></TestimonialSection>
      </div>
    );
};

export default Home;