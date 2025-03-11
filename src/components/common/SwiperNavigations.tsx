"use client";

import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import { useSwiper } from "swiper/react";

const SwiperNavigations = () => {
  const swiper = useSwiper();
  return (
    <>
      <ChevronLeftCircle
        onClick={() => swiper?.slidePrev()}
        className="size-8 prev-button cursor-pointer absolute -left-3 md:-left-0  top-1/2 -translate-y-1/2  z-10 "
      />
      <ChevronRightCircle
        onClick={() => swiper?.slideNext()}
        className="size-8 next-button cursor-pointer absolute -right-3 md:-right-0  top-1/2 -translate-y-1/2  z-10 "
      />
    </>
  );
};

export default SwiperNavigations;
