import { useLocation } from "react-router-dom";
import { notification } from "../assets";

const Navbar = () => {
  const handleClick = (action) => {
    //TODO: Implement on click notif or profile
  };
  return (
    <>
      <nav className="h-full text-sm bg-white border xl:text-base">
        <div className="flex items-center justify-between h-full xl:px-3 text-[#4F5051]">
          <h1 className="text-lg xl:text-4xl">Dashboard</h1>
          <div className="flex mx-1 xl:mx-4">
            <div
              className="flex gap-3 px-3 border-l border-black cursor-pointer"
              onClick={() => handleClick("notif")}
            >
              <div className="block w-full h-full ">
                <img src={notification} alt="notif" className="size-full" />
              </div>
              <div>
                <span className="block text-3xl rotate-90">{">"}</span>
              </div>
            </div>
            <div
              className="flex items-center px-1 border-l border-r border-black cursor-pointer xl:gap-2 xl:px-4"
              onClick={() => handleClick("profile")}
            >
              <p className="text-xs uppercase truncate xl:text-xl text-ellipsis">Yohanes Affandy</p>
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
