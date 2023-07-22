import HeaderSection from "./components/HeaderSection";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3Cards from "./components/Section3Cards";


function App() {
  return (
    <div >
      <Navbar />
      <HeaderSection />
      <Section3Cards />
      <Section1 />
      <Section2 />
    </div>
  );
}

export default App;
