import type { TypeObjCategorie, TypeObjList } from "./types";

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
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LanguageIcon from "@mui/icons-material/Language";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import ClassIcon from "@mui/icons-material/Class";
import BookOnlineOutlinedIcon from "@mui/icons-material/BookOnlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MopedOutlinedIcon from "@mui/icons-material/MopedOutlined";
import LockPersonOutlinedIcon from "@mui/icons-material/LockPersonOutlined";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SendToMobileOutlinedIcon from "@mui/icons-material/SendToMobileOutlined";
import CottageIcon from "@mui/icons-material/Cottage";
import MailIcon from "@mui/icons-material/Mail";

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
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
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
import RoomServiceIcon from "@mui/icons-material/RoomService";

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
import ReceiptIcon from "@mui/icons-material/Receipt";
// import ContentCutIcon from "@mui/icons-material/ContentCut";
// import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";

export const OBJ_CATEGORIES: TypeObjCategorie = {
  products: {
    label: "Tiendas",
    subs: {
      animalPet: {
        label: "Animales & mascotas",
        icon: PetsIcon,
      },
      alimentosBebidas: {
        label: "Alimentos & Bebidas",
        icon: ShoppingCartIcon,
        subs: {
          almacen: { icon: LocalConvenienceStoreIcon },
          // carniceria: {},
          delivery: { icon: DeliveryDiningIcon },
          // forrajeria: {},
          // verduleria: {},
          pescaderia: { icon: SetMealIcon },
          // polleria: {},
          otheralimentosBebidas: { label: "Otros", icon: MoreHorizIcon },
        },
      },
      artesanias: { icon: PaletteIcon },
      autopartes: { icon: BuildIcon },
      casaJardin: { label: "Casa & Jardin", icon: DeckIcon },
      deportes: { icon: SportsSoccerIcon },
      apparel: {
        label: "Indumentaria",
        icon: CheckroomIcon,
        subs: {
          accessories: { label: "Accesorios", icon: SvgAccesories },
          shoes: { label: "Calzado", icon: SvgShoes },
          jewelry: { label: "Joyeria", icon: SvgJewelry },
          cloths: { label: "Ropa", icon: SvgCloths },
          otherapparel: { label: "Otros", icon: MoreHorizIcon },
        },
      },
      juegosJuguetes: { label: "Juegos & Juguetes", icon: ToysIcon },
      libreria: { icon: AttachFileIcon },
      furniture: { label: "Muebles", icon: ChairIcon },
      businessIndustrial: {
        label: "Negocios & Industria",
        icon: FactoryIcon,
        subs: {
          construction: { label: "Construcción", icon: HardwareIcon },
          electricidad: { icon: CableIcon },
          ferreteria: { icon: HandymanIcon },
          plomeriaGas: { label: "Plomeria & Gas", icon: PlumbingIcon },
          otherbusinessIndustrial: { label: "Otros", icon: MoreHorizIcon },
        },
      },
      tecnologia: {
        icon: LaptopIcon,
        // subs: {
        //   celulares: {},
        //   computacion: {},
        //   electrodomesticos: {},
        //   othertecnologia: { label: "Otros" },
        // },
      },
      saludBelleza: { label: "Salud & Belleza", icon: FavoriteIcon },
      othersProducts: { label: "Otros", icon: InventoryIcon },
    },
  },
  services: {
    label: "Servicios",
    subs: {
      artEntertaiment: {
        label: "Arte & Entretenimiento",
        labelShort: "Arte & Entret.",
        icon: NightlifeIcon,
        subs: {
          animaciones: { icon: CelebrationIcon },
          audiovisuales: { icon: AddPhotoAlternateIcon },
          // dj: {},
          otherartEntertaiment: { label: "Otros", icon: MoreHorizIcon },
        },
      },
      cadeteria: { icon: MopedIcon },
      catering: { icon: TapasIcon },
      constructionMaintenance: {
        label: "Construccion & Mantenimiento",
        labelShort: "Construccion & Mant.",
        icon: HomeRepairServiceIcon,
        subs: {
          mansonry: { label: "Albañilería", icon: SvgMasonry },
          carpentry: { label: "Carpintería", icon: CarpenterIcon },
          electricity: { label: "Electricidad", icon: ElectricalServicesIcon },
          // gas: { label: "Gasista" },
          ironwork: { label: "Herrería", icon: SvgIronwork },
          plumbing: { label: "Gas & Plomería", icon: PlumbingIcon },
          painting: { label: "Pintura", icon: FormatPaintIcon },
          otherconstructionMaintenance: {
            label: "Otros",
            icon: MoreHorizIcon,
          },
        },
      },
      educacion: {
        icon: AutoStoriesIcon,
        subs: {
          // primaria: {},
          // secundaria: {},
          escolar: { icon: LocalLibraryIcon },
          universitaria: { icon: SchoolIcon },
          instrumentosMusicales: {
            label: "Instrumentos musicales",
            icon: MusicNoteIcon,
          },
          othereducation: { label: "Otros", icon: MoreHorizIcon },
        },
      },
      garage: { icon: GarageIcon },
      // laundry: { label: "Lavanderia", icon: LocalLaundryServiceIcon },
      cleaning: { label: "Limpieza", icon: CleaningServicesIcon },
      programming: { label: "Programación", icon: TerminalIcon },
      reparacion: {
        icon: ConstructionIcon,
        subs: {
          celulares: { icon: PhoneIphoneIcon },
          computadoras: { icon: ComputerIcon },
          electrodomesticos: { icon: TvIcon },
          vehiculos: { icon: CarRepairIcon },
          otherreparacion: { label: "Otros", icon: MoreHorizIcon },
        },
      },
      healthBeauty: { label: "Salud & Belleza", icon: FavoriteIcon },
      // tailoring: { label: "Sastrería", icon: ContentCutIcon },
      transport: { label: "Transporte", icon: AirportShuttleIcon },
      turismo: { icon: AirplaneTicketIcon },
      veterinary: { label: "Veterinaria", icon: PetsIcon },
      othersServices: { label: "Otros", icon: RoomServiceIcon },
    },
  },
};

