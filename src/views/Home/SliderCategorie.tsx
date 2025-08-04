import { OBJ_CATEGORIES } from "../../consts/objectsLists";

import { Button } from "@mui/material";
import { Link } from "react-router";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";

interface IntfProps {
  id: "products" | "services";
  className?: string;
}

export default function SliderCategorie({
  className = "",
  id = "products",
}: IntfProps) {
  const data = OBJ_CATEGORIES[id];
  if (!data) {
    return (
      <article className="w-full h-52 border-8 border-primary rounded-md flex items-center justify-center uppercase my-2">
        Sin elementos
      </article>
    );
  }
  return (
    <article
      className={
        "SliderCategorie flex flex-col gap-2 p-2 sm:p-6 sm:flex-row font-semibold text-3xl max-w-[1800px]" +
        (className ? " " + className : "")
      }
    >
      <Button
        component={Link}
        to={"/search?categories=" + id}
        title="Ver la categoría"
        className="w-full sm:max-w-52 h-52 bg-gradient-to-br from-primary to-secondary-ligth hover:from-warning hover:to-warning/20"
        sx={{
          color: "var(--color-neutral)",
          fontSize: "inherit",
          fontWeight: "bold",
          "&:hover": {
            color: "var(--color-secondary-ligth)",
          },
        }}
      >
        {data.label}
      </Button>

      <div className="w-full overflow-hidden relative px-8 text-2xl">
        <Swiper
          className="w-full h-52"
          spaceBetween={10}
          breakpoints={{
            520: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 1,
            },
            720: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
            1500: {
              slidesPerView: 5,
            },
          }}
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {data.subs &&
            Object.entries(data.subs).map(([id, item]) => {
              const Icon = "icon" in item ? item.icon : null;
              return (
                <SwiperSlide
                  key={id}
                  className="bg-gradient-to-br from-tertiary to-tertiary/20 hover:from-warning hover:to-warning/20 rounded-md"
                >
                  <Button
                    component={Link}
                    to={"/search?categories=" + id}
                    title="Ver la categoría"
                    className="h-full w-full"
                    sx={{
                      color: "var(--color-secondary-ligth)",
                      fontSize: "inherit",
                      fontWeight: "bold",
                      fontFamily: "unset",
                      textTransform: "capitalize",
                      justifyContent: "start",
                      alignItems: "start",
                      pl: 4,
                      pb: 12,
                      pt: 2,
                    }}
                  >
                    {Icon && (
                      <Icon
                        className="absolute right-2 bottom-0 text-tertiary/50"
                        sx={{
                          height: "80%",
                          width: "fit-content",
                        }}
                      />
                    )}
                    <span className="z-10">
                      {item.labelShort || item.label || id}
                    </span>
                  </Button>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </article>
  );
}
