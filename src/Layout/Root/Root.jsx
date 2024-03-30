import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Toaster />
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
