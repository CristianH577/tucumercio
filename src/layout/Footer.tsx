import { motion } from "framer-motion";

import { LIKS_CONTACT, LIKS_USEFULL, LINKS_NAV } from "../consts/siteConfig";

import { Divider } from "@mui/material";
import { Link } from "react-router";

import Logo from "../components/Logo";

// import qrImg from "../assets/imgs/qr_nokia.webp";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const motion_variant_article = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="p-4 pt-6 bg-gradient-to-t from-primary to-primary/80 shadow-inner text-neutral"
    >
      <motion.div
        className="w-full max-w-[900px] place-self-center flex flex-col gap-4"
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
        <Logo
          className="text-6xl w-fit drop-shadow-sm drop-shadow-black/20 max-sm:self-center max-sm:mb-2 max-[400px]:flex-col"
          classes={{ svg: "h-20 min-[400px]:h-14" }}
        />

        <section className="flex flex-col-reverse max-sm:text-center sm:flex-row gap-4 sm:gap-6">
          <motion.article variants={motion_variant_article}>
            <b>Secciones</b>

            <ul>
              {LINKS_NAV.map(
                (item) =>
                  item.id !== "contacto" && (
                    <li key={item.id}>
                      <Link
                        to={item.href || item.id}
                        title={"Ir a " + item.label}
                        className="inline-flex items-center gap-1 hover:underline"
                      >
                        {item.icon && <item.icon fontSize="small" />}
                        {item.label}
                      </Link>
                    </li>
                  )
              )}
            </ul>
          </motion.article>

          <Divider variant="middle" className="sm:hidden" />
          <Divider
            className="hidden sm:block"
            orientation="vertical"
            flexItem
          />

          <motion.article variants={motion_variant_article}>
            <b>Utilidades</b>

            <ul>
              {LIKS_USEFULL.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href || "#"}
                    target={item.href ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    title={item.title || item.label}
                    className={
                      "inline-flex items-center gap-1" +
                      (item.href ? " hover:underline" : "")
                    }
                  >
                    {item.icon && <item.icon fontSize="small" />}
                    {item.label}
                    {item.href && <OpenInNewIcon fontSize="inherit" />}
                  </a>
                </li>
              ))}
            </ul>
          </motion.article>

          <Divider variant="middle" className="sm:hidden" />
          <Divider
            className="hidden sm:block"
            orientation="vertical"
            flexItem
          />

          <motion.article variants={motion_variant_article}>
            <b>Contacto</b>

            <ul>
              {LIKS_CONTACT.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href || "#"}
                    target={item.href ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    title={"Ir a " + item.label}
                    className={
                      "inline-flex items-center gap-1" +
                      (item.href ? " hover:underline" : "")
                    }
                  >
                    <item.icon fontSize="small" />
                    {item.label}
                    {item.href && <OpenInNewIcon fontSize="inherit" />}
                  </a>
                </li>
              ))}
            </ul>
          </motion.article>

          {/* <Divider variant="middle" className="sm:hidden" />
          <Divider
            className="hidden sm:block"
            orientation="vertical"
            flexItem
          />

          <motion.div
            className="self-center border-3 border-black rounded-lg"
            variants={motion_variant_article}
          >
            <img src={qrImg} alt="QR: chat de Whatsapp" className="w-28" />
          </motion.div> */}
        </section>

        <Divider variant="middle" />

        <p className="text-neutral-500 text-center">
          2025 - Diseñado por
          <a
            href="https://github.com/CristianH577"
            target="_blank"
            rel="noopener noreferrer"
            title="Ir al perfil del creador"
            className="text-inherit hover:underline"
          >
            <span className="font-mono"> ©</span>VerdeAve
            <OpenInNewIcon fontSize="inherit" />
          </a>
        </p>
      </motion.div>
    </footer>
  );
}
