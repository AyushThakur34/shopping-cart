import MainHeader from "./components/MainHeader";
import Home from "./components/Home";
import Cart from "./components/Cart";
import PageNotFound from "./components/PageNotFound";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

  const App = ()=> {
    return (
      <div className="relative overflow-hidden h-screen w-screen">
        <ToastContainer position="top-center" closeButton={false} hideProgressBar="true" stacked="true"
        autoClose="600"/>
        <Routes>
          <Route path="/" element={<MainHeader/>}>
            <Route index element={<Home/>}/>
            <Route path="cart" element={<Cart/>}/>
          </Route>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </div>
    );
  }

  export default App;
