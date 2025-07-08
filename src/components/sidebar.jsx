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

const SideBar = () => {
  const location = useLocation();
  const MenuCard = ({ children, path, name, icon_path }) => {
    const [activeMenu, setActiveMenu] = useState(false);
    if (Array.isArray(children)) {
      return null;
    }

    useEffect(() => {
      if (location.pathname == path) {
        setActiveMenu(true);
        console.log("Sama", path);
      } else {
        console.log("tidak sama", path);
        setActiveMenu(false);
      }
    }, []);
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
            <img
              className="w-10 text-wrap"
              src={icon_path}
              alt={`${name} icon`}
            />
          </div>
          <div className="flex items-center w-full">
            {" "}
            <p className="text-lg text-black">{name}</p>
          </div>
        </NavLink>
      </>
    );
  };

  return (
    <>
      <div className="h-screen bg-white border border-collapse border-black shadow-slate-200">
        <div aria-label="logo" className="flex justify-center">
          <div className="grid w-32 h-32 p-2 bg-blue-500 place-items-end">
            <h2 className="text-3xl font-semibold text-white">Loan Market</h2>
          </div>
        </div>
        <div aria-label="menu">
          <div className="flex flex-col gap-2 p-2">
            <MenuCard name="Dashboard" path="/dashboard" icon_path={home} />
            <MenuCard name="Contact" path="/" icon_path={contact} />
            <MenuCard name="Loan" path="/" icon_path={loan} />
            <MenuCard name="Product" path="/" icon_path={product} />
            <MenuCard name="Bank" path="/" icon_path={bank} />
            <MenuCard name="Credit Scoring" path="/" icon_path={speed_meter} />
            <MenuCard name="FAQ's" path="/" icon_path={faq} />
            <MenuCard name="Pipeline" path="/" icon_path={pipeline} />
            <MenuCard name="Pipeline Developer" path="/" icon_path={pipeline} />
            <MenuCard name="Marketing Tools" path="/" icon_path={tools} />
            <MenuCard name="Whatsapp" path="/" icon_path={whatsapp} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
