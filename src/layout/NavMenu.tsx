import { useState } from "react";
import { motion } from "framer-motion";

import { IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router";

import MenuMovil from "./NavMenu/MenuMovil";
import Logo from "../components/Logo";
import InputSearch from "../components/InputSearch";

import MenuIcon from "@mui/icons-material/Menu";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LoginIcon from "@mui/icons-material/Login";

export default function NavMenu() {
  const navigate = useNavigate();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [searchText, setSearchText] = useState("");

  return (
    <motion.nav
      className="bg-primary px-4 py-2 shadow-sm"
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between gap- sm:gap-4 w-full max-w-[1200px] place-self-center">
        <IconButton
          title="Abrir menú"
          className="sm:!hidden"
          onClick={() => setIsOpenMenu(true)}
        >
          <MenuIcon className="text-neutral" fontSize="large" />
        </IconButton>

        <Link to="/" title="Ir al inicio" className="hidden xs:flex p-2">
          <Logo className="text-3xl" classes={{ text: "hidden sm:flex" }} />
        </Link>

        <div className="w-full flex items-center justify-end">
          <InputSearch
            className="max-sm:w-full"
            classes={{ input: "bg-white !rounded-" }}
            value={searchText}
            setValue={setSearchText}
            handleSearch={() =>
              navigate("/search" + (searchText ? "?text=" + searchText : ""))
            }
            onClear={() => setSearchText("")}
          />
        </div>

        <div className="hidden sm:flex gap-2 items-center text-secondary-dark">
          <Link to="faqs" title="Ir a preguntas frecuentes">
            <HelpOutlineOutlinedIcon fontSize="small" />
          </Link>

          <Link to="login" title="Iniciar sesión" className="hidden">
            <LoginIcon fontSize="small" />
          </Link>
        </div>
      </div>

      <MenuMovil isOpen={isOpenMenu} setIsOpen={setIsOpenMenu} />
    </motion.nav>
  );
}
