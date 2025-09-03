import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router";

import database from "../assets/database.json";
import {
  OBJ_ATTRIBUTES,
  OBJ_CONTACTS,
  OBJ_LOCALIDADES,
  OBJ_PAYMENTS,
  OBJ_SCHEDULE,
  OBJ_UBICATION,
} from "../consts/objectsLists";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
} from "@mui/material";

import CardHeader from "../components/CardHeader";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ExpandMore from "@mui/icons-material/ExpandMore";
import type { TypeItemDb } from "../consts/types";

const DB: TypeItemDb[] = database;
const variants_sections = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};
const variants_list = {
  variants: {
    visible: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  },
  initial: "hidden",
  animate: "visible",
};

export default function ItemView() {
  const { id } = useParams();

  const getData = () => {
    const data_ = DB.find((item) => item.id === Number(id));

    return data_;
  };

  const [data] = useState(getData());

  const schedule = data && data.info.schedule;

  return (
    <motion.main
      className="flex flex-col gap-4 px-2 py-4 xs:p-4 sm:p-8"
      style={{ maxWidth: "900px" }}
      variants={{
        visible: {
          transition: {
            delayChildren: 0.1,
            staggerChildren: 0.1,
          },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      {!data ? (
        <section className="flex flex-col items-center justify-center gap-4 flex-1">
          <span className="font-semibold text-3xl">Sin resultados</span>

          <Button component={Link} to="/search" variant="contained">
            Volver
          </Button>
        </section>
      ) : (
        <>
          <motion.section variants={variants_sections}>
            <CardHeader
              item={data}
              classes={{ img: "w-full max-w-[200px] max-h-[150px]" }}
              size="lg"
              slotsProps={{
                img: {
                  width: 200,
                  height: 150,
                },
              }}
            />
          </motion.section>

          <Divider />

          <motion.section className="space-y-4" variants={variants_sections}>
            <article className="space-y-2">
              <h2 className="text-lg font-semibold">Sobre el negocio</h2>
              {data.info.desc && <p className="indent-2">{data.info.desc}</p>}

              {schedule && (
                <div>
                  <i>Horarios:</i>
                  <ol className="list-inside">
                    {schedule.map((list, i) => (
                      <li key={i}>
                        {OBJ_SCHEDULE[list[0] as keyof typeof OBJ_SCHEDULE]}
                        {list[1] &&
                          " a " +
                            OBJ_SCHEDULE[list[1] as keyof typeof OBJ_SCHEDULE]}
                        , {list[2]}-{list[3]}hs
                        {list[4] && " y " + list[4] + "-" + list[5] + "hs"}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </article>

            {(data.attributes || data.paymentMethods) && (
              <motion.ol className="flex flex-wrap gap-4" {...variants_list}>
                {data.attributes &&
                  Object.entries(OBJ_ATTRIBUTES).map(
                    ([id, item_data]) =>
                      data.attributes?.includes(id) && (
                        <motion.li
                          key={id}
                          className="bg-primary/80 rounded-full py-2 px-4 text-neutral shadow"
                          variants={{
                            hidden: { opacity: 0, scale: 0 },
                            visible: { opacity: 1, scale: 1 },
                          }}
                        >
                          {item_data.icon && (
                            <item_data.icon className="text-warning" />
                          )}{" "}
                          {item_data.label}
                        </motion.li>
                      )
                  )}
                {data.paymentMethods &&
                  Object.entries(OBJ_PAYMENTS).map(
                    ([id, item_data]) =>
                      data.paymentMethods?.includes(id) && (
                        <motion.li
                          key={id}
                          className="bg-emerald-300/80 rounded-full py-2 px-4 text-neutral shadow"
                          variants={{
                            hidden: { opacity: 0, scale: 0 },
                            visible: { opacity: 1, scale: 1 },
                          }}
                        >
                          {item_data.icon && (
                            <item_data.icon className="text-emerald-600" />
                          )}{" "}
                          {item_data.label}
                        </motion.li>
                      )
                  )}
              </motion.ol>
            )}

            {data.info.items && (
              <Accordion
                className="sm:w-fit"
                title="Ver más"
                sx={{
                  boxShadow: "none",
                  "&::before": {
                    display: "none",
                  },
                  border: "4px solid var(--color-primary)",
                  borderRadius: "10px",
                  "&:hover": {
                    borderColor: "var(--color-warning)",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="items-list-content"
                  id="items-list-header"
                  className="font-semibold rounded-md"
                  sx={{
                    "&:hover": {
                      color: "var(--color-warning)",
                    },
                    "&.Mui-expanded": {
                      minHeight: 36,
                    },
                    "& .MuiAccordionSummary-content": { m: 1 },
                  }}
                >
                  Se ofrece
                </AccordionSummary>

                <AccordionDetails>
                  <motion.ol
                    className="list-disc list-inside"
                    {...variants_list}
                  >
                    {data.info.items.map((item, i) => (
                      <motion.li key={i} variants={variants_sections}>
                        {item}
                      </motion.li>
                    ))}
                  </motion.ol>
                </AccordionDetails>
              </Accordion>
            )}
          </motion.section>

          <Divider />

          <motion.section variants={variants_sections}>
            <h2 className="text-lg font-semibold">Contacto</h2>
            <motion.ol {...variants_list}>
              {Object.entries(OBJ_CONTACTS).map(([id, item_data]) => {
                const val = data.contact[id as keyof typeof data.contact];
                if (val) {
                  const href =
                    id === "whatsapp"
                      ? "https://api.whatsapp.com/send?phone=54" +
                        val.label +
                        "&text=Hola. Encontre el contacto en Tucumercio."
                      : id === "mail"
                      ? "mailto:" + val.label
                      : val.href || "#";

                  // if (["ig", "fb", "x"].includes(id)) {
                  //   val.label = "@" + val.label;
                  // }
                  return (
                    <motion.li
                      key={id}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      {item_data.icon && (
                        <item_data.icon
                          fontSize="inherit"
                          style={{
                            color: item_data.color,
                          }}
                        />
                      )}{" "}
                      {item_data.label}:{" "}
                      <a
                        href={href}
                        title={"Ir a " + item_data.label}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {["ig", "fb", "x"].includes(id) && "@"}
                        {val.label || "Link"}{" "}
                        <OpenInNewIcon fontSize="inherit" />
                      </a>
                    </motion.li>
                  );
                }
              })}
            </motion.ol>
          </motion.section>

          <Divider />

          <motion.section variants={variants_sections}>
            <h2 className="text-lg font-semibold">Ubicación</h2>
            <motion.ul {...variants_list}>
              {Object.entries(OBJ_UBICATION).map(([id, obj]) => {
                const val = data.ubication?.[id as keyof typeof data.ubication];
                return val ? (
                  <motion.li
                    key={id}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    {obj.label}:{" "}
                    {id === "department"
                      ? OBJ_LOCALIDADES[val as keyof typeof OBJ_LOCALIDADES]
                      : val}
                  </motion.li>
                ) : null;
              })}
            </motion.ul>
          </motion.section>

          {data.tags && (
            <>
              <Divider />

              <motion.section
                className="text-sm text-neutral-500"
                variants={variants_sections}
              >
                #Tags: {data.tags.join(", ")}
              </motion.section>
            </>
          )}
        </>
      )}
    </motion.main>
  );
}
