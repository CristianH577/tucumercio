import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router";

import database from "../assets/database.json";
import {
  LIST_OFFERED,
  OBJ_ATTRIBUTES,
  OBJ_CONTACTS,
  OBJ_LOCALIDADES,
  OBJ_PAYMENTS,
  OBJ_SCHEDULE,
} from "../consts/objectsLists";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
} from "@mui/material";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ScheduleIcon from "@mui/icons-material/Schedule";
import type { TypeItemDb, TypeOffered } from "../consts/types";
import HeaderItemView from "./ItemView/HeaderItemView";

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

  const calle =
    data?.ubication?.street &&
    data.ubication.street +
      (data?.ubication?.number && " " + data.ubication.number);

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
            <HeaderItemView item={data} />
          </motion.section>

          <Divider />

          <motion.section className="space-y-4" variants={variants_sections}>
            <article className="space-y-2">
              <h2 className="text-lg font-semibold">Sobre el negocio</h2>
              {data.info.desc && <p className="indent-2">{data.info.desc}.</p>}

              {schedule && (
                <div>
                  <i className="inline-flex gap-0.5">
                    <ScheduleIcon /> Horarios:
                  </i>
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

            <section className="flex flex-col gap-2">
              {LIST_OFFERED.map((list) => {
                const items = data.offered?.[list.id as keyof TypeOffered];

                if (items) {
                  return (
                    <Accordion
                      key={list.id}
                      className="sm:w-fit !rounded-md"
                      title="Ver más"
                      classes={{ expanded: "!m-0" }}
                      sx={{
                        border: "4px solid var(--color-primary)",
                        "&:hover": {
                          borderColor: "var(--color-warning)",
                        },
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls={list.id + "-list-content"}
                        id={list.id + "-list-header"}
                        className="font-semibold rounded-md"
                        sx={{
                          "&:hover": {
                            color: "var(--color-warning)",
                          },
                        }}
                      >
                        {list.label}
                      </AccordionSummary>

                      <AccordionDetails
                        sx={{
                          paddingTop: 0,
                        }}
                      >
                        <motion.ol
                          className="list-disc list-inside"
                          {...variants_list}
                        >
                          {items.map((item, i) => (
                            <motion.li key={i} variants={variants_sections}>
                              {item}
                            </motion.li>
                          ))}
                        </motion.ol>
                      </AccordionDetails>
                    </Accordion>
                  );
                }
              })}
            </section>
          </motion.section>

          <Divider />

          <motion.section variants={variants_sections}>
            <h2 className="text-lg font-semibold">Contacto</h2>
            <motion.ol {...variants_list}>
              {Object.entries(OBJ_CONTACTS).map(([id, item_data]) => {
                const val = data.contact[id as keyof typeof data.contact];

                if (val) {
                  let arroba = false;
                  let href = item_data.link
                    ? val.href
                    : item_data.base
                    ? item_data.base + val.label
                    : "";

                  if (["ig", "x", "yt"].includes(id)) arroba = true;

                  if (id === "fb" && val.href) {
                    if (val.href) href = val.href;
                    if (val.label) arroba = true;
                  }

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
                      {href ? (
                        <a
                          href={href}
                          title={"Ir a " + item_data.label}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {arroba ? "@" : ""}
                          {val.label || "Link"}
                          <OpenInNewIcon fontSize="inherit" />
                        </a>
                      ) : (
                        val.label
                      )}
                    </motion.li>
                  );
                }
              })}
            </motion.ol>
          </motion.section>

          <Divider />

          <motion.section variants={variants_sections}>
            <h2 className="text-lg font-semibold">Ubicación</h2>
            {/* <motion.ul {...variants_list}>
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
            </motion.ul> */}

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {[
                calle,
                data.ubication.neighborhood,
                OBJ_LOCALIDADES[
                  data.ubication?.department as keyof typeof OBJ_LOCALIDADES
                ],
              ]
                .filter((e) => e !== undefined)
                .join(", ")}
            </motion.p>

            {data.ubication.references && (
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Referencias: {data.ubication.references}
              </motion.p>
            )}
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
