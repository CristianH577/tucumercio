import { Fragment, useState } from "react";

import { OBJ_CATEGORIES_ } from "../../consts/objectsLists";
import type { TypeObjCategorie } from "../../consts/types";

import {
  Button,
  Collapse,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

interface IntfProps {
  values?: string[];
  onSelect?: (direction: string[]) => void;
}

export default function ListCategories({ values = [], onSelect }: IntfProps) {
  const [open, setOpen] = useState<string[]>([]);

  const handleClick = (direction: string[]) => {
    onSelect && onSelect(direction);
  };

  const handleOpen = (keys: string[]) => {
    let open_: string[] = keys;
    const comparate = keys.length < open.length ? keys.length : open.length;

    if (keys[keys.length - 1] === open[comparate - 1]) {
      open_ = keys.slice(0, keys.length - 1);
    }

    setOpen(open_);
  };

  const Lists = (obj: TypeObjCategorie, prev: string[]) => {
    return (
      <List disablePadding className="font-[roboto] overflow-hidden">
        {Object.entries(obj).map(([id, item]) => (
          <Fragment key={id}>
            <ListItem
              disablePadding
              className={
                "" + (open.includes(id) ? "bg-primary/30 !underline py-1" : "")
              }
              // sx={{
              //   backgroundColor:
              //     values && values.includes(id)
              //       ? "var(--color-tertiary)"
              //       : // ? "rgba(var(--color-tertiary),0.5)"
              //         "",
              // }}
            >
              <ListItemButton
                title="Seccionar categoría"
                sx={{
                  pl: 1.5 + prev.length * 1.5,
                  "&:hover": {
                    color: "var(--color-warning)",
                    fontWeight: "bold",
                  },
                }}
                onClick={() => handleClick([...prev, id])}
              >
                {item.icon && <item.icon fontSize="small" />}
                <span
                  className="capitalize ms-1"
                  style={{
                    fontWeight: values && values.includes(id) ? "bold" : "",
                  }}
                >
                  {item.label || id}
                </span>
              </ListItemButton>

              {item.subs && (
                <Button
                  variant={open.includes(id) ? "contained" : "text"}
                  color={open.includes(id) ? "error" : "inherit"}
                  title="Desplegar lista"
                  sx={{
                    mx: 1,
                    "&:hover": {
                      color: "var(--color-warning)",
                    },
                  }}
                  onClick={() => handleOpen([...prev, id])}
                >
                  {open.includes(id) ? <ExpandLess /> : <ExpandMore />}
                </Button>
              )}
            </ListItem>

            {item.subs && (
              <Collapse
                in={open.includes(id)}
                timeout="auto"
                unmountOnExit
                className={"" + (open.includes(id) ? "bg-primary/50" : "")}
              >
                {Lists(item.subs, [...prev, id])}
              </Collapse>
            )}
          </Fragment>
        ))}
      </List>
    );
  };

  return Lists(OBJ_CATEGORIES_, []);
}
