import "./App.scss";
import About from "./components/about/About";
import Consultation from "./components/consultation/Consultation";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainBaner from "./components/mainBaner/MainBaner";
import Partners from "./components/partners/Partners";
import Project from "./components/project/Project";
import Reviews from "./components/reviews/Reviews";
import SpareParts from "./components/spareParts/SpareParts";
import TypeOfElevators from "./components/typeOfElevators/TypeOfElevators";
import YouTube from "./components/youTube/YouTube";

function App() {
  return (
    <div>
      <Header />
      <MainBaner />
      <About/>
      <TypeOfElevators/>
      <Consultation/>
      <Project/>
      <Partners/>
      {/* <SpareParts/> */}
      <YouTube/>
      <Reviews/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
