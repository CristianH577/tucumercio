import { motion } from "framer-motion";

import { LINKS_NAV } from "../../consts/siteConfig";

import { Button, Divider, Drawer } from "@mui/material";
import { Link } from "react-router";

import Logo from "../../components/Logo";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface Props {
  isOpen: boolean;
  setIsOpen: (bool: React.SetStateAction<boolean>) => void;
}

const class_li = "hover:bg-amber-400/50 transition-colors";

const variants_li = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export default function MenuMovil({ isOpen = false, setIsOpen }: Props) {
  const onClose = () => setIsOpen(false);

  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      disableScrollLock
      classes={{
        paper: "w-full xs:!max-w-[220px] !bg-transparent backdrop-blur-lg",
      }}
    >
      <Link
        to="/"
        title="Ir al inicio"
        className="px-2 py-4 self-center"
        onClick={() => onClose()}
      >
        <Logo className="text-3xl" />
      </Link>

      <Divider variant="middle" className="bg-neutral-400" />

      <motion.ul
        className="py-2"
        variants={{
          visible: {
            transition: {
              delayChildren: 0.1,
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        {LINKS_NAV.map((item) => (
          <motion.li key={item.id} className={class_li} variants={variants_li}>
            <Button
              component={Link}
              to={item.id}
              title={"Ir a " + item.label}
              size="large"
              className="!px-4 !font-semibold w-full !text-white !normal-case !justify-start"
              onClick={onClose}
              startIcon={item.icon ? <item.icon /> : null}
            >
              {item.label}
            </Button>
          </motion.li>
        ))}

        <motion.li
          className={class_li + " text-neutral-300 hover:text-white"}
          variants={variants_li}
        >
          <Button
            className="!px-4 !font-semibold w-full !text-inherit !normal-case !justify-start"
            title="Cerrar"
            onClick={onClose}
            startIcon={<ArrowBackIcon />}
          >
            Cerrar
          </Button>
        </motion.li>
      </motion.ul>
    </Drawer>
  );
}
