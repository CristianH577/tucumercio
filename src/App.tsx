import { lazy } from "react";

import { LINKS_NAV } from "./consts/siteConfig";
import type { TypeRoute } from "./consts/types";

import { Route, Routes } from "react-router";

import Layout from "./layout/Layout";
import NotFound from "./layout/NotFound";

const Home = lazy(() => import("./views/Home"));
const SearchView = lazy(() => import("./views/SearchView"));
const ItemView = lazy(() => import("./views/ItemView"));
const Faqs = lazy(() => import("./views/Faqs"));

function App() {
  const routesComponent = {
    default: null,
    search: <SearchView />,
    itemView: <ItemView />,
    faqs: <Faqs />,
  };

  const routes: TypeRoute[] = [
    ...LINKS_NAV,
    {
      id: "itemView",
      href: "search/:id",
      label: "Vista de articulo",
    },
  ];

  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route index element={<Home />} />

        {routes.map((route: TypeRoute) => {
          if (route.id in routesComponent) {
            return (
              <Route
                key={route.id}
                path={route.to || route.href || route.id}
                element={
                  routesComponent[route.id as keyof typeof routesComponent]
                }
              />
            );
          }

          return null;
        })}

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
