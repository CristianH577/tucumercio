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
import type { TypeFiltersValues } from "../../consts/types";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  Divider,
  Drawer,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";

import ListCategories from "./ListCategories";

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
    if (href) navigate(href);
    onClose();
  };

  const handleSelectCategorie = (categories: string[]) => {
    let categories_ = categories;

    if (categories.length === filtersValuesTemp.categories.length) {
      const last = categories.length - 1;
      if (categories[last] === filtersValuesTemp.categories[last]) {
        categories_ = categories.slice(0, last);
      }
    }

    setFiltersValuesTemp({
      ...filtersValuesTemp,
      categories: categories_,
    });
  };

  const handleChangeSelect = (event: SelectChangeEvent<string>) => {
    const value = event.target.value || "";
    setFiltersValuesTemp({ ...filtersValuesTemp, ubication: value });
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
      disableScrollLock
      anchor="right"
      classes={{
        paper: "w-full xs:!max-w-[325px] xs:rounded-s-lg",
        // !bg-transparent backdrop-blur-lg !text-white
        // !bg-gradient-to-l from-primary to-secondary-ligth
      }}
    >
      <h2 data-slot="header" className="font-semibold text-xl p-2">
        Filtros
      </h2>

      <Divider variant="middle" />

      <motion.section
        data-slot="body"
        className="py-4 flex flex-col gap-3 overflow-x-hidden overflow-y-auto"
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
        <motion.article className="space-y-2" variants={variant_articles}>
          <h3 className="px-2 font-semibold">Categorias</h3>
          <ListCategories
            values={filtersValuesTemp.categories}
            onSelect={handleSelectCategorie}
          />
        </motion.article>

        <Divider variant="middle" />

        <motion.article className="px-2" variants={variant_articles}>
          <FormControl fullWidth>
            <InputLabel id="department-select-label">Localidad</InputLabel>
            <Select
              labelId="department-select-label"
              id="department-select"
              label="Localidad"
              name="ubication"
              value={filtersValuesTemp.ubication}
              onChange={handleChangeSelect}
            >
              <MenuItem value={undefined}>Todas</MenuItem>
              {Object.entries(OBJ_LOCALIDADES).map(([key, label]) => (
                <MenuItem key={key} value={key}>
                  {label}
                </MenuItem>
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
          variant="contained"
          title="Aplicar filtros"
          onClick={handleApply}
        >
          Aplicar
        </Button>
      </section>
    </Drawer>
  );
}
