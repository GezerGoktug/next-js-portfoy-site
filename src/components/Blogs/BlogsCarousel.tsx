"use client";
import React from "react";
import SwiperNavigations from "../common/SwiperNavigations";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import BlogItem from "./BlogItem";
import "swiper/css";
import "swiper/css/navigation";

export interface IBlog {
  _id: string;
  title: string;
  desc: string;
  link: string;
  image: string;
}

const BlogsCarousel = ({ blogs }: { blogs: IBlog[] }) => {
  return (
    <div className="relative">
      <Swiper
        className="!mx-0 md:!mx-10"
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
        {blogs.map((item) => (
          <SwiperSlide className=" py-4" key={"swiper_slide_" + item._id}>
            <BlogItem blog={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <SwiperNavigations />
    </div>
  );
};

export default BlogsCarousel;
