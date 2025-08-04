import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router";

import { scrollToTop } from "../libs/functions";

import { CircularProgress } from "@mui/material";

import Footer from "./Footer";
import NavMenu from "./NavMenu";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(scrollToTop, [pathname]);

  return (
    <div className="min-h-screen flex flex-col font-[monserrat]">
      <NavMenu />

      <div className="flex-grow flex flex-col max-xs:break-all">
        <Suspense
          fallback={
            <span className="w-full min-h-screen flex items-center justify-center">
              <CircularProgress />
            </span>
          }
        >
          <Outlet />
        </Suspense>

        <Footer />
      </div>
    </div>
  );
}
