import Seperator from "../common/Seperator";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";

const TopSection = () => {
  return (
    <div className="relative bg-[url('/hero.avif')] bg-center min-h-screen bg-cover z-20  ">
      <div className="absolute top-0 left-0 right-0 bottom-0 -z-[1]  bg-gradient-to-tr from-black/90 to-black/20" />
      <Header />
      <Hero />
      <Seperator />
    </div>
  );
};

export default TopSection;
