import {
  OBJ_CATEGORIES_DATA,
  OBJ_TYPES_STORE,
} from "../../consts/objectsLists";
import type { TypeItemDb } from "../../consts/types";

import Image from "../../components/Image";

const images_all = import.meta.glob(
  "../../assets/imgs/logos/**/*.{png,jpg,jpeg,svg,webp}",
  {
    eager: true,
    import: "default",
  }
);
const srcs = Object.entries(images_all) as string[][];

interface InterfaceProps {
  item: TypeItemDb;
}

export default function HeaderItemView({ item }: InterfaceProps) {
  const type = OBJ_TYPES_STORE[item.info.type];

  return (
    <div className="sm:flex gap-2 min-h-[100px] max-sm:text-center">
      <Image
        width={200}
        height={150}
        className="rounded-sm w-full max-w-[200px] max-h-[150px]"
        classes={{
          wrapper: "place-self-center w-fit",
        }}
        alt={item.info.logo ? "Logo" : undefined}
        src={
          item.info.logo
            ? srcs.find(([path, _]) => path.includes(`/${item.id}.`))?.[1] ||
              undefined
            : undefined
        }
      />

      <div className="">
        <p className="text-neutral-500">
          {type.icon && <type.icon fontSize="medium" />}
          <span>{type.label}</span>
        </p>
        <h2 className="font-bold text-warning text-2xl">{item.info.label}</h2>

        <ol className="flex flex-col sm:flex-row gap-4 max-sm:justify-center">
          {Object.entries(item.categories).map(([id, val]) => {
            const cats2 = Object.entries(val);

            return (
              <li key={id}>
                <h2 className="font-semibold uppercase">
                  {OBJ_CATEGORIES_DATA[id].label}
                </h2>

                {cats2.length > 0 && (
                  <ul className="flex flex-col items-center gap-2 sm:flex-row flex-wrap sm:gap-x-4">
                    {cats2.map(([id2, val2]) => {
                      const cat2 = OBJ_CATEGORIES_DATA[id2];
                      const cats3 = Object.keys(val2 || {});
                      return (
                        <li
                          key={id2}
                          className="border-2 border-neutral-500 rounded-lg w-fit h-fit py-1 px-2"
                        >
                          <div className="text-neutral-500 font-semibold ">
                            {cat2.icon && <cat2.icon className="!h-5 w-fit" />}
                            <span>{cat2.label}</span>
                          </div>

                          {cats3.length > 0 && (
                            <ul className="text-sm sm:ms-6 flex flex-wrap gap-2 max-sm:justify-center">
                              {cats3.map((id3) => {
                                const cat3 = OBJ_CATEGORIES_DATA[id3];
                                if (cat3) {
                                  return (
                                    <li
                                      key={id3}
                                      className="text-neutral-500 inline-flex items-center gap-0.5"
                                    >
                                      {cat3?.icon && (
                                        <cat3.icon className="!h-5 w-fit" />
                                      )}
                                      <span>{cat3?.label}</span>
                                    </li>
                                  );
                                }
                              })}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
