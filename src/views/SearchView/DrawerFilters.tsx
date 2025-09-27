import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";

import { getHrefSearch } from "../../libs/functions";

import {
  OBJ_ATTRIBUTES,
  OBJ_CONTACTS,
  OBJ_LOCALIDADES,
} from "../../consts/objectsLists";
import { FILTERS_VALUES_DEFAULT } from "../../consts/siteConfig";
import type { TypeCategories, TypeFiltersValues } from "../../consts/types";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
} from "@mui/material";

import {
  Button,
  Drawer,
  FormControl,
  FormLabel,
  IconButton,
  Option,
  Select,
} from "@mui/joy";

import SelectCategorie from "../../components/SelectCategorie";

import ExpandMore from "@mui/icons-material/ExpandMore";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";

type TypeDrawerFilters = {
  isOpen: boolean;
  setIsOpen: (bool: React.SetStateAction<boolean>) => void;
  filtersValues: TypeFiltersValues;
};

const variant_articles = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export default function DrawerFilters({
  isOpen = false,
  setIsOpen,
  filtersValues,
}: TypeDrawerFilters) {
  const navigate = useNavigate();

  const [filtersValuesTemp, setFiltersValuesTemp] = useState<TypeFiltersValues>(
    FILTERS_VALUES_DEFAULT
  );

  const onClose = () => setIsOpen(false);

  const handleClean = () => {
    setFiltersValuesTemp(structuredClone(FILTERS_VALUES_DEFAULT));
    onClose();
  };
  const handleApply = () => {
    let href = getHrefSearch(filtersValuesTemp);
    navigate(href);
    onClose();
  };

  const handleChangeSelect = (_: any, val: string | null) => {
    setFiltersValuesTemp({ ...filtersValuesTemp, ubication: val || "" });
  };

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const id = event.target.id;
    const checked = event.target.checked;
    const current = filtersValuesTemp[
      name as keyof typeof filtersValuesTemp
    ] as string[];
    let val = [];

    if (checked) {
      val = [...current, id];
    } else {
      val = current.filter((item) => item !== id);
    }

    setFiltersValuesTemp({ ...filtersValuesTemp, [name]: val });
  };

  useEffect(() => {
    const filters_values_ = { ...filtersValuesTemp, ...filtersValues };
    setFiltersValuesTemp(filters_values_);
  }, [filtersValues]);

  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      anchor="right"
      slotProps={{
        content: { className: "w-full xs:!max-w-[320px] xs:rounded-s-lg" },
      }}
    >
      <h2 data-slot="header" className="font-semibold text-xl p-2">
        Filtros
      </h2>

      <Divider variant="middle" />

      <motion.section
        data-slot="body"
        className="p-4 flex flex-col gap-3 overflow-x-hidden overflow-y-auto"
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
        <motion.article
          className="hidden flex-col gap-2 w-full px-2"
          variants={variant_articles}
        >
          <h3 className="text-sm font-medium">Categoria</h3>
          <SelectCategorie
            selected={filtersValuesTemp.categories}
            setSelected={(val: TypeCategories) =>
              setFiltersValuesTemp({ ...filtersValuesTemp, categories: val })
            }
          />
        </motion.article>

        <Divider variant="middle" />

        <motion.article className="px-2" variants={variant_articles}>
          <FormControl>
            <FormLabel htmlFor="select-ubication" id="select-ubication-label">
              Localidad
            </FormLabel>
            <Select
              name="ubication"
              placeholder="Seleccione"
              slotProps={{
                button: {
                  id: "select-ubication",
                  "aria-labelledby": "select-ubication-label select-ubication",
                },
              }}
              value={filtersValuesTemp.ubication || null}
              onChange={handleChangeSelect}
            >
              <Option value="">
                <em>Quitar</em>
              </Option>
              {Object.entries(OBJ_LOCALIDADES).map(([key, label]) => (
                <Option key={key} value={key}>
                  {label}
                </Option>
              ))}
            </Select>
          </FormControl>
        </motion.article>

        <Divider variant="middle" />

        <motion.article variants={variant_articles}>
          <Accordion
            sx={{
              boxShadow: "none",
              "&::before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="contact-content"
              id="contact-header"
              className="font-semibold"
              sx={{
                "&:hover": {
                  color: "var(--color-warning)",
                },
                "&.Mui-expanded": {
                  minHeight: 36,
                },
                "& .MuiAccordionSummary-content": { my: 0 },
              }}
            >
              Contactos
            </AccordionSummary>

            <AccordionDetails sx={{ py: 0 }}>
              <FormGroup>
                {Object.entries(OBJ_CONTACTS).map(([key, data]) => (
                  <FormControlLabel
                    key={key}
                    control={
                      <Checkbox
                        id={key}
                        name="contact"
                        checked={filtersValuesTemp.contact.includes(key)}
                        onChange={handleCheck}
                      />
                    }
                    label={
                      <span className="inline-flex gap-1">
                        {data.icon && <data.icon fontSize="small" />}
                        {data.label}
                      </span>
                    }
                    sx={{
                      "&:hover": {
                        color: data.color || "var(--color-warning)",
                      },
                    }}
                  />
                ))}
              </FormGroup>
            </AccordionDetails>
          </Accordion>

          <Divider variant="middle" />

          <Accordion
            sx={{
              boxShadow: "none",
              "&::before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="attributes-content"
              id="attributes-header"
              className="font-semibold"
              sx={{
                "&:hover": {
                  color: "var(--color-warning)",
                },
                "&.Mui-expanded": {
                  minHeight: 36,
                },
                "& .MuiAccordionSummary-content": { my: 0 },
              }}
            >
              Atributos
            </AccordionSummary>

            <AccordionDetails sx={{ py: 0 }}>
              <FormGroup>
                {Object.entries(OBJ_ATTRIBUTES).map(([key, data]) => (
                  <FormControlLabel
                    key={key}
                    control={
                      <Checkbox
                        id={key}
                        name="attributes"
                        checked={filtersValuesTemp.attributes.includes(key)}
                        onChange={handleCheck}
                      />
                    }
                    label={
                      <span className="inline-flex gap-1">
                        {data.icon && <data.icon fontSize="small" />}
                        {data.label}
                      </span>
                    }
                    sx={{
                      "&:hover": {
                        color: "var(--color-warning)",
                      },
                    }}
                  />
                ))}
              </FormGroup>
            </AccordionDetails>
          </Accordion>
        </motion.article>
      </motion.section>

      <Divider variant="middle" />

      <section
        data-slot="footer"
        className="px-2 py-4 flex flex-wrap gap-2 justify-center"
      >
        <IconButton onClick={onClose} title="Cerrar lista de filtros">
          <ArrowBackIcon className="h-6 w-fit" />
        </IconButton>

        <IconButton
          title="Limpiar filtros"
          component={Link}
          to="/search"
          onClick={handleClean}
        >
          <FilterAltOffIcon />
        </IconButton>

        <Button
          variant="outlined"
          color="warning"
          title="Aplicar filtros"
          onClick={handleApply}
        >
          Aplicar
        </Button>
      </section>
    </Drawer>
  );
}
