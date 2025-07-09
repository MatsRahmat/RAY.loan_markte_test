import { useState } from "react";
import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import router from "./routes";
import Navbar from "./components/navbar";
import SideBar from "./components/sidebar";

function App() {
  const renderRouter = (routes) => {
    return routes.map((route) => {
      if (!route.children) {
        return (
          <Route path={route.path} key={route.path} element={route.element} />
        );
      } else {
        return (
          <Route path={route.path} key={route.path} element={route.element}>
            {renderRouter(route.children)}
          </Route>
        );
      }
    });
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <main className="bg-[#D9D9D9]">
                <div className="grid grid-cols-7 grid-rows-12">
                  <div className="row-span-12">
                    <SideBar />
                  </div>
                  <div className="col-span-6">
                    <Navbar />
                  </div>
                  <div style={{maxHeight: 'calc(100dvh - 5rem)'}} className="col-span-6 overflow-auto overflow-y-auto row-span-12">
                    <Outlet />
                  </div>
                </div>
              </main>
            </>
          }
        >
          {renderRouter(router)}
        </Route>
      </Routes>
    </>
  );
}

export default App;