export const OBJ_TYPES_STORE: TypeObjList = {
  store: {
    label: "Tienda",
    icon: StorefrontIcon,
  },
  fabricate: {
    label: "Fábrica",
    icon: FactoryIcon,
  },
  distribuitor: {
    label: "Distribuidor",
    icon: LocalShippingIcon,
  },
  informal: {
    label: "Profesión",
    icon: HandymanIcon,
  },
  company: {
    label: "Compañia",
    icon: BusinessIcon,
  },
  franchise: {
    label: "Franquicia",
    icon: AddBusinessIcon,
  },
  tecnic: {
    label: "Técnico",
    icon: SchoolIcon,
  },
  entrepreneurship: {
    label: "Emprendimiento",
    icon: PsychologyIcon,
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
    icon: LocalShippingIcon,
  },
  catalog: {
    label: "Catálogo",
    icon: ClassIcon,
  },
  homeWork: {
    label: "Trabajo en domicilio",
    icon: CottageIcon,
  },
  bill: {
    label: "Factura",
    icon: ReceiptIcon,
  },
};
export const OBJ_CONTACTS: TypeObjList = {
  whatsapp: {
    label: "Whatsapp",
    icon: WhatsAppIcon,
    color: "#25d366",
  },
  telephone: {
    label: "Teléfono",
    icon: PhoneIcon,
    color: "#002f5c",
  },
  web: {
    label: "Sitio web",
    icon: LanguageIcon,
    color: "#7bb4e3",
  },
  catalogLink: {
    label: "Catálogo",
    icon: ClassIcon,
    color: "#e57c49",
  },
  googleMaps: {
    label: "Google Maps",
    icon: LocationPinIcon,
    color: "#EA4335",
  },
  ig: {
    label: "Instagram",
    icon: InstagramIcon,
    color: "#962fbf",
  },
  fb: {
    label: "Facebook",
    icon: FacebookIcon,
    color: "#1877F2",
  },
  x: {
    label: "X(Twitter)",
    icon: XIcon,
  },
  mail: {
    label: "Correo",
    icon: MailIcon,
    color: "#848081",
  },
  yt: {
    label: "YouTube",
    icon: YouTubeIcon,
    color: "#FF0000",
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
  mercadoPago: {
    label: "Mercado Pago",
    icon: SVGMercadoLibre,
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
  desc: {
    label: "Descripción",
  },
};
export const OBJ_LOCALIDADES = {
  burruyacu: "Burruyacú",
  capital: "Capital(S.M.T.)",
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

export const OBJ_SCHEDULE = {
  1: "Lunes",
  2: "Martes",
  3: "Miércoles",
  4: "Jueves",
  5: "Viernes",
  6: "Sábado",
  7: "Domingo",
};
