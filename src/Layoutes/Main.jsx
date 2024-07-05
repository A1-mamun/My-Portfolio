import About from "../Components/About/About";
import Banner from "../Components/Banner/Banner";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import Hire from "../Components/Hire/Hire";
import Navbar from "../Components/Navbar/Navbar";
import Project from "../Components/Project/Project";
import Technologies from "../Components/Technologies/Technologies";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Technologies />
      <Project />
      <Hire />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
