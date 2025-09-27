import type { TypeObjCatData, TypeObjList } from "./types";

import { SVGLogoPaypal, SVGMercadoLibre } from "../assets/svgs/svgsLogos";

import {
  SvgAccesories,
  SvgCloths,
  SvgIronwork,
  SvgJewelry,
  SvgMasonry,
  SvgShoes,
} from "../assets/svgs/svgsCategories";

import StorefrontIcon from "@mui/icons-material/Storefront";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LanguageIcon from "@mui/icons-material/Language";
import BookOnlineOutlinedIcon from "@mui/icons-material/BookOnlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MopedOutlinedIcon from "@mui/icons-material/MopedOutlined";
import LockPersonOutlinedIcon from "@mui/icons-material/LockPersonOutlined";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SendToMobileOutlinedIcon from "@mui/icons-material/SendToMobileOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

import ChairIcon from "@mui/icons-material/Chair";
import PetsIcon from "@mui/icons-material/Pets";
import DeckIcon from "@mui/icons-material/Deck";
import CableIcon from "@mui/icons-material/Cable";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import GarageIcon from "@mui/icons-material/Garage";
import HandymanIcon from "@mui/icons-material/Handyman";
import BuildIcon from "@mui/icons-material/Build";
import CarpenterIcon from "@mui/icons-material/Carpenter";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import ToysIcon from "@mui/icons-material/Toys";
import FactoryIcon from "@mui/icons-material/Factory";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InventoryIcon from "@mui/icons-material/Inventory";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import LaptopIcon from "@mui/icons-material/Laptop";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CelebrationIcon from "@mui/icons-material/Celebration";
import PaletteIcon from "@mui/icons-material/Palette";
import NightlifeIcon from "@mui/icons-material/Nightlife";
import MopedIcon from "@mui/icons-material/Moped";
import TapasIcon from "@mui/icons-material/Tapas";
import ConstructionIcon from "@mui/icons-material/Construction";
import SchoolIcon from "@mui/icons-material/School";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import TerminalIcon from "@mui/icons-material/Terminal";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PlumbingIcon from "@mui/icons-material/Plumbing";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";

import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import QrCodeIcon from "@mui/icons-material/QrCode";
import PaymentsIcon from "@mui/icons-material/Payments";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import BusinessIcon from "@mui/icons-material/Business";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import PsychologyIcon from "@mui/icons-material/Psychology";
import HardwareIcon from "@mui/icons-material/Hardware";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import SetMealIcon from "@mui/icons-material/SetMeal";
import LocalConvenienceStoreIcon from "@mui/icons-material/LocalConvenienceStore";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import ComputerIcon from "@mui/icons-material/Computer";
import TvIcon from "@mui/icons-material/Tv";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import BookIcon from "@mui/icons-material/Book";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
// import ContentCutIcon from "@mui/icons-material/ContentCut";
// import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import FlatwareIcon from "@mui/icons-material/Flatware";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import PropaneTankIcon from "@mui/icons-material/PropaneTank";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import AssistWalkerIcon from "@mui/icons-material/AssistWalker";
import AirlineSeatFlatIcon from "@mui/icons-material/AirlineSeatFlat";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

