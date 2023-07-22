import HeaderSection from "./components/HeaderSection";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3Cards from "./components/Section3Cards";
import Footer from "./components/footer";
import Section3 from "./components/section3";


function App() {
  return (
    <div >
      <Navbar />
      <HeaderSection />
      <Section3Cards />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
}

export default App;
