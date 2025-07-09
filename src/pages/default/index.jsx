import { useLocation } from "react-router-dom";

const DefaultPage = () => {
  const location = useLocation();
  return (
    <>
      <div className="grid h-full place-items-center">
        <p className="text-base font-semibold md:text-lg xl:text-4xl">{location.pathname}</p>
      </div>
    </>
  );
};


export default DefaultPage;