export const OBJ_CAT_STRUCTURE = {
  prod: [
    "prod_am",
    "prod_albe",
    "prod_art",
    "prod_aut",
    "prod_cj",
    "prod_dep",
    "prod_ind",
    "prod_jj",
    "prod_lib",
    "prod_mue",
    "prod_nein",
    "prod_reg",
    "prod_tecno",
    "prod_sb",
    "prod_others",
  ],
  serv: [
    "serv_ent",
    "serv_trans",
    "serv_cat",
    "serv_consman",
    "serv_cuid",
    "serv_edu",
    "serv_gar",
    "serv_limp",
    "serv_prog",
    "serv_rep",
    "serv_sabe",
    "serv_tur",
    "serv_sam",
    "serv_others",
  ],

  prod_albe: [
    "prod_albe_alm",
    "prod_albe_del",
    "prod_albe_pesc",
    "prod_albe_others",
    "prod_albe_pare",
  ],
  prod_cj: ["prod_cj_bz", "prod_cj_jar", "prod_cj_others"],
  prod_ind: [
    "prod_ind_acc",
    "prod_ind_cal",
    "prod_ind_joy",
    "prod_ind_ropa",
    "prod_ind_others",
  ],
  prod_nein: [
    "prod_nein_bul",
    "prod_nein_cons",
    "prod_nein_desc",
    "prod_nein_elec",
    "prod_nein_ferr",
    "prod_nein_plogas",
    "prod_nein_others",
  ],
  prod_tecno: [
    "prod_tecno_cel",
    "prod_tecno_com",
    "prod_tecno_electro",
    "prod_tecno_others",
  ],

  serv_ent: ["serv_ent_ani", "serv_ent_auvi", "serv_ent_others"],
  serv_trans: [
    "serv_trans_cad",
    "serv_trans_mud",
    "serv_trans_pers",
    "serv_trans_others",
  ],
  serv_consman: [
    "serv_consman_alb",
    "serv_consman_carp",
    "serv_consman_elec",
    "serv_consman_herr",
    "serv_consman_gas",
    "serv_consman_plo",
    "serv_consman_pint",
    "serv_consman_others",
  ],
  serv_cuid: [
    "serv_cuid_ni",
    "serv_cuid_anc",
    "serv_cuid_per",
    "serv_cuid_others",
  ],
  serv_edu: ["serv_edu_esc", "serv_edu_uni", "serv_edu_mus", "serv_edu_others"],
  serv_rep: [
    "serv_rep_cel",
    "serv_rep_comp",
    "serv_rep_elec",
    "serv_rep_veh",
    "serv_rep_others",
  ],
  serv_sam: ["serv_sam_vet", "serv_sam_pel", "serv_sam_pas", "serv_sam_others"],
};
export const OBJ_CATEGORIES_DATA: TypeObjCatData = {
  prod: {
    label: "Tienda",
  },
  serv: {
    label: "Servicios",
  },

  prod_am: {
    label: "Animales & mascotas",
    icon: PetsIcon,
  },
  prod_albe: {
    label: "Alimentos & Bebidas",
    icon: ShoppingCartIcon,
  },
  prod_art: {
    label: "Arte & Artesanias",
    icon: PaletteIcon,
  },
  prod_aut: {
    label: "Autopartes & mecánica",
    icon: BuildIcon,
  },
  prod_cj: {
    label: "Casa & Jardin",
    icon: DeckIcon,
  },
  prod_dep: {
    label: "Deportes",
    icon: SportsSoccerIcon,
  },
  prod_ind: {
    label: "Indumentaria",
    icon: CheckroomIcon,
  },
  prod_jj: {
    label: "Juegos & Juguetes",
    icon: ToysIcon,
  },
  prod_lib: {
    label: "Librería",
    icon: AttachFileIcon,
  },
  prod_mue: {
    label: "Muebles",
    icon: ChairIcon,
  },
  prod_nein: {
    label: "Negocios & Industria",
    icon: FactoryIcon,
  },
  prod_reg: { label: "Regalaría" },
  prod_tecno: {
    label: "Tecnología",
    icon: LaptopIcon,
  },
  prod_sb: {
    label: "Salud & Belleza",
    icon: FavoriteIcon,
  },
  prod_others: {
    label: "Otros",
    icon: InventoryIcon,
  },

  prod_albe_alm: {
    label: "Almacén",
    icon: LocalConvenienceStoreIcon,
  },
  prod_albe_del: {
    label: "Delivery",
    icon: DeliveryDiningIcon,
  },
  prod_albe_pesc: {
    label: "Pescadería",
    icon: SetMealIcon,
  },
  prod_albe_others: {
    label: "Otros",
    icon: MoreHorizIcon,
  },
  prod_albe_pare: { label: "Panadería & Repostería", icon: BakeryDiningIcon },

  prod_cj_bz: { label: "Bazar" },
  prod_cj_jar: { label: "Jardinería" },
  prod_cj_others: { label: "Otros", icon: MoreHorizIcon },

  prod_ind_acc: { label: "Accesorios", icon: SvgAccesories },
  prod_ind_cal: { label: "Calzado", icon: SvgShoes },
  prod_ind_joy: { label: "Joyeria", icon: SvgJewelry },
  prod_ind_ropa: { label: "Ropa", icon: SvgCloths },
  prod_ind_others: { label: "Otros", icon: MoreHorizIcon },

  prod_nein_bul: { label: "Bulonería" },
  prod_nein_cons: { label: "Construcción", icon: HardwareIcon },
  prod_nein_desc: { label: "Descartables", icon: FlatwareIcon },
  prod_nein_elec: { label: "Electricidad", icon: CableIcon },
  prod_nein_ferr: { label: "Ferretería", icon: HandymanIcon },
  prod_nein_plogas: { label: "Plomería & Gas", icon: PlumbingIcon },
  prod_nein_others: { label: "Otros", icon: MoreHorizIcon },

  prod_tecno_cel: { label: "Celulares" },
  prod_tecno_com: { label: "Computación" },
  prod_tecno_electro: { label: "Electrodomésticos" },
  prod_tecno_others: { label: "Otros", icon: MoreHorizIcon },

  serv_ent: {
    label: "Arte & Entretenimiento",
    labelShort: "Arte & Entret.",
    icon: NightlifeIcon,
  },
  serv_trans: { label: "Transporte", icon: LocalShippingIcon },
  serv_cat: { label: "Catering", icon: TapasIcon },
  serv_consman: {
    label: "Construcción & Mantenimiento",
    labelShort: "Construcción & Mant.",
    icon: HomeRepairServiceIcon,
  },
  serv_cuid: { label: "Cuidado", icon: HealthAndSafetyIcon },
  serv_edu: { label: "Educación", icon: AutoStoriesIcon },
  serv_gar: { label: "Garage", icon: GarageIcon },
  serv_limp: { label: "Limpieza", icon: CleaningServicesIcon },
  serv_prog: { label: "Programación", icon: TerminalIcon },
  serv_rep: { label: "Reparación", icon: ConstructionIcon },
  serv_sabe: { label: "Salud & Belleza", icon: FavoriteIcon },
  serv_tur: { label: "Turismo", icon: AirplaneTicketIcon },
  serv_sam: { label: "Animales & Mascotas", icon: PetsIcon },
  serv_others: { label: "Otros", icon: MoreHorizIcon },

  serv_ent_ani: { label: "Animaciones", icon: CelebrationIcon },
  serv_ent_auvi: { label: "Audiovisulaes", icon: AddPhotoAlternateIcon },
  serv_ent_others: { label: "Otros", icon: MoreHorizIcon },

  serv_cuid_ni: { label: "Niños", icon: ChildCareIcon },
  serv_cuid_anc: { label: "Ancianos", icon: AssistWalkerIcon },
  serv_cuid_per: { label: "Personas", icon: AirlineSeatFlatIcon },
  serv_cuid_others: { label: "Otros", icon: MoreHorizIcon },

  serv_trans_cad: { label: "Cadeteria", icon: MopedIcon },
  serv_trans_mud: { label: "Mudanzas", icon: LocalShippingIcon },
  serv_trans_pers: { label: "Personas", icon: AirlineSeatReclineNormalIcon },
  serv_trans_others: { label: "Otros", icon: MoreHorizIcon },

  serv_consman_alb: { label: "Albañilería", icon: SvgMasonry },
  serv_consman_carp: { label: "Carpintería", icon: CarpenterIcon },
  serv_consman_elec: { label: "Electricidad", icon: ElectricalServicesIcon },
  serv_consman_herr: { label: "Herrería", icon: SvgIronwork },
  serv_consman_gas: { label: "Gas", icon: PropaneTankIcon },
  serv_consman_plo: { label: "Plomería", icon: PlumbingIcon },
  serv_consman_pint: { label: "Pintura", icon: FormatPaintIcon },
  serv_consman_others: { label: "Otros", icon: MoreHorizIcon },

  serv_edu_esc: { label: "Escolar", icon: LocalLibraryIcon },
  serv_edu_uni: { label: "Universitaria", icon: SchoolIcon },
  serv_edu_mus: { label: "Instrumentos musicales", icon: MusicNoteIcon },
  serv_edu_others: { label: "Otros", icon: MoreHorizIcon },

  serv_rep_cel: { label: "Celulares", icon: PhoneIphoneIcon },
  serv_rep_comp: { label: "Computación", icon: ComputerIcon },
  serv_rep_elec: { label: "Electrodomésticos", icon: TvIcon },
  serv_rep_veh: { label: "Vehículos", icon: CarRepairIcon },
  serv_rep_others: { label: "Otros", icon: MoreHorizIcon },

  serv_sam_vet: { label: "Veterinaria", icon: LocalHospitalIcon },
  serv_sam_pel: { label: "Peluquearía", icon: ContentCutIcon },
  serv_sam_pas: { label: "Paseadores" },
  serv_sam_others: { label: "Otros", icon: MoreHorizIcon },
};

