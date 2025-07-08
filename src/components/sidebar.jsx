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
} from "../assets";
import { useEffect, useState } from "react";
import router from "../routes";

const routeIcon = {
  "/dashboard": home,
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
  const location = useLocation();
  const MenuCard = ({ route: { path = "", name = "", icon, children = []} }) => {
    const [activeMenu, setActiveMenu] = useState(false);
    const [expand, setExpand] = useState(false);

    const handleExpand = () => {
      setExpand((prev) => !prev);
    }
    useEffect(() => {
        const isActive = children.some((child) => child.path === location.pathname)
        console.log(isActive, children);

        if(isActive){
          setExpand(true)
        }else setExpand(false)
        
      // console.log({loc: location.pathname, path})
      console.log(children, name)
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
          <div to={path} className="flex gap-2 px-2 py-2 rounded-md cursor-pointer h-14" onClick={handleExpand}>
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
              <p className="text-lg text-black">{name}</p>
              <div className="text-2xl" style={{rotate: expand ? "-90deg" : "90deg" }}>
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
            ];
            if (activeMenu) {
              fixClass.push("bg-[#17A9E2]");
            }
            return fixClass.join(" ");
          }}
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
          <div className="flex items-center w-full">
            {" "}
            <p className="text-lg text-black">{name}</p>
          </div>
        </NavLink>
        {/* {Array.isArray(children) && expand && (
          <div className="ml-5">
            {children.map((childRoute) => (
              <MenuCard route={childRoute} />
            ))}
          </div>
        )} */}
      </>
    );
  };

  return (
    <>
      <div className="h-screen overflow-y-auto bg-white border border-collapse border-black shadow-slate-200">
        <div aria-label="logo" className="flex justify-center">
          <div className="grid w-32 h-32 p-2 bg-blue-500 place-items-end">
            <h2 className="text-3xl font-semibold text-white">Loan Market</h2>
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
            {/* <MenuCard name="Contact" path="/" icon_path={contact} />
            <MenuCard name="Loan" path="/" icon_path={loan} />
            <MenuCard name="Product" path="/" icon_path={product} />
            <MenuCard name="Bank" path="/" icon_path={bank} />
            <MenuCard name="Credit Scoring" path="/" icon_path={speed_meter} />
            <MenuCard name="FAQ's" path="/" icon_path={faq} />
            <MenuCard name="Pipeline" path="/" icon_path={pipeline} />
            <MenuCard name="Pipeline Developer" path="/" icon_path={pipeline} />
            <MenuCard name="Marketing Tools" path="/" icon_path={tools} />
            <MenuCard name="Whatsapp" path="/" icon_path={whatsapp} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
