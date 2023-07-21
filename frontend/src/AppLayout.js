import {Outlet} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'http://localhost:4000/api';


const AppLayout = () => {
  return (
    <div className='p-[30px] bg-[#161616] text-white'>
        <Navbar />
        <Outlet />
        <ToastContainer />
    </div>
  );
}

export default AppLayout;
