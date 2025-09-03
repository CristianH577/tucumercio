import type { TypeFiltersValues, TypeRoute } from "./types";

// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LoginIcon from "@mui/icons-material/Login";

export const LINKS_NAV: TypeRoute[] = [
  { id: "", label: "Inicio", icon: HouseOutlinedIcon },
  { id: "search", label: "Buscar", icon: SearchIcon },
  { id: "login", label: "Iniciar sesión", icon: LoginIcon },
  { id: "faqs", label: "FAQs", icon: HelpOutlineOutlinedIcon },
];

export const LIKS_CONTACT = [
  // {
  //   id: "wp",
  //   href: "https://api.whatsapp.com/send?phone=543813545903",
  //   label: "WhatsApp",
  //   icon: WhatsAppIcon,
  // },
  {
    id: "ig",
    href: "https://www.instagram.com/verde_ave/",
    label: "Instagram",
    icon: InstagramIcon,
  },
];

export const LIKS_USEFULL = [
  {
    id: "request",
    href: "https://forms.gle/wwY8AnEAs5JQ48ZP8",
    label: "Formulario",
    title: "Solicitar adhesión",
    icon: AssignmentOutlinedIcon,
  },
  {
    id: "report",
    href: "https://forms.gle/PK9nSnyLMx8hZjpD8",
    label: "Denunciar",
    title: "Denunciar comercio",
    icon: ReportGmailerrorredOutlinedIcon,
  },
];

export const FILTERS_VALUES_DEFAULT: TypeFiltersValues = {
  apply: false,
  page: 1,
  text: "",
  ubication: "",
  orderBy: "",
  categories: [],
  contact: [],
  attributes: [],
};
