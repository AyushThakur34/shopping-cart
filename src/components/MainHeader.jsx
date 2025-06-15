import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const MainHeader = ()=> {
    return (
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    )
}

export default MainHeader;