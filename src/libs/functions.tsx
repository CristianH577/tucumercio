import type { TypeFiltersValues } from "../consts/types";

export const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export const getHrefSearch = (filtersValues: TypeFiltersValues) => {
  let href = "";
  const add = [];
  for (const key in filtersValues) {
    switch (key) {
      case "apply":
      case "page":
        break;
      case "categories":
        const keys = Object.keys(filtersValues.categories);
        if (keys.length > 0) {
          const val = JSON.stringify(filtersValues.categories);
          add.push([key, val]);
        }
        break;
      case "contact":
      case "attributes":
        if (filtersValues[key].length > 0) {
          const val = filtersValues[key].join(",");
          add.push([key, val]);
        }
        break;

      default:
        const val = filtersValues[key as keyof TypeFiltersValues];
        if (val) add.push([key, val]);
        break;
    }
  }

  if (add.length > 0) {
    add.forEach((e, i) => {
      href += i === 0 ? "?" : "&";
      href += e[0] + "=" + e[1];
    });
  }

  return href;
};
