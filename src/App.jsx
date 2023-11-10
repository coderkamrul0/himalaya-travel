import Category from "./Components/Category/Category";
import HeroSection from "./Components/HeroSection/HeroSection";
import SearchField from "./Components/SearchField/SearchField";
import Testimonials from "./Components/Testimonials/Testimonials";
import WhyChose from "./Components/WhyChose/WhyChose";

function App() {
  return (
    <>
      <div className="lg:relative">
        <HeroSection />
        <div className="lg:absolute w-full top-[72vh] z-10">
          <SearchField />
        </div>
      </div>
      <Category />
      <WhyChose />
      <Testimonials />
    </>
  );
}

export default App;
