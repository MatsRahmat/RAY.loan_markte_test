import { useLocation } from "react-router-dom";
import { notification } from "../assets";

const Navbar = () => {
  const handleClick = (action) => {
    //TODO: Implement on click notif or profile
  };
  return (
    <>
      <nav className="h-full bg-white border border-black">
        <div className="flex items-center justify-between h-full px-3 text-[#4F5051]">
          <h1 className="text-4xl">Dashboard</h1>
          <div className="flex mx-4">
            <div
              className="flex gap-3 px-3 border-l border-black cursor-pointer"
              onClick={() => handleClick("notif")}
            >
              <div>
                <img src={notification} alt="" />
              </div>
              <div>
                <span className="block text-3xl rotate-90">{">"}</span>
              </div>
            </div>
            <div
              className="flex items-center gap-2 px-4 border-l border-r border-black cursor-pointer"
              onClick={() => handleClick("profile")}
            >
              <p className="text-xl uppercase">Yohanes Affandy</p>
              <div>
                <span className="block text-3xl rotate-90">{">"}</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
