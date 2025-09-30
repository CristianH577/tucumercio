import { motion } from "framer-motion";

import {
  OBJ_ATTRIBUTES,
  OBJ_CONTACTS,
  OBJ_LOCALIDADES,
} from "../../consts/objectsLists";
import type { TypeItemDb } from "../../consts/types";

import { Link } from "react-router";
import { CircularProgress, Divider, Tooltip } from "@mui/material";

import CardHeader from "./CardHeader";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

type TypeItemsViewProps = {
  items: TypeItemDb[];
  loading?: boolean;
};

const variants_card = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
  },
  hover: { scale: 1.025 },
};

const MotionLink = motion.create(Link);

export default function ItemsView({
  items = [],
  loading = false,
}: TypeItemsViewProps) {
  if (loading)
    return (
      <div className="flex justify-center h-screen">
        <CircularProgress />
      </div>
    );
  if (items.length < 1)
    return (
      <div className="flex justify-center">
        <span className="font-semibold text-xl">Sin resultados</span>
      </div>
    );

  return (
    <section className="grid xs:grid-cols-[repeat(auto-fit,_minmax(180px,300px))] sm:grid-cols-[repeat(auto-fit,_minmax(200px,300px))] gap-4 lg:gap-8 xs:justify-center mt-4">
      {items.map((item) => (
        <MotionLink
          key={item.id}
          variants={variants_card}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          to={"/search/" + item.id}
          title="Ver más detalles"
          className="border-3 border-tertiary/80 rounded-md p-2 flex flex-col gap-2 shadow-sm"
        >
          <CardHeader item={item} />

          <Divider variant="middle" />

          <p className="capitalize text-sm font-semibold text-center">
            {
              OBJ_LOCALIDADES[
                item.ubication.department as keyof typeof OBJ_LOCALIDADES
              ]
            }
            {item.ubication.neighborhood
              ? " - " + item.ubication.neighborhood
              : ""}
          </p>

          {item.attributes && (
            <>
              <Divider />
              <ol className="flex gap-2 flex-wrap text-sm justify-center text-neutral-500">
                {item.attributes.slice(0, 5).map((item) => {
                  const item_data =
                    OBJ_ATTRIBUTES[item as keyof typeof OBJ_ATTRIBUTES];
                  return (
                    <li key={item}>
                      {item_data.icon ? (
                        <Tooltip title={item_data.label}>
                          <item_data.icon />
                        </Tooltip>
                      ) : (
                        <span>{item_data.label}</span>
                      )}
                    </li>
                  );
                })}
                {item.attributes.length > 5 && (
                  <li>
                    <MoreHorizIcon />
                  </li>
                )}
              </ol>
            </>
          )}

          <Divider />

          <ol className="flex gap-2 flex-wrap justify-center text-neutral-500">
            {Object.keys(item.contact)
              .slice(0, 5)
              .map((item) => {
                const item_data =
                  OBJ_CONTACTS[item as keyof typeof OBJ_CONTACTS];
                return (
                  <li key={item}>
                    {item_data.icon ? (
                      <Tooltip title={item_data.label}>
                        <item_data.icon />
                      </Tooltip>
                    ) : (
                      <span>{item_data.label}</span>
                    )}
                  </li>
                );
              })}

            {Object.keys(item.contact).length > 5 && (
              <li>
                <MoreHorizIcon />
              </li>
            )}
          </ol>

          <Divider variant="middle" />
        </MotionLink>
      ))}
    </section>
  );
}
