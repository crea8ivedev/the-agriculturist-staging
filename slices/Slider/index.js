"use client";

import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const Slider = ({ slice }) => {
  if (slice.primary.hide_module) {
    return null
  }
  
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{
          clickable: true,
          bulletClass:"swiper-pagination-bullet",
          renderBullet: (index, className) => {
            return `<span class="${className}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.8553 13.025L16 12.8V12.775L14.8299 12.65L14.9062 12.45L13.6343 12.325L13.8378 12.175L12.5151 12.15L12.5914 11.85L11.1669 12.175L11.2432 11.9L10.531 12.175L10.4547 12.075L11.9555 11.4L11.6248 11.2L13.2019 10.3L12.8712 10.075L14.0413 8.925L13.7107 8.95L14.7281 7.75L14.4738 7.625L15.4149 6.5H15.3641L14.1431 7.275L14.0413 7L12.7186 7.85L12.7695 7.525L11.4722 8.525L11.2941 8.175L10.2003 9.625L10.0731 9.25L9.20827 10.65L9.15739 10.6L9.58983 9.625H9.25914L9.89507 7.575L9.41177 7.75L9.89507 5.425L9.38633 5.575L9.25914 3.45L9.00477 3.775L8.69952 1.725L8.3434 1.875L8.01272 0H7.96184L7.6566 1.875L7.30048 1.725L6.99523 3.775L6.74086 3.45L6.61367 5.575L6.10493 5.425L6.58824 7.75L6.10493 7.575L6.74086 9.625H6.41017L6.84261 10.6L6.79173 10.65L5.90143 9.25L5.74881 9.6L4.68045 8.175L4.50238 8.525L3.20509 7.525L3.25596 7.85L1.93323 7L1.83148 7.275L0.610493 6.5L0.585056 6.525L1.52623 7.65L1.27186 7.775L2.28935 8.975L1.95866 8.95L3.12878 10.1L2.79809 10.325L4.3752 11.225L4.04452 11.425L5.54531 12.1L5.44356 12.175L4.75676 11.95L4.83307 12.225L3.40859 11.875L3.4849 12.175L2.16216 12.2L2.36566 12.35L1.0938 12.475L1.17011 12.675L0 12.8V12.825L1.11924 13.025L1.01749 13.225L2.26391 13.45L2.03498 13.6L3.33227 13.725L3.25596 14L4.70588 13.8L4.5787 14.075L5.87599 13.775L5.85056 13.95L6.91892 13.575L6.94436 13.625L6.28299 13.9L6.46105 14L5.77424 14.375L5.90143 14.475L5.39269 14.95H5.51987L5.062 15.45L5.16375 15.5L4.73132 15.975V16L5.2655 15.675L5.29094 15.8L5.87599 15.45L5.85056 15.575L6.43561 15.15L6.48649 15.3L6.99523 14.7L7.0461 14.85L7.4531 14.25L7.52941 14.325L7.91097 13.6L7.78378 16H7.98728H8.19078L8.06359 13.6L8.47059 14.325L8.5469 14.25L8.9539 14.85L9.00477 14.7L9.51351 15.3L9.56439 15.15L10.1494 15.575L10.124 15.45L10.7091 15.8L10.7345 15.675L11.2687 16V15.975L10.8108 15.5L10.9126 15.45L10.4547 14.95H10.5819L10.0731 14.475L10.2003 14.375L9.51351 14L9.6407 13.925L9.00477 13.625L9.03021 13.575L10.0986 13.95L10.0731 13.775L11.3704 14.075L11.2432 13.8L12.6932 14L12.5914 13.725L13.8887 13.6L13.6598 13.45L14.9062 13.225L14.8553 13.025Z" fill="#F9F4EF" fill-opacity="0.4"/></svg></span>`;
          }
        }} modules={[Pagination]} 
        className="h-screen w-full"
      >
        {slice.primary.slides.map((item, index) => (
          <SwiperSlide key={index} className="relative h-full w-full">
            <div className="absolute inset-0 h-full w-full">
              <PrismicNextImage
                alt="image"
                field={item.slide_image}
                className="h-full w-full object-cover "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#004D43] to-transparent via-transparent via-50%"></div>
            </div>
            <div className="relative z-10 flex h-full w-full flex-col items-center justify-center bg-black/40 p-8">
              <div className="max-w-3xl text-center text-white">
                <PrismicRichText
                  field={item.slide_text}
                  components={{
                    paragraph: ({ children }) => (
                      <p className="text-lg md:text-xl mb-4">{children}</p>
                    ),
                    heading1: ({ children }) => (
                      <h1 className="!h1-text md:text-5xl  mb-6">
                        {children}
                      </h1>
                    ),
                  }}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
