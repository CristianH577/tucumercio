import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { LIST_FAQS_CLIENT, LIST_FAQS_COMMERCE } from "../consts/faqs";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
} from "@mui/material";

import ExpandMore from "@mui/icons-material/ExpandMore";
import InputSearch from "../components/InputSearch";

const tabs = [
  {
    id: "client",
    label: "Soy cliente",
    file: LIST_FAQS_CLIENT,
  },
  {
    id: "comerce",
    label: "Tengo un negocio",
    file: LIST_FAQS_COMMERCE,
  },
];

export default function Faqs() {
  const [tabIdxSelected, setTabIdxSelected] = useState(0);
  const [inputText, setInputText] = useState("");
  const [searching, setSearching] = useState(false);
  const [results, setResults] = useState<{ quest: string; answer: string }[]>(
    []
  );

  const handleSearch = () => {
    setSearching(true);
    const results_ = [...LIST_FAQS_CLIENT, ...LIST_FAQS_COMMERCE].filter(
      (item) => {
        const text_ = inputText
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");

        let flag = item.quest.includes(text_) || item.answer.includes(text_);

        if (!flag && item.tags) {
          for (let i = 0; i < item.tags.length; i++) {
            const tag = item.tags[i];
            flag = text_.includes(tag);
            if (flag) break;
          }
        }

        if (flag) return item;
      }
    );

    setResults(results_);
  };
  const handleClear = () => {
    setInputText("");
    setSearching(false);
  };

  return (
    <main className="px-2 py-4 xs:p-4 sm:p-6 flex flex-col items-center gap-4">
      <motion.article
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <InputSearch
          value={inputText}
          setValue={setInputText}
          handleSearch={handleSearch}
          onClear={handleClear}
          colors={{
            border: "var(--color-tertiary)",
            borderHover: "var(--color-warning)",
            iconSearch: "var(--color-tertiary)",
          }}
        />
      </motion.article>

      {searching ? (
        results.length < 1 ? (
          <span className="font-semibold text-lg">Sin Resultados</span>
        ) : (
          <motion.article
            layoutId="content"
            className="py-4 sm:px-4 text-common"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {Array.isArray(results) &&
              results.map((item, i) => (
                <Accordion key={i}>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls={"quest-content-" + i}
                    id={"quest-header-" + i}
                    className="font-semibold"
                  >
                    ¿{item.quest}?
                  </AccordionSummary>

                  <AccordionDetails>{item.answer}.</AccordionDetails>
                </Accordion>
              ))}
          </motion.article>
        )
      ) : (
        <>
          <motion.article
            className="border-2 border-neutral-300 rounded-md p-2 overflow-auto xs:place-self-center"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <ul aria-label="Pestañas" className="flex gap-2 relative">
              {tabs.map((tab, i) => (
                <li key={tab.id}>
                  <Button
                    color="inherit"
                    size="large"
                    data-selected={i === tabIdxSelected}
                    className="whitespace-nowrap data-[selected=true]:!font-semibold hover:!font-bold"
                    title="Mostrar"
                    sx={{ color: "var(--color-neutral)" }}
                    onClick={() => setTabIdxSelected(i)}
                  >
                    {tabIdxSelected === i && (
                      <motion.div
                        layoutId="highlight"
                        className="absolute right-0 bottom-0 rounded-sm w-full h-full bg-gradient-to-t from-primary to-primary/50"
                      />
                    )}
                    <span className="z-10">{tab.label}</span>
                  </Button>
                </li>
              ))}
            </ul>
          </motion.article>

          <AnimatePresence mode="wait">
            <motion.article
              key={tabIdxSelected}
              layoutId="content"
              className="py-4 sm:px-4 text-common"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                {tabs[tabIdxSelected].file.map((item, i) => (
                  <Accordion key={i}>
                    <AccordionSummary
                      expandIcon={<ExpandMore />}
                      aria-controls={"quest-content-" + i}
                      id={"quest-header-" + i}
                      className="font-semibold"
                    >
                      ¿{item.quest}?
                    </AccordionSummary>

                    <AccordionDetails>{item.answer}.</AccordionDetails>
                  </Accordion>
                ))}
              </div>
            </motion.article>
          </AnimatePresence>
        </>
      )}
    </main>
  );
}
