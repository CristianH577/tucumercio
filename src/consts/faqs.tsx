import type { TypeFaqsItem } from "./types";

export const LIST_FAQS_CLIENT: TypeFaqsItem[] = [
  {
    quest: "Que se puede hacer en el sitio",
    answer:
      "El sitio tiene la finalidad de facilitar a las personas encontrar productos o servicios en la provincia de Tucuman; y al sector comercial exponerse de forma sencilla sea un negocio grande o un emprendimiento",
  },
  {
    quest: "Que responsabilidad tiene el sitio",
    answer:
      "Este sitio se limita a facilitar la información de los negocios adheridos y publicitarlos. No se realizan compras a través del sitio ni interviene en las compras realizadas en los comercios adheridos",
  },
  {
    quest: "Usar el sitio tiene algún costo",
    answer:
      "No, utilizar el sitio no tiene costo para ser utilizado, solo para aquellos que quieran adherirse y aparecer en las búsquedas",
    tags: ["pago", "pagar"],
  },
];

export const LIST_FAQS_COMMERCE: TypeFaqsItem[] = [
  {
    quest: "Como aparezco en el sitio",
    answer:
      "Solamente tiene que completar el formulario(link al final de la página) con los datos del negocio y esperar a que se corrobore la información y se agregue al sitio",
    // answer: (
    //   <>
    //     Solamente tiene que completar este{" "}
    //     <a
    //       href="#"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       title="Ir al formulario"
    //       className="text-warning font-semibold hover:underline"
    //     >
    //       formulario
    //     </a>{" "}
    //     con los datos del negocio y esperar a que se corrobore la información y
    //     se agregue al sitio
    //   </>
    // ),
  },
  {
    quest: "Que costo tiene estar en el sitio",
    answer:
      "Por ahora el sitio está en pruebas por lo que no tiene costo alguno uso. Pero en un futuro podría tener un costo mensual de entre $1000-5000(pesos argentinos). Dado el caso se notificaría antes a los comercios adheridos para confirmar si desean continuar su adhesión",
    tags: ["pago", "pagar"],
  },
  {
    quest: "Como cambio la información mostrada de mi negocio",
    answer:
      "Para realizar cambios se deben informar los mismos a través de los medios de contacto que aparecen al final del sitio y esperar a que los cambios sean realizados",
  },
  {
    quest: "Como doy de baja mi adhesión",
    answer:
      "Si desea que su negocio ya no aparezca en la página debe solicitarlo a través de los medios de contacto que aparecen al final del sitio y esperar que se atienda la solicitud",
  },
  {
    quest: "Puedo adherirme si tengo un emprendimiento o mi negocio es pequeño",
    answer:
      "Si, el sitio está orientado a mostrar cualquier tipo de actividad comercial sin importar el rubro o tamaño",
  },
  {
    quest: "Que rubros pueden aparecer",
    answer:
      "Cualquier actividad comercial puede solicitar estar en el sitio siempre y cuando sea realizada o este ubicada en la provincia de Tucumán",
  },
];
