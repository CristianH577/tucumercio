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
    base?: string;
    link?: boolean;
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
  label?: string;
  href?: string;
};
export type TypeSchedule = (number | string | null)[];

export type TypeSubCategories = {
  [key: string]: TypeSubCategories | undefined;
};
export type TypeCategories = {
  prod?: TypeSubCategories;
  serv?: TypeSubCategories;
};

export type TypeObjCatData = {
  [key: string]: {
    label: string;
    labelShort?: string;
    icon?: TypeIcon;
  };
};

export type TypeOffered = {
  items?: string[];
  itemsNo?: string[];
  services?: string[];
  servicesNo?: string[];
};

export type TypeItemDb = {
  id: number;
  categories: TypeCategories;
  info: {
    label: string;
    logo?: boolean;
    desc?: string;
    type: keyof typeof OBJ_TYPES_STORE;
    schedule?: TypeSchedule[];
  };
  offered?: TypeOffered;
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
    references?: string;
  };
  attributes?: string[];
  paymentMethods?: string[];
  tags?: string[];
};

export type TypeFiltersValues = {
  apply: boolean;
  page: number;
  text: string;
  ubication: string;
  orderBy: string;
  categories: TypeCategories;
  contact: string[];
  attributes: string[];
};

export type TypeFaqsItem = {
  quest: string;
  answer: string;
  tags?: string[];
};
