import database from "../assets/database.json";
import type {
  TypeCategories,
  TypeItemDb,
  TypeOffered,
  TypeSchedule,
} from "../consts/types";
import {
  LIST_OFFERED,
  OBJ_ATTRIBUTES,
  OBJ_CONTACTS,
  OBJ_LOCALIDADES,
  OBJ_PAYMENTS,
} from "../consts/objectsLists";

import { useState } from "react";

import {
  Select,
  Option,
  FormLabel,
  FormControl,
  Input,
  Textarea,
  Button,
  Divider,
  Checkbox,
} from "@mui/joy";

import InputAddToList from "./FormsView/InputAddToList";
import InputAddShedule from "./FormsView/InputAddShedule";
import SelectCategorie from "../components/SelectCategorie";

const fv_add_default: TypeItemDb = {
  id: 0,
  categories: {
    prod: {},
  },
  info: {
    label: "",
    logo: false,
    type: "store",
    desc: "",
    schedule: [],
  },
  offered: {},
  contact: {},
  ubication: { department: "capital", references: "" },
  attributes: [],
  paymentMethods: ["cash"],
  tags: [],
};

export default function FormsView() {
  const [fvAdd, setFvAdd] = useState<TypeItemDb>(fv_add_default);
  const [searchValues, setSearchValues] = useState({
    id: "",
    text: "",
  });

  const handleSend = () => {
    const fvAdd_ = structuredClone(fvAdd);

    if (!fvAdd_.id) {
      const last_id = database.at(-1)?.id || 0;
      fvAdd_.id = last_id ? last_id + 1 : 0;
    }

    ["attributes", "paymentMethods", "tags"].forEach((key) => {
      // @ts-ignore
      if (!fvAdd_[key]?.length) delete fvAdd_[key];
    });

    ["items", "itemsNo", "schedule"].forEach((key) => {
      // @ts-ignore
      if (!fvAdd_.info[key]?.length) delete fvAdd_.info[key];
    });

    // @ts-ignore
    if (!Object.keys(fvAdd_.contact).length) delete fvAdd_.contact;
    if (!fvAdd_.info.logo) delete fvAdd_.info.logo;

    if (fvAdd_.ubication.references === "") delete fvAdd_.ubication.references;

    if (fvAdd_.offered) {
      if (Object.keys(fvAdd_.offered).length < 1) {
        delete fvAdd_.offered;
      } else {
        const offered_: TypeOffered = {};
        Object.keys(fvAdd_.offered).forEach((key) => {
          const key_ = key as keyof typeof fvAdd_.offered;
          const list = fvAdd_.offered && fvAdd_.offered[key_];
          if (list?.length) offered_[key_] = list;
        });
        fvAdd_.offered = offered_;
      }
    }

    console.log(fvAdd_);
  };

  const handleSearchEdit = () => {
    const id = searchValues.id;
    if (id) {
      const find = database.find((e) => e.id === Number(id));
      if (find) {
        setFvAdd(structuredClone(find));
      }
    }
  };

  return (
    <main className="p-2 xs:p-4 sm:p-6 space-y-8">
      <section className="max-w-96">
        <FormControl>
          <FormLabel>Buscar</FormLabel>
          <Input
            placeholder="Nombre"
            name="label"
            endDecorator={
              <Button variant="soft" onClick={handleSearchEdit}>
                Editar
              </Button>
            }
            value={searchValues.text}
            onChange={(e) => {
              setSearchValues({ ...searchValues, text: e.target.value });
            }}
          />
        </FormControl>

        <Input
          type="number"
          placeholder="ID"
          name="serachID"
          endDecorator={
            <Button variant="soft" onClick={handleSearchEdit}>
              Editar
            </Button>
          }
          value={searchValues.id}
          onChange={(e) => {
            setSearchValues({ ...searchValues, id: e.target.value });
          }}
        />
      </section>

      <section>
        <div className="mb-2">
          <h1>Básico</h1>
          <Divider />
        </div>

        <article className="flex flex-col items-start gap-2">
          <div className="flex flex-col gap-2 w-full max-w-80">
            <FormLabel>Categoria</FormLabel>
            <SelectCategorie
              selected={fvAdd.categories}
              setSelected={(val: TypeCategories) =>
                setFvAdd({ ...fvAdd, categories: val })
              }
            />
          </div>

          <FormControl>
            <FormLabel>Nombre</FormLabel>
            <Input
              placeholder="Mi negocio"
              name="label"
              value={fvAdd.info.label}
              onChange={(e) => {
                const fvAdd_ = structuredClone(fvAdd);
                fvAdd_.info.label = e.target.value;
                setFvAdd(fvAdd_);
              }}
            />
          </FormControl>
          <Checkbox
            label="Logo"
            name="logo"
            checked={fvAdd.info.logo}
            onChange={(e) => {
              const fvAdd_ = structuredClone(fvAdd);
              fvAdd_.info.logo = e.target.checked;
              setFvAdd(fvAdd_);
            }}
          />
          {/* <FormControl>
            <FormLabel htmlFor="select-type-button" id="select-type-label">
              Tipo de negocio
            </FormLabel>
            <Select
              placeholder="Seleccione"
              name="type"
              slotProps={{
                root: { sx: { width: 200 } },
                button: {
                  id: "select-type-button",
                  "aria-labelledby": "select-type-label select-type-button",
                },
              }}
              value={fvAdd.info.type as string}
              onChange={(_, val) => {
                const fvAdd_ = structuredClone(fvAdd);
                fvAdd_.info.type = val || "";
                setFvAdd(fvAdd_);
              }}
            >
              {Object.entries(types).map(([id, val]) => (
                <Option key={id} value={id}>
                  {val.icon && <val.icon />} {val.label}
                </Option>
              ))}
            </Select>
          </FormControl> */}

          <FormLabel>Horarios</FormLabel>
          <InputAddShedule
            currentVal={fvAdd.info.schedule || []}
            onAdd={(val: TypeSchedule[]) => {
              const fvAdd_ = structuredClone(fvAdd);
              fvAdd_.info.schedule = val;
              setFvAdd(fvAdd_);
            }}
          />
        </article>
      </section>

      <section>
        <div className="mb-2">
          <h1>Ubicación</h1>
          <Divider />
        </div>

        <article className="flex flex-col items-start gap-4">
          <FormControl>
            <FormLabel>Departamento</FormLabel>
            <Select
              placeholder="Seleccione"
              name="department"
              value={fvAdd.ubication.department}
              onChange={(_, val) => {
                const fvAdd_ = structuredClone(fvAdd);
                fvAdd_.ubication.department = val || "";
                setFvAdd(fvAdd_);
              }}
            >
              {Object.entries(OBJ_LOCALIDADES).map(([id, val]) => (
                <Option key={id} value={id}>
                  {val}
                </Option>
              ))}
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Barrio</FormLabel>
            <Input
              name="neighborhood"
              value={fvAdd.ubication.neighborhood || ""}
              onChange={(e) => {
                const fvAdd_ = structuredClone(fvAdd);
                fvAdd_.ubication.neighborhood = e.target.value;
                setFvAdd(fvAdd_);
              }}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Calle</FormLabel>
            <Input
              name="street"
              value={fvAdd.ubication.street || ""}
              onChange={(e) => {
                const fvAdd_ = structuredClone(fvAdd);
                fvAdd_.ubication.street = e.target.value;
                setFvAdd(fvAdd_);
              }}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Número</FormLabel>
            <Input
              name="number"
              type="number"
              value={fvAdd.ubication.number || ""}
              onChange={(e) => {
                const fvAdd_ = structuredClone(fvAdd);
                fvAdd_.ubication.number = Number(e.target.value);
                setFvAdd(fvAdd_);
              }}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Referencias</FormLabel>
            <Textarea
              minRows={2}
              slotProps={{
                textarea: {
                  name: "referencias",
                },
              }}
            />
          </FormControl>
        </article>
      </section>

      <section>
        <div className="mb-2">
          <h1>Sobre el negocio</h1>
          <Divider />
        </div>

        <article className="flex flex-col items-start gap-4">
          <FormControl>
            <FormLabel>Atributos</FormLabel>
            <Select
              name="attributes"
              placeholder="Seleccione"
              multiple
              slotProps={{
                root: { sx: { width: 300 } },
              }}
              value={fvAdd.attributes}
              onChange={(_, val) => {
                const fvAdd_ = structuredClone(fvAdd);
                fvAdd_.attributes = val as string[];
                setFvAdd(fvAdd_);
              }}
            >
              {Object.entries(OBJ_ATTRIBUTES).map(([id, val]) => (
                <Option key={id} value={id}>
                  {val.icon && <val.icon />} {val.label}
                </Option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Métodos de pago</FormLabel>
            <Select
              name="paymentMethods"
              placeholder="Seleccione"
              multiple
              slotProps={{
                root: { sx: { width: 300 } },
              }}
              value={fvAdd.paymentMethods}
              onChange={(_, val) => {
                const fvAdd_ = structuredClone(fvAdd);
                fvAdd_.paymentMethods = val as string[];
                setFvAdd(fvAdd_);
              }}
            >
              {Object.entries(OBJ_PAYMENTS).map(([id, val]) => (
                <Option key={id} value={id}>
                  {val.icon && <val.icon />} {val.label}
                </Option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Descripcion</FormLabel>
            <Textarea
              name="desc"
              placeholder="Descripcion"
              minRows={2}
              value={fvAdd.info.desc || ""}
              onChange={(e) => {
                const fvAdd_ = structuredClone(fvAdd);
                fvAdd_.info.desc = e.target.value;
                setFvAdd(fvAdd_);
              }}
            />
          </FormControl>

          {LIST_OFFERED.map((item) => (
            <InputAddToList
              key={item.id}
              name={item.id}
              label={item.label}
              placeholder={item.label}
              items={
                fvAdd.offered && item.id in fvAdd.offered
                  ? (fvAdd.offered[
                      item.id as keyof typeof fvAdd.offered
                    ] as string[])
                  : []
              }
              onChange={(list) => {
                const fvAdd_ = structuredClone(fvAdd);
                if (fvAdd_.offered) {
                  const id: string = item.id;
                  // @ts-ignore
                  fvAdd_.offered[id] = list;
                }
                setFvAdd(fvAdd_);
              }}
            />
          ))}

          <InputAddToList
            name="tags"
            label="Tags"
            placeholder="#Clave"
            items={fvAdd.tags || []}
            onChange={(list) => {
              const fvAdd_ = structuredClone(fvAdd);
              fvAdd_.tags = list;
              setFvAdd(fvAdd_);
            }}
          />
        </article>
      </section>

      <section>
        <div className="mb-2">
          <h1>Contacto</h1>
          <Divider />
        </div>

        <ol className="grid xs:grid-cols-[repeat(auto-fit,_minmax(220px,280px))] sm:grid-cols-[repeat(auto-fit,_minmax(200px,240px))] gap-4 md:gap-6 lg:gap-8">
          {Object.entries(OBJ_CONTACTS).map(([id, val]) => (
            <li key={id} className="space-y-2">
              <h3 className="font-medium text-sm inline-flex items-center gap-0.5">
                {val.icon && <val.icon />}
                {val.label}
              </h3>

              {!val.link && (
                <FormControl>
                  <Input
                    name={"label-" + id}
                    placeholder="Etiqueta"
                    startDecorator={
                      ["ig", "fb", "x", "yt"].includes(id) ? "@" : undefined
                    }
                    value={
                      // @ts-ignore
                      fvAdd.contact?.[id]?.label || ""
                    }
                    onChange={(e) => {
                      const fvAdd_ = structuredClone(fvAdd);
                      if (!(id in fvAdd_.contact)) {
                        // @ts-ignore
                        fvAdd_.contact[id] = {};
                      }
                      // @ts-ignore
                      fvAdd_.contact[id].label = e.target.value;
                      setFvAdd(fvAdd_);
                    }}
                  />
                </FormControl>
              )}

              {((!val.base && id !== "telephone") || id === "fb") && (
                <Input
                  name={"href-" + id}
                  placeholder="Link"
                  value={
                    // @ts-ignore
                    fvAdd.contact?.[id]?.href || ""
                  }
                  onChange={(e) => {
                    const fvAdd_ = structuredClone(fvAdd);
                    if (!(id in fvAdd_.contact)) {
                      // @ts-ignore
                      fvAdd_.contact[id] = {};
                    }
                    // @ts-ignore
                    fvAdd_.contact[id].href = e.target.value;
                    setFvAdd(fvAdd_);
                  }}
                />
              )}
            </li>
          ))}
        </ol>
      </section>

      <Divider className="" />

      <section className="mt-2 flex gap-2">
        <Button color="neutral" onClick={() => setFvAdd(fv_add_default)}>
          Limpiar
        </Button>
        <Button onClick={handleSend}>Enviar</Button>
      </section>
    </main>
  );
}
