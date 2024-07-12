import Wrapper from "../components/LandingPage/Wrapper";
import NavBar from "../components/LandingPage/NavBar";
import Hero from "../components/LandingPage/Hero";
import FeaturedItems from "../components/LandingPage/FeaturedItems";
import Contact from "../components/LandingPage/Contact";
import FAQ from "../components/LandingPage/FAQ";
import Footer from "../components/LandingPage/Footer";

export default function Component() {
  return (
    <Wrapper>
      <NavBar />
      <Hero />
      <FeaturedItems />
      <Contact />
      <FAQ />
      <Footer />
    </Wrapper>
  );
}
