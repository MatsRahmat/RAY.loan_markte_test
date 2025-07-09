import { NavLink, useLocation } from "react-router-dom";
import {
  home,
  bank,
  contact,
  faq,
  loan,
  pipeline,
  product,
  speed_meter,
  tools,
  whatsapp,
  home_black,
  menu,
} from "../assets";
import { useEffect, useState } from "react";
import router from "../routes";

const routeIcon = {
  "/dashboard": home_black,
  "/contact": contact,
  "/loan": loan,
  "/product": product,
  "/bank": bank,
  "/credit-scoring": speed_meter,
  "/faq": faq,
  "/pipline": pipeline,
  "/pipline-developer": pipeline,
  "/markting-tools": tools,
  "/whatsapp": whatsapp,
};

const SideBar = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const location = useLocation();
  const MenuCard = ({
    route: { path = "", name = "", icon, children = [] },
  }) => {
    const [activeMenu, setActiveMenu] = useState(false);
    const [expand, setExpand] = useState(false);

    const handleExpand = () => {
      setExpand((prev) => !prev);
    };
    useEffect(() => {
      const isActive = children.some(
        (child) => child.path === location.pathname
      );
      console.log(isActive, children);

      if (isActive) {
        setExpand(true);
      } else setExpand(false);

      // console.log({loc: location.pathname, path})
      console.log(children, name);
      if (location.pathname == path) {
        setActiveMenu(true);
        console.log("Sama", path);
      } else {
        console.log("tidak sama", path);
        setActiveMenu(false);
      }
    }, []);

    if (Array.isArray(children) && children.length) {
      return (
        <>
          <div
            to={path}
            className="flex justify-center gap-2 px-2 py-2 rounded-md cursor-pointer xl:justify-normal h-14"
            onClick={handleExpand}
          >
            <div className="grid place-items-center">
              {routeIcon[path] && (
                <img
                  className="w-10 text-wrap"
                  src={routeIcon[path] ?? home}
                  alt={`${name} icon`}
                />
              )}
            </div>
            <div className="items-center justify-between hidden w-full lg:flex">
              {" "}
              <p className="text-xs text-black lg:text-base xl:text-lg">
                {name}
              </p>
              <div
                className="text-2xl"
                style={{ rotate: expand ? "-90deg" : "90deg" }}
              >
                {">"}
              </div>
            </div>
          </div>
          {Array.isArray(children) && children.length && expand && (
            <div className="ml-5">
              {children.map((childRoute) => (
                <MenuCard route={childRoute} />
              ))}
            </div>
          )}
        </>
      );
    }
    return (
      <>
        <NavLink
          to={path}
          className={(param) => {
            const { isActive, isPending, isTransitioning } = param;
            let fixClass = [
              "flex",
              "gap-2",
              "py-2",
              "rounded-md",
              "px-2",
              "h-14",
              "xl:justify-normal justify-center",
            ];
            if (activeMenu) {
              fixClass.push("bg-[#17A9E2]");
            }
            return fixClass.join(" ");
          }}
        >
          <div className="grid place-items-center">
            {routeIcon[path] ? (
              <img
                className="w-10 text-wrap"
                src={routeIcon[path] ?? home}
                alt={`${name} icon`}
              />
            ) : (
              <p className="text-xs text-black lg:hidden">{name}</p>
            )}
          </div>
          <div className="items-center hidden w-full lg:flex">
            {" "}
            <p className="text-xs text-black lg:text-base xl:text-lg">{name}</p>
          </div>
        </NavLink>
      </>
    );
  };

  const MenuCardDrawer = ({
    route: { path = "", name = "", icon, children = [] },
  }) => {
    const [activeMenu, setActiveMenu] = useState(false);
    const [expand, setExpand] = useState(false);

    const handleExpand = () => {
      setExpand((prev) => !prev);
    };
    useEffect(() => {
      const isActive = children.some(
        (child) => child.path === location.pathname
      );
      console.log(isActive, children);

      if (isActive) {
        setExpand(true);
      } else setExpand(false);

      // console.log({loc: location.pathname, path})
      console.log(children, name);
      if (location.pathname == path) {
        setActiveMenu(true);
        console.log("Sama", path);
      } else {
        console.log("tidak sama", path);
        setActiveMenu(false);
      }
    }, []);

    if (Array.isArray(children) && children.length) {
      return (
        <>
          <div
            to={path}
            className="flex justify-center gap-2 px-2 py-2 rounded-md cursor-pointer h-14"
            onClick={handleExpand}
          >
            <div className="grid place-items-center">
              {routeIcon[path] && (
                <img
                  className="w-10 text-wrap"
                  src={routeIcon[path] ?? home}
                  alt={`${name} icon`}
                />
              )}
            </div>
            <div className="flex items-center justify-between w-full">
              {" "}
              <p className="text-base text-black">{name}</p>
              <div
                className="text-2xl"
                style={{ rotate: expand ? "-90deg" : "90deg" }}
              >
                {">"}
              </div>
            </div>
          </div>
          {Array.isArray(children) && children.length && expand && (
            <div className="ml-5">
              {children.map((childRoute) => (
                <MenuCard route={childRoute} />
              ))}
            </div>
          )}
        </>
      );
    }
    return (
      <>
        <NavLink
          to={path}
          className={(param) => {
            const { isActive, isPending, isTransitioning } = param;
            let fixClass = [
              "flex",
              "gap-2",
              "py-2",
              "rounded-md",
              "px-2",
              "h-14",
              "items-center",
            ];
            if (activeMenu) {
              fixClass.push("bg-[#17A9E2]");
            }
            return fixClass.join(" ");
          }}
        >
          <div className="grid place-items-center">
            {routeIcon[path] ? (
              <img
                className="w-10 text-wrap"
                src={routeIcon[path] ?? home}
                alt={`${name} icon`}
              />
            ) : (
              <p className="text-xs text-black">{name}</p>
            )}
          </div>
          <div className="items-center w-full">
            {" "}
            <p className="text-base text-black ">{name}</p>
          </div>
        </NavLink>
      </>
    );
  };

  const handleClickDrawer = () => {
    setShowDrawer((prev) => !prev);
  };

  return (
    <>
      <div className="h-screen bg-white border overflow1-y-auto shadow-slate-200">
        {/* ========= LOGO ================ */}
        <div aria-label="logo" className="justify-center hidden xl:flex">
          <div className="grid w-10 h-32 p-2 bg-blue-500 xl:w-32 place-items-end">
            <h2 className="text-base font-semibold text-white lg:text-3xl">
              Loan Market
            </h2>
          </div>
        </div>
        {/* ========= drawer ================ */}
        <div className="mt-3 xl:hidden" onClick={handleClickDrawer}>
          {/* <img src={menu} alt="Expand" /> */}
          <div className="grid place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </div>
        </div>
        <div aria-label="menu" className="select-none">
          <div className="flex flex-col gap-2 p-2">
            {router.map((route) => (
              <MenuCard
                route={route}
                // name={route.name}
                // path={route.path}
                // icon_path={routeIcon[route.path] ?? home}
              />
            ))}
          </div>
        </div>
      </div>
      {showDrawer && (
        <>
          <div className="absolute top-0 left-0 z-10 w-5/6 h-screen space-y-3 overflow-y-auto transition-all bg-white rounded-r-lg shadow-md lg:hidden">
            <div className="flex justify-between p-2">
              <div aria-label="logo" className="justify-center">
                <div className="grid h-16 p-2 bg-blue-500 w-14 place-items-end">
                  <h2 className="text-xs font-semibold text-white">
                    Loan Market
                  </h2>
                </div>
              </div>
              <button className="h-10" onClick={handleClickDrawer}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="30px"
                  fill="#000"
                >
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </button>
            </div>
            <div className="h-full">
              <div aria-label="menu" className="select-none">
                <div className="flex flex-col gap-2 p-2">
                  {router.map((route) => (
                    <MenuCardDrawer
                      route={route}
                      // name={route.name}
                      // path={route.path}
                      // icon_path={routeIcon[route.path] ?? home}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute lg:hidden top-0 left-0 w-full h-screen bg-black opacity-45 z-[2]" />
        </>
      )}
    </>
  );
};

export default SideBar;
