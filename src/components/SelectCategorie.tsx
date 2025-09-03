import { OBJ_CATEGORIES } from "../consts/objectsLists";
import type { TypeObjCategorie } from "../consts/types";

import { Option, Select } from "@mui/joy";

type TypeProps = {
  selected: string[];
  setSelected: (val: string[]) => void;
};
export default function SelectCategorie({
  selected = [],
  setSelected,
}: TypeProps) {
  const subs: TypeObjCategorie | undefined = OBJ_CATEGORIES[selected[0]]?.subs;
  const subs1: TypeObjCategorie | undefined = subs
    ? subs[selected[1] as keyof typeof subs]?.subs
    : undefined;

  return (
    <div className="space-y-2">
      <Select
        name="categorie0"
        placeholder="Seleccione"
        value={selected[0] || null}
        onChange={(_, val) => {
          let val_ = [];

          if (val) {
            val_[0] = val;
          }
          setSelected(val_);
        }}
      >
        <Option value="">
          <em>Quitar</em>
        </Option>

        {Object.entries(OBJ_CATEGORIES).map(([id, val]) => (
          <Option key={id} value={id}>
            {val.icon && <val.icon />} {val.label}
          </Option>
        ))}
      </Select>

      {subs && (
        <Select
          name="categorie1"
          placeholder="Seleccione"
          slotProps={{
            button: { sx: { textTransform: "capitalize" } },
          }}
          value={selected[1] || null}
          onChange={(_, val) => {
            let val_ = [...selected];

            if (val) {
              val_[1] = val;
            } else {
              val_ = val_.slice(0, 1);
            }

            setSelected(val_);
          }}
        >
          <Option value="">
            <em>Quitar</em>
          </Option>

          {Object.entries(subs).map(([id, val]) => (
            <Option key={id} value={id} className="capitalize">
              {val.icon && <val.icon />} {val.label || id}
            </Option>
          ))}
        </Select>
      )}

      {subs1 && (
        <Select
          name="categorie2"
          placeholder="Seleccione"
          slotProps={{
            button: { sx: { textTransform: "capitalize" } },
          }}
          value={selected[2] || null}
          onChange={(_, val) => {
            let val_ = [...selected];

            if (val) {
              val_[2] = val;
            } else {
              val_ = val_.slice(0, 2);
            }

            setSelected(val_);
          }}
        >
          <Option value="">
            <em>Quitar</em>
          </Option>

          {Object.entries(subs1).map(([id, val]) => (
            <Option key={id} value={id} className="capitalize">
              {val.icon && <val.icon />} {val.label || id}
            </Option>
          ))}
        </Select>
      )}
    </div>
  );
}
