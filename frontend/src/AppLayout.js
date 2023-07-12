import {Outlet} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";


const AppLayout = () => {
  return (
    <div className='p-[30px] bg-[#161616] text-white'>
        <Navbar />
        <Outlet />
    </div>
  );
}

export default AppLayout;
