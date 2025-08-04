import { OBJ_CATEGORIES_, OBJ_TYPES_STORE } from "../consts/objectsLists";
import type { TypeItemDb } from "../consts/types";
import Image from "./Image";

const images_all = import.meta.glob(
  "../assets/imgs/logos/**/*.{png,jpg,jpeg,svg,webp}",
  {
    eager: true,
    import: "default",
  }
);
const srcs = Object.entries(images_all) as string[][];

const sizes: {
  [key: string]: {
    title: "small" | "medium" | "large" | "x-large";
    subtitle: "small" | "medium" | "large" | "x-large";
    icon: "small" | "medium" | "large";
  };
} = {
  sm: {
    title: "medium",
    subtitle: "small",
    icon: "small",
  },
  md: {
    title: "large",
    subtitle: "medium",
    icon: "medium",
  },
  lg: {
    title: "x-large",
    subtitle: "large",
    icon: "medium",
  },
};

interface InterfaceProps {
  item: TypeItemDb;
  classes?: { img?: string };
  size?: keyof typeof sizes;
  slotsProps?: {
    img?: {
      width?: number;
      height?: number;
    };
  };
}

export default function CardHeader({
  item,
  classes = { img: "" },
  size = "sm",
  slotsProps = {
    img: {
      width: 100,
      height: 100,
    },
  },
}: InterfaceProps) {
  const categorie =
    item.categorie[0] in OBJ_CATEGORIES_
      ? OBJ_CATEGORIES_[item.categorie[0]]
      : OBJ_CATEGORIES_.products;

  const sub =
    item.categorie[1] && categorie.subs && item.categorie[1] in categorie.subs
      ? categorie.subs[item.categorie[1]]
      : false;

  const subSec =
    sub && item.categorie[2] && sub.subs && item.categorie[2] in sub.subs
      ? sub.subs[item.categorie[2]]
      : false;

  const type = OBJ_TYPES_STORE[item.info.type];

  const size_ = sizes[size];

  const props_subtitle = {
    className: "text-neutral-500 inline-flex gap-0.5 items-center",
    style: { fontSize: size_.subtitle },
  };

  return (
    <div className="xs:flex gap-2 max-xs:text-center min-h-[100px]">
      <Image
        width={slotsProps.img?.width}
        height={slotsProps.img?.height}
        className={"rounded-sm" + (classes.img ? " " + classes.img : "")}
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

      <div className="flex flex-col gap-0.5">
        <span {...props_subtitle}>{categorie.label}</span>
        <span {...props_subtitle}>
          {type.icon && <type.icon fontSize={size_.icon} />}
          {type.label}
        </span>

        <h2 className="font-bold" style={{ fontSize: size_.title }}>
          {item.info.label}
        </h2>

        {sub && (
          <span {...props_subtitle}>
            {sub.icon && <sub.icon fontSize={size_.icon} />}
            {sub.label || item.categorie[1]}
          </span>
        )}

        {subSec && (
          <span {...props_subtitle}>
            {subSec.icon && <subSec.icon fontSize={size_.icon} />}
            {subSec.label || item.categorie[2]}
          </span>
        )}
      </div>
    </div>
  );
}
