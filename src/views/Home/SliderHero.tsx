import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";

import { Button } from "@mui/material";

import Image from "../../components/Image";

import slider1_sm from "../../assets/imgs/slider/slider-1-550h.webp";
import slider1_lg from "../../assets/imgs/slider/slider-1-800h.webp";
import slider2_sm from "../../assets/imgs/slider/slider-2-550h.webp";
import slider2_lg from "../../assets/imgs/slider/slider-2-1165h.webp";

// import AddBusinessIcon from "@mui/icons-material/AddBusiness";

// import { SvgTucuman } from "../../assets/svgs/svgsLogos";

// const slide1 = (
//   <div className="h-full flex flex-col items-center justify-center gap-4 p-4 overflow-hidden relative sm:flex-row-reverse sm:gap-8 md:gap-12">
//     <Image
//       src={slider2_sm}
//       className="object-cover h-full w-full"
//       classes={{ wrapper: "h-full w-full !absolute" }}
//       srcSet={`
//       ${slider2_sm} 640w,
//       ${slider2_lg} 800w,
//     `}
//     />

//     <div className="bg-primary/50 absolute inset-0 w-full h-full z-10"></div>

//     <div className="flex flex-col items-center gap-6 z-20">
//       <div className="font-bold bg-gradient-to-br from-warning to-warning/90 text-primary p-4 text-3xl xs:text-4xl sm:text-5xl lg:text-7xl w-fit sm:max-w-[300px] z-10 rounded-lg skew-6 xs:skew-3 xs:py-3 sm:p-6 shadow-md shadow-black lg:max-w-[650px] lg:px-6">
//         <div className="-skew-4 xs:-skew-2">
//           Encuentre negocios en toda la provincia
//         </div>
//       </div>

//       <Button
//         component={"a"}
//         href="/search"
//         variant="contained"
//         size="large"
//         color="error"
//         className="!text-3xl xs:!text-4xl sm:!text-5xl lg:!text-7xl -skew-6 xs:-skew-3"
//         title="Buscar negocios"
//       >
//         Buscar
//       </Button>
//     </div>

//     <SvgTucuman className="w-3/5 h-fit sm:w-fit sm:h-4/5 md:h-full drop-shadow-[-10px_10px_3px_rgba(0,0,0,.3)] z-10" />
//   </div>
// );

// const slide2 = (
//   <div className="h-full flex flex-col items-center justify-center p-4 overflow-hidden relative sm:flex-row md:gap-12">
//     <div className="bg-primary/20 absolute inset-0 w-full h-full z-10"></div>

//     <Image
//       src={slider1_sm}
//       className="object-cover h-full w-full"
//       classes={{ wrapper: "h-full w-full !absolute" }}
//       srcSet={`
//         ${slider1_sm} 640w,
//         ${slider1_lg} 800w,
//       `}
//     />

//     <div className="flex flex-col items-center gap-8 xs:gap-6 lg:gap-8 z-10">
//       <div className="font-bold bg-primary p-4 text-2xl xs:text-3xl sm:text-4xl lg:text-5xl w-fit sm:max-w-[300px] z-10 rounded-lg -skew-6 xs:-skew-3 xs:py-3 sm:p-6 shadow-md shadow-black lg:max-w-[650px] lg:px-6">
//         <div className="skew-4 xs:skew-2 text-center xs:break-keep">
//           Llene el formulario y muestre su negocio en el sitio
//         </div>
//       </div>

//       <Button
//         component={"a"}
//         href="https://forms.gle/wwY8AnEAs5JQ48ZP8"
//         target="_blank"
//         rel="noopener noreferrer"
//         variant="contained"
//         size="large"
//         color="warning"
//         className="!text-2xl xs:!text-4xl lg:!text-6xl"
//         title="Ir al formulario"
//         // skew-6 xs:skew-3
//       >
//         Completar
//       </Button>
//     </div>

//     <AddBusinessIcon className="drop-shadow-[-10px_10px_3px_rgba(0,0,0,.3)] text-primary !w-full !h-fit xs:max-w-80 xs:!w-3/5 sm:!w-fit sm:!h-4/5 md:!h-full z-10" />
//   </div>
// );

const slide3 = (
  <section className="overflow-hidden relative h-full">
    <Image
      src={slider2_sm}
      className="object-cover h-full w-full"
      classes={{ wrapper: "h-full w-full !absolute" }}
      srcSet={`
      ${slider2_sm} 640w,
      ${slider2_lg} 800w,
    `}
    />

    {/* <SvgTucuman className="w-4/5 h-fit sm:w-fit sm:h-4/5 md:h-[90%] drop-shadow-[-10px_10px_3px_rgba(0,0,0,.3)] absolute justify-self- top-4 left-4" /> */}

    <div
      className=" absolute left-0 h-full w-full bg-warning/90 flex flex-col justify-end items-end"
      style={{
        clipPath: "polygon(75% 0, 100% 0, 100% 100%, 0% 100%)",
      }}
    >
      <div className="w-3/5 sm:w-1/2 flex flex-col gap-4 items-center mb-8 text-center sm:me-8">
        <p className="font-bold text-3xl xs:text-4xl sm:text-5xl lg:text-7xl text-white break-keep">
          Encuentre negocios en toda la provincia
        </p>

        <Button
          component={"a"}
          href="/search"
          variant="contained"
          size="medium"
          color="error"
          className="!text-3xl xs:!text-4xl lg:!text-6xl"
          title="Buscar negocios"
        >
          Buscar
        </Button>
      </div>
    </div>
  </section>
);

const slide4 = (
  <section className="overflow-hidden relative h-full">
    <Image
      src={slider1_sm}
      className="object-cover h-full w-full"
      classes={{ wrapper: "h-full w-full !absolute" }}
      srcSet={`
        ${slider1_sm} 640w,
        ${slider1_lg} 800w,
      `}
    />
    <div
      className="absolute left-0 top-0 h-full w-full bg-primary/90 flex flex-col justify-end items-"
      style={{
        clipPath: "polygon(0 0, 25% 0, 100% 100%, 0 100%)",
      }}
    >
      <div className="w-3/5 sm:w-1/2 flex flex-col gap-4 items-center mb-8 ms-4 text-center sm:ms-8">
        <p className="font-bold text-3xl xs:text-4xl sm:text-5xl lg:text-7xl break-keep">
          Llene el formulario y muestre su negocio en el sitio
        </p>

        <Button
          component={"a"}
          href="/search"
          variant="contained"
          size="medium"
          color="warning"
          className="!text-3xl xs:!text-3xl lg:!text-6xl"
          title="Ir al formulario"
        >
          Completar
        </Button>
      </div>
    </div>
  </section>
);

const items = [slide3, slide4];
// slide2, slide1,

export default function SliderHero() {
  return (
    <Swiper
      className="shadow-md select-none w-screen h-[calc(100vh-67px)] sm:h-[50vh]"
      slidesPerView={1}
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      loop
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
    >
      {items.map((slide, i) => (
        <SwiperSlide key={i} className="h-">
          {slide}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