export const OBJ_TYPES_STORE: TypeObjList = {
  company: {
    label: "Empresa",
    icon: BusinessIcon,
  },
  distribuitor: {
    label: "Distribuidor",
    icon: LocalShippingIcon,
  },
  entrepreneurship: {
    label: "Emprendimiento",
    icon: PsychologyIcon,
  },
  fabricate: {
    label: "Fábrica",
    icon: FactoryIcon,
  },
  franchise: {
    label: "Franquicia",
    icon: AddBusinessIcon,
  },
  store: {
    label: "Tienda",
    icon: StorefrontIcon,
  },
  informal: {
    label: "Profesión",
    icon: HandymanIcon,
  },
  profesional: {
    label: "Profesional",
    icon: BookIcon,
  },
  tecnic: {
    label: "Técnico",
    icon: SchoolIcon,
  },
};

export const OBJ_ATTRIBUTES: TypeObjList = {
  physicalStore: {
    label: "Tienda física",
    icon: StorefrontIcon,
  },
  onlineStore: {
    label: "Tienda online",
    icon: BookOnlineOutlinedIcon,
  },
  retail: {
    label: "Minorista",
    icon: ShoppingCartOutlinedIcon,
  },
  wholesaler: {
    label: "Mayorista",
    icon: BallotOutlinedIcon,
  },
  localPickup: {
    label: "Retiro en local",
    icon: LockPersonOutlinedIcon,
  },
  shipping: {
    label: "Envíos",
    icon: SendToMobileOutlinedIcon,
  },
  ownShipping: {
    label: "Cadetería propia",
    icon: MopedOutlinedIcon,
  },
  nacShipping: {
    label: "Encomiendas",
    icon: LocalShippingOutlinedIcon,
  },
  catalog: {
    label: "Catálogo",
    icon: AutoStoriesOutlinedIcon,
  },
  homeWork: {
    label: "Trabajo en domicilio",
    icon: CottageOutlinedIcon,
  },
  bill: {
    label: "Factura",
    icon: ReceiptOutlinedIcon,
  },
};
export const OBJ_CONTACTS: TypeObjList = {
  whatsapp: {
    label: "Whatsapp",
    icon: WhatsAppIcon,
    color: "#25d366",
    base: "https://api.whatsapp.com/send?phone=54",
  },
  telephone: {
    label: "Teléfono",
    icon: LocalPhoneOutlinedIcon,
    color: "#002f5c",
  },
  web: {
    label: "Sitio web",
    icon: LanguageIcon,
    color: "#7bb4e3",
    link: true,
  },
  catalogLink: {
    label: "Catálogo",
    icon: AutoStoriesOutlinedIcon,
    color: "#e57c49",
    link: true,
  },
  googleMaps: {
    label: "Google Maps",
    icon: RoomOutlinedIcon,
    color: "#EA4335",
    link: true,
  },
  fb: {
    label: "Facebook",
    icon: FacebookIcon,
    color: "#1877F2",
    base: "https://www.facebook.com/",
  },
  ig: {
    label: "Instagram",
    icon: InstagramIcon,
    color: "#962fbf",
    base: "https://www.instagram.com/",
  },
  x: {
    label: "X(Twitter)",
    icon: XIcon,
    base: "https://x.com/",
  },
  yt: {
    label: "YouTube",
    icon: YouTubeIcon,
    color: "#FF0000",
    base: "https://www.youtube.com/@",
  },
  mail: {
    label: "Correo",
    icon: MailOutlinedIcon,
    color: "#848081",
    base: "mailto:",
  },
};
export const OBJ_PAYMENTS: TypeObjList = {
  cash: {
    label: "Efectivo",
    icon: PaymentsIcon,
  },
  transfer: {
    label: "Transferencia",
    icon: AccountBalanceIcon,
  },
  walletOnline: {
    label: "Billetera virtual",
    icon: AccountBalanceWalletIcon,
  },
  qr: {
    label: "QR",
    icon: QrCodeIcon,
  },
  cardCredit: {
    label: "Tarjeta de crédito",
    icon: CreditCardIcon,
  },
  cardDebit: {
    label: "Tarjeta de débito",
    icon: CreditCardIcon,
  },
  mercadoPago: {
    label: "Mercado Pago",
    icon: SVGMercadoLibre,
  },
  paypal: {
    label: "Paypal",
    icon: SVGLogoPaypal,
  },
  cripto: {
    label: "Criptomoneda",
    icon: CurrencyBitcoinIcon,
  },
  other: {
    label: "Otros",
    icon: LocalAtmIcon,
  },
};

export const OBJ_UBICATION: TypeObjList = {
  department: {
    label: "Localidad",
  },
  neighborhood: {
    label: "Barrio",
  },
  street: {
    label: "Calle",
  },
  number: {
    label: "N°",
  },
  references: {
    label: "Referencias",
  },
};
export const OBJ_LOCALIDADES = {
  burruyacu: "Burruyacú",
  capital: "Capital(SMT)",
  chicligasta: "Chicligasta",
  cruzalta: "Cruz Alta",
  famailla: "Famaillá",
  graneros: "Graneros",
  jbalberdi: "J.B. Alberdi",
  lacocha: "La Cocha",
  leales: "Leales",
  lules: "Lules",
  monteros: "Monteros",
  riochico: "Rio Chico",
  simoca: "Simoca",
  tafidelvalle: "Tafí del Valle",
  tafiviejo: "Tafí Viejo",
  trancas: "Trancas",
  ybuena: "Yerba Buena",
};

export const OBJ_SCHEDULE: { [key: number]: string } = {
  1: "Lunes",
  2: "Martes",
  3: "Miércoles",
  4: "Jueves",
  5: "Viernes",
  6: "Sábado",
  7: "Domingo",
};
