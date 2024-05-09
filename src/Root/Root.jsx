import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Root = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <NavBar></NavBar>
                <Outlet></Outlet>
            </div>
            <div className="w-full mx-auto">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;