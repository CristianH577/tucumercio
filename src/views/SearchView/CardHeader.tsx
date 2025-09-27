import {
  OBJ_CATEGORIES_DATA,
  OBJ_TYPES_STORE,
} from "../../consts/objectsLists";
import type { TypeItemDb } from "../../consts/types";
import Image from "../../components/Image";

const images_all = import.meta.glob(
  "../../assets/imgs/logos/**/*.{png,jpg,jpeg,svg,webp}",
  {
    eager: true,
    import: "default",
  }
);
const srcs = Object.entries(images_all) as string[][];

interface InterfaceProps {
  item: TypeItemDb;
}

export default function CardHeader({ item }: InterfaceProps) {
  const type = OBJ_TYPES_STORE[item.info.type];

  const props_subtitle = {
    className: "text-neutral-500 inline-flex gap-0.5 text-sm",
  };

  const cats = Object.keys(item.categories);

  const cats2 = Object.values(item.categories)
    .map((vals) => Object.keys(vals))
    .reduce((prev, curr) => [...prev, ...curr]);
  const Cat2Data = OBJ_CATEGORIES_DATA[cats2[0]];

  return (
    <div className="xs:flex gap-2 min-h-[100px]">
      <Image
        width={100}
        height={100}
        className="rounded-sm w-full max-w-[100px] max-h-[100px]"
        classes={{
          wrapper: "place-self-center",
        }}
        alt={item.info.logo ? "Logo" : undefined}
        src={
          item.info.logo
            ? srcs.find(([path, _]) => path.includes(`/${item.id}.`))?.[1] ||
              undefined
            : undefined
        }
      />

      <div className="flex flex-col gap-0.5 max-xs:items-center capitalize">
        <p {...props_subtitle}>
          {cats.map(
            (id, i) => (i > 0 ? "/" : "") + OBJ_CATEGORIES_DATA[id].label
          )}
        </p>

        <h2 className="font-bold text-warning">{item.info.label}</h2>
        <p {...props_subtitle}>
          {type?.icon && <type.icon fontSize="small" />}
          <span>{type?.label}</span>
        </p>

        {cats2.length > 0 ? (
          <p {...props_subtitle}>
            {Cat2Data?.icon && <Cat2Data.icon fontSize="small" />}
            {Cat2Data?.label + (cats2.length > 1 ? "+" : "")}
          </p>
        ) : null}
      </div>
    </div>
  );
}
