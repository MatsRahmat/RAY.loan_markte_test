import { useLocation } from "react-router-dom";

const DefaultPage = () => {
  const location = useLocation();
  return (
    <>
      <div className="grid h-full place-items-center">
        <p className="text-4xl font-semibold">{location.pathname}</p>
      </div>
    </>
  );
};


export default DefaultPage;