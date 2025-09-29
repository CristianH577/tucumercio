import { lazy, Suspense, useEffect, useState } from "react";
import { getHrefSearch, scrollToTop } from "../libs/functions";

import database from "../assets/database.json";
import { FILTERS_VALUES_DEFAULT } from "../consts/siteConfig";
import type {
  TypeFiltersValues,
  TypeItemDb,
  TypeObjectGeneral,
} from "../consts/types";

import { Link, useLocation, useNavigate } from "react-router";
import { Button, ButtonGroup, CircularProgress } from "@mui/material";

import InputSearch from "../components/InputSearch";
import ItemsView from "./SearchView/ItemsView";
import PaginationCustom from "../components/PaginationCustom";

import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import FilterListIcon from "@mui/icons-material/FilterList";

const DrawerFilters = lazy(() => import("./SearchView/DrawerFilters"));

const DB: TypeItemDb[] = database;
const itemsPerView = 12;

export default function SearchView() {
  const { search } = useLocation();
  const navigate = useNavigate();

  const [isOpenFilters, setIsOpenFilters] = useState(false);
  const [inputText, setInputText] = useState("");
  const [filtersValues, setFiltersValues] = useState<TypeFiltersValues>(
    FILTERS_VALUES_DEFAULT
  );
  const [items, setItems] = useState<TypeItemDb[]>([]);
  const [visibleItems, setVisibleItems] = useState<TypeItemDb[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleClean = () => setInputText("");
  const handleSearch = () => {
    let href = "";
    if (inputText) href += "?text=" + inputText;
    navigate(href);
  };

  const handleChangePage = (page: number) => {
    let href = getHrefSearch(filtersValues);
    if (href) {
      href += "&";
    } else {
      href += "?";
    }
    href += "page=" + page;
    navigate(href);
  };

  const searhItems = () => {
    scrollToTop();
    setLoading(true);
    let items_: TypeItemDb[] = structuredClone(DB);

    if (filtersValues.categories) {
      // filtersValues.categories.forEach((key, i) => {
      //   items_ = items_.filter((item) => {
      //     if (key.includes("other") && !item.categorie[i]) {
      //       return true;
      //     }
      //     return item.categorie.includes(key);
      //   });
      // });
      // let keys: string[] = [];
      // Object.entries(filtersValues.categories).forEach(([id, val]) => {
      //   // items_ = items_.filter((item) => id in item.categories);
      //   keys = [...keys, id];

      //   Object.entries(val).forEach(([id2, val2]) => {
      //     keys = [...keys, id2];
      //     // @ts-ignore
      //     // items_ = items_.filter((item) => id2 in item.categories[id]);
      //     Object.keys(val2).forEach((id3) => {
      //       keys = [...keys, id3];
      //     });
      //   });
      // });

      const keys1 = Object.keys(filtersValues.categories);
      let keys2: string[] = [];
      let keys3: string[] = [];

      if (keys1.length > 0) {
        keys2 = Object.values(filtersValues.categories)
          .map((val) => Object.keys(val))
          .reduce((p, c) => [...p, ...c]);

        if (keys2.length > 0) {
          keys3 =
            Object.values(filtersValues.categories)
              .map((val) => Object.values(val))
              .reduce((p, c) => [...p, ...c])
              .map((val3) => val3 && Object.keys(val3))
              .reduce((p, c) => c && p && [...p, ...c]) || [];
        }

        items_ = items_.filter((item) =>
          Object.keys(item.categories).some((id) => keys1.includes(id))
        );

        if (keys2.length > 0) {
          items_ = items_.filter((item) => {
            let bool = false;

            Object.values(item.categories).forEach((val) => {
              if (!bool) {
                bool = Object.keys(val).some((item2) => keys2.includes(item2));
              }
            });

            if (bool) return item;
          });

          if (keys3.length > 0) {
            items_ = items_.filter((item) => {
              let bool = false;

              Object.values(item.categories).forEach((val) => {
                Object.values(val).forEach((val2) => {
                  const ids3 = val2 ? Object.keys(val2) : [];
                  if (!bool) {
                    bool = ids3.some((item3) => keys3.includes(item3));
                  }
                });
              });

              if (bool) return item;
            });
          }
        }
      }
    }

    if (filtersValues.ubication) {
      items_ = items_.filter(
        (item) => item.ubication.department === filtersValues.ubication
      );
    }

    if (filtersValues.text) {
      const text_ = filtersValues.text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      items_ = items_.filter((item) =>
        JSON.stringify(item)
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(text_.toLowerCase())
      );
    }

    if (filtersValues.contact.length > 0) {
      filtersValues.contact.forEach((key) => {
        items_ = items_.filter((item) => {
          return key in item.contact;
        });
      });
    }

    if (filtersValues.attributes.length > 0) {
      filtersValues.attributes.forEach((key) => {
        items_ = items_.filter((item) => {
          return item.attributes?.includes(key);
        });
      });
    }

    // if (filterValues?.orderBy) {
    //   const [col, order] = filterValues.orderBy.split("-");
    //   // items_.sort(cartItemsComparator(col, order));
    // }

    setItems(items_);
    setVisibleItems(
      items_.slice(
        itemsPerView * (filtersValues.page - 1),
        itemsPerView * filtersValues.page
      )
    );
    setTimeout(() => {
      setLoading(false);
    }, 100);
  };

  useEffect(() => {
    const filters_ = structuredClone(FILTERS_VALUES_DEFAULT);

    if (search) {
      const params = new URLSearchParams(search);
      const paramsObj: TypeObjectGeneral = {};
      Array.from(params.entries()).map(
        ([k, v]) => (paramsObj[k] = v.replace(/%/g, " "))
      );

      Object.keys(paramsObj).forEach((key) => {
        if (filters_.hasOwnProperty(key)) {
          switch (key) {
            case "categories":
              // filters_[key] = JSON.parse(paramsObj[key]);
              const val = paramsObj.categories;
              if (val) {
                const categories = {};
                const cat1: string[] = paramsObj.categories.split("Z");
                const cat2 = cat1.map((item) => item.split("Y"));
                const cat3 = cat2.map((item) =>
                  item.map((item2) => item2.split("X"))
                );

                cat3.forEach((array) => {
                  const c = array[0];
                  // @ts-ignore
                  categories[c] = {};

                  array.forEach((array2, i) => {
                    if (array2.length > 1) {
                      const c2 = array2[0];
                      // @ts-ignore
                      categories[c][c2] = {};

                      array2.forEach((array3, j) => {
                        if (j > 0) {
                          // @ts-ignore
                          categories[c][c2][array3] = {};
                        }
                      });
                    } else if (i > 0) {
                      // @ts-ignore
                      categories[c][array2] = {};
                    }
                  });
                });

                filters_.categories = categories;
              }

              break;
            case "contact":
            case "attributes":
              filters_[key] = paramsObj[key].split(",");
              break;
            case "page":
              filters_[key] = Number(paramsObj[key]);
              break;

            default:
              // @ts-ignore
              filters_[key] = paramsObj[key];
              break;
          }
          filters_.apply = true;
        }
      });
    }

    setInputText(filters_?.text);
    setFiltersValues(filters_);
  }, [search]);

  useEffect(searhItems, [filtersValues]);

  return (
    <main className="px-2 py-6 sm:px-4 sm:py-8 flex flex-col gap-4">
      <section className="flex flex-col items-center gap-2">
        <article className="flex flex-col gap-2 items-center xs:flex-row">
          <InputSearch
            value={inputText}
            setValue={setInputText}
            handleSearch={handleSearch}
            // onClear={() => navigate("/search")}
            onClear={() => setFiltersValues({ ...filtersValues, text: "" })}
            colors={{
              border: "var(--color-tertiary)",
              borderHover: "var(--color-warning)",
              iconSearch: "var(--color-tertiary)",
            }}
          />

          <ButtonGroup size="large" variant="contained">
            <Button
              color="inherit"
              title="Limpiar filtros"
              to="/search"
              component={Link}
              className="!min-w-0 !w-12"
              onClick={handleClean}
            >
              <FilterAltOffIcon />
            </Button>

            <Button
              color={filtersValues.apply ? "primary" : "inherit"}
              title="Abrir lista de filtros"
              className="!min-w-0 !w-12"
              onClick={() => setIsOpenFilters(true)}
            >
              <FilterListIcon />
            </Button>
          </ButtonGroup>
        </article>

        <span className="text-center text-neutral-400">
          Resultados: {items.length}
        </span>
      </section>

      <ItemsView items={visibleItems} loading={loading} />

      {items.length > itemsPerView && (
        <PaginationCustom
          totalItems={items.length}
          currentPage={filtersValues.page}
          itemsPerPage={itemsPerView}
          setPage={handleChangePage}
          showJumps
          siblings={1}
          className="mt-4"
          classes={{
            li: "!bg-primary !text-neutral data-[disabled=true]:!text-neutral-200 data-[disabled=true]:!bg-neutral-400 data-[active=true]:!bg-tertiary data-[active=true]:!text-secondary-ligth hover:!bg-tertiary hover:!text-secondary-ligth",
          }}
        />
      )}

      {isOpenFilters && (
        <Suspense
          fallback={
            <div className="absolute w-screen h-full top-0 left-0 bg-black/50 z-10 flex items-center justify-center">
              <CircularProgress />
            </div>
          }
        >
          <DrawerFilters
            isOpen={isOpenFilters}
            setIsOpen={setIsOpenFilters}
            filtersValues={filtersValues}
          />
        </Suspense>
      )}
    </main>
  );
}
