import type { SvgIconTypeMap } from "@mui/material";
import type { OverridableComponent } from "@mui/material/OverridableComponent";
import type { OBJ_TYPES_STORE } from "./objectsLists";
import type { SVGProps } from "react";

export type TypeObjectGeneral = { [key: string]: any };
export type TypeIconMui = OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
  muiName: string;
};
export type TypeIcon = TypeIconMui | React.FC<SVGProps<SVGSVGElement>>;

export type TypeRoute = {
  id: string;
  label: string;
  href?: string;
  to?: string;
  icon?: TypeIcon;
};

export type TypeObjList = {
  [key: string]: {
    label: string;
    icon?: TypeIcon;
    color?: string;
  };
};

export type TypeObjCategorie = {
  [key: string]: {
    label?: string;
    labelShort?: string;
    icon?: TypeIcon;
    subs?: TypeObjCategorie;
  };
};

export type TypeContactLink = {
  label: string;
  href?: string;
};
export type TypeItemDb = {
  id: number;
  categorie: string[];
  info: {
    label: string;
    logo?: boolean;
    desc: string;
    type: keyof typeof OBJ_TYPES_STORE;
    schedule?: {
      range?: number[][];
      fix?: {
        1: number[];
        2: number[];
        3: number[];
        4: number[];
        5: number[];
        6: number[];
        7: number[];
      };
      // fix: {
      //   1: [11, 21],
      //   2: [11, 21],
      //   3: [11, 21],
      //   4: [11, 21],
      //   5: [11, 21],
      //   6: [11, 21],
      //   7: [11, 21],
      // },
    };
    items?: string[];
    itemsNo?: string[];
  };
  contact: {
    telephone?: TypeContactLink;
    whatsapp?: TypeContactLink;
    fb?: TypeContactLink;
    ig?: TypeContactLink;
    x?: TypeContactLink;
    yt?: TypeContactLink;
    web?: TypeContactLink;
    googleMaps?: TypeContactLink;
    catalogLink?: TypeContactLink;
    mail?: TypeContactLink;
  };
  ubication: {
    department: string;
    neighborhood?: string;
    street?: string;
    number?: number;
    desc?: string;
  };
  attributes?: string[];
  paymentMethods: string[];
  tags?: string[];
};

export type TypeFiltersValues = {
  apply: boolean;
  page: number;
  text: string;
  ubication: string;
  orderBy: string;
  categories: string[];
  contact: string[];
  attributes: string[];
};

export type TypeFaqsItem = {
  quest: string;
  answer: string;
  tags?: string[];
};
