"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperNavigations from "../common/SwiperNavigations";
import ProjectItem from "./ProjectItem";
import "swiper/css";
import "swiper/css/navigation";

export interface IProject {
  _id: string;
  title: string;
  desc: string;
  link: string;
  techs: string[];
  image: string;
}

const ProjectsCarousel = ({ projects }: { projects: IProject[] }) => {
  return (
    <div className="relative">
      <Swiper
        className="!mx-0 md:!mx-10  "
        modules={[Navigation]}
        breakpoints={{
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: { slidesPerView: 2, spaceBetween: 20 },
          1280: { slidesPerView: 3, spaceBetween: 50 },
        }}
        navigation={{
          nextEl: ".next-button",
          prevEl: ".prev-button",
        }}
      >
        {projects?.map((item) => (
          <SwiperSlide className=" py-4" key={"swiper_slide_" + item._id}>
            <ProjectItem project={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <SwiperNavigations />
    </div>
  );
};

export default ProjectsCarousel;
