import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";

// import img1 from "../../assets/imgs/slider/1.webp";
import Image from "../../components/Image";

import slider1_sm from "../../assets/imgs/slider/slider-1-550h.webp";
import slider1_lg from "../../assets/imgs/slider/slider-1-800h.webp";
import slider2_sm from "../../assets/imgs/slider/slider-2-550h.webp";
import slider2_lg from "../../assets/imgs/slider/slider-2-1165h.webp";

import { SvgTucuman } from "../../assets/svgs/svgsLogos";

const slide1 = (
  <div className="w-screen h-[calc(100vh-67px)] sm:h-[50vh] flex flex-col items-center justify-center gap-4 p-4 overflow-hidden relative sm:flex-row-reverse sm:gap-8 md:gap-12">
    <Image
      src={slider1_sm}
      className="object-cover h-full w-full"
      classes={{ wrapper: "h-full w-full !absolute" }}
      srcSet={`
        ${slider1_sm} 640w,
        ${slider1_lg} 800w,
      `}
    />

    <div className="font-bold bg-gradient-to-br from-warning to-warning/90 text-primary p-4 text-3xl xs:text-4xl sm:text-5xl w-fit sm:max-w-[300px] z-10 rounded-lg skew-6 xs:skew-3 xs:py-3 sm:p-6 shadow-md shadow-black lg:max-w-[650px] lg:px-6 lg:text-7xl">
      <div className="-skew-4 xs:-skew-2">
        Encuentre negocios en toda la provincia
      </div>
    </div>

    <SvgTucuman className="w-4/5 h-fit sm:w-fit sm:h-4/5 md:h-full drop-shadow-[-10px_10px_3px_rgba(0,0,0,.3)]" />
  </div>
);

const items = [
  { slide: slide1 },
  {
    label: "Tucumán",
    src: slider2_sm,
    srcSet: `
      ${slider2_sm} 640w,
      ${slider2_lg} 800w,
    `,
  },
];

export default function SliderHero() {
  return (
    <>
      <Swiper
        className="shadow-md select-none"
        slidesPerView={1}
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            {item.slide ? (
              item.slide
            ) : (
              <div className="w-screen h-[calc(100vh-67px)] sm:h-[50vh] flex items-center justify-center overflow-hidden relative">
                <Image
                  src={item.src}
                  className="object-cover h-full w-full"
                  classes={{ wrapper: "h-full w-full" }}
                  srcSet={item.srcSet}
                />
                <span className="font-bold bg-primary px-2 text-3xl xs:text-5xl sm:text-8xl lg:text-9xl -skew-6 absolute">
                  {item.label}
                </span>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
