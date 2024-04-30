import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";



const Root = () => {
    return (
        <div>
            <div className=" bg-my-of-white">
            <div className=" mx-2 max-w-6xl md:mx-auto pb-20">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
        </div>
      <Footer></Footer>
        </div>
    );
};

export default Root;