import { useNavigate } from "react-router";

import type { MouseEvent } from "react";

import CardHome from "./Home/CardHome";
import MapTuc from "./Home/MapTuc";
import SliderCategorie from "./Home/SliderCategorie";
import SliderHero from "./Home/SliderHero";

import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="!max-w-none space-y-6 pb-6">
      <SliderHero />

      <section className="flex flex-col min-[1800px]:items-center">
        <SliderCategorie id="products" />
        <SliderCategorie className="sm:flex-row-reverse" id="services" />
      </section>

      <section className="flex flex-wrap justify-center bg-primary/80 py-8 text-neutral">
        <CardHome
          title="¿Por qué usar el sitio?"
          text="El sitio está orientado para todo tipo de comercio, desde
          emprendimientos hasta compañías. Al realizar una búsqueda podrá
          encontrar desde un emprendimiento hasta algo profesional
          permitiendo elegir entre una mayor variedad de precios y trabajos."
          IconImg={TravelExploreIcon}
        />
        <CardHome
          title="¿Por qué estar en el sitio?"
          text="Este sitio se dedica a facilitar a los clientes encontrar lo que
              buscan comprar y a los comercios llegar a los clientes mediante un
              sistema de búsqueda simple y rápido por lo que aparecer en las
              búsquedas eleva las posibilidades de concretar ventas y disminuye
              costos de publicidad"
          IconImg={ScreenSearchDesktopIcon}
          classes={{
            img: "sm:order-3",
          }}
        />
      </section>

      <section className="flex flex-col max-md:items-center max-md:text-center px-2 sm:px-4 sm:flex-row-reverse justify-center sm:gap-8">
        <h1 className="font-bold text-6xl md:text-7xl max-w-96 py-8 md:py-16">
          Encuentre negocios en su localidad
        </h1>

        <MapTuc
          className="w-full h-fit max-w-[400px] sm:max-w-[350px] max-md:min-w-1/2"
          onClick={(e: MouseEvent<SVGGElement>) => {
            const id = e.currentTarget.id;
            if (id) {
              navigate("/search?ubication=" + id);
            }
          }}
        />
      </section>
    </main>
  );
}
