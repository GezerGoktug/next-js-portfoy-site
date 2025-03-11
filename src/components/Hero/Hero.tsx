import React from "react";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const Hero = () => {
  return (
    <div className="z-30 ">
      <div className="container row-center gap-12 min-h-[calc(100vh-88px)]">
        <div className="col-start gap-12 lg:flex-row mb-6  md:mt-0">
          <HeroLeft />
          <HeroRight />
        </div>
      </div>
    </div>
  );
};

export default Hero;
