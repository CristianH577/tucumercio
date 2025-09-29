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
        let text: string = "";
        Object.entries(filtersValues.categories).forEach(([id, val], i) => {
          text = text + (i > 0 ? "Z" : "") + id;

          Object.entries(val).forEach(([id2, val2]) => {
            text = text + "Y" + id2;

            if (val2) {
              Object.keys(val2).forEach((id3) => {
                text = text + "X" + id3;
              });
            }
          });
        });

        if (text) add.push([key, text]);

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
