import { OBJ_CAT_STRUCTURE, OBJ_CATEGORIES_DATA } from "../consts/objectsLists";

import type { TypeSubCategories, TypeCategories } from "../consts/types";

import { Checkbox, List, ListItem, Option, Select } from "@mui/joy";

interface IntfProps {
  selected: TypeCategories;
  setSelected: (val: TypeCategories) => void;
  className?: string;
}

export default function SelectCategorie({
  selected = {},
  setSelected,
  className,
}: IntfProps) {
  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;

    const selected_: TypeCategories = { ...selected };

    if (name in selected_) {
      delete selected_[name as keyof TypeCategories];
    } else {
      selected_[name as keyof TypeCategories] = {};
    }

    setSelected(selected_);
  };

  const handleSelectCat1 = (id: string, values: string[]) => {
    const selected_ = structuredClone(selected);
    const id_ = id as keyof typeof selected;

    selected_[id_] = {};

    if (!values.includes("")) {
      values.forEach((id2) => {
        let val_ = {};
        if (selected[id_] && id2 in selected[id_]) {
          val_ = selected[id_][id2] || {};
        }

        if (selected_[id_]) selected_[id_][id2] = val_;
      });
    }

    setSelected(selected_);
  };

  const handleSelectCat2 = (values: string[]) => {
    const selected_: TypeSubCategories = structuredClone(selected);

    Object.entries(selected).forEach(([id, val]) => {
      if (values.some((val) => val.includes(id + "_"))) {
        selected_[id] = {};
        Object.keys(val).forEach((id2) => {
          if (selected_[id]) {
            selected_[id][id2] = {};

            if (!values.includes("")) {
              const cats3 = values.filter((e) => e.includes(id2 + "_"));

              if (cats3.length > 0) {
                cats3.forEach((id3) => {
                  if (selected_[id] && selected_[id][id2])
                    selected_[id][id2][id3] = {};
                });
              }
            }
          }
        });
      }
    });

    setSelected(selected_);
  };

  return (
    <div
      className={"flex flex-wrap gap-2" + (className ? " " + className : "")}
    >
      {/* <List
        orientation="horizontal"
        wrap
        className="gap-2"
        sx={{ "--ListItem-radius": "20px" }}
      >
        <ListItem>
          <Checkbox
            overlay
            disableIcon
            label="Tiendas"
            name="prod"
            checked={"prod" in selected}
            onChange={handleCheck}
          />
        </ListItem>
        <ListItem>
          <Checkbox
            overlay
            disableIcon
            label="Servicios"
            name="serv"
            checked={"serv" in selected}
            onChange={handleCheck}
          />
        </ListItem>
      </List> */}

      {["prod", "serv"].map((id) => {
        const cats2 = selected[id as keyof typeof selected] ?? {};

        const subs = Object.keys(cats2).filter(
          (sub) => sub in OBJ_CAT_STRUCTURE
        );

        let subs_values: string[] = [];
        subs.forEach((sub) => {
          subs_values = [...subs_values, ...Object.keys(cats2[sub] || {})];
        });

        return (
          <div
            key={id}
            className="flex flex-col gap-2 border border-neutral-300 rounded-md p-2 w-fit max-w-full"
          >
            <Checkbox
              disableIcon
              label={OBJ_CATEGORIES_DATA[id].label}
              name={id}
              className="px-4 py-2 w-fit"
              slotProps={{
                checkbox: {
                  sx: {
                    borderRadius: ".375rem",
                  },
                },
              }}
              checked={id in selected}
              onChange={handleCheck}
            />

            {id in selected && (
              <Select
                placeholder="Seleccione"
                name={"categorie_" + id}
                slotProps={{
                  button: { sx: { textTransform: "capitalize" } },
                  listbox: { placement: "bottom-start" },
                }}
                multiple
                className="max-w-72"
                value={Object.keys(cats2) || null}
                onChange={(_, vals) => handleSelectCat1(id, vals)}
              >
                <Option value="">
                  <em>Limpiar</em>
                </Option>

                {OBJ_CAT_STRUCTURE[id as keyof typeof OBJ_CAT_STRUCTURE].map(
                  (id2) => {
                    const dataCat = OBJ_CATEGORIES_DATA[id2];
                    return (
                      <Option key={id2} value={id2} className="capitalize">
                        {dataCat.icon && <dataCat.icon />} {dataCat.label}
                      </Option>
                    );
                  }
                )}
              </Select>
            )}

            {subs.length > 0 && (
              <Select
                placeholder="Seleccione"
                multiple
                className="max-w-72"
                slotProps={{
                  listbox: {
                    component: "div",
                    sx: {
                      overflow: "auto",
                      "--List-padding": "0px",
                      "--ListItem-radius": "0px",
                    },
                  },
                }}
                value={subs_values || null}
                onChange={(_, values) => handleSelectCat2(values as string[])}
              >
                <Option value="">
                  <em>Limpiar</em>
                </Option>

                {subs.map((sub) => {
                  const subs2 =
                    OBJ_CAT_STRUCTURE[sub as keyof typeof OBJ_CAT_STRUCTURE];
                  const cat2_data = OBJ_CATEGORIES_DATA[sub];

                  return (
                    <List
                      key={sub}
                      aria-labelledby={`select-group-${sub}`}
                      sx={{ "--ListItemDecorator-size": "28px" }}
                    >
                      <ListItem
                        id={`select-group-${sub}`}
                        sticky
                        className="font-semibold  !bg-primary !text-warning"
                      >
                        {cat2_data.icon && <cat2_data.icon />}
                        {cat2_data.label}
                      </ListItem>

                      {subs2.map((id2) => {
                        const cat3_data = OBJ_CATEGORIES_DATA[id2];
                        return (
                          <Option
                            key={id2}
                            value={id2}
                            label={cat3_data?.label}
                          >
                            {cat3_data.icon && <cat3_data.icon />}
                            {cat3_data?.label}
                          </Option>
                        );
                      })}
                    </List>
                  );
                })}
              </Select>
            )}
          </div>
        );
      })}
    </div>
  );
}
