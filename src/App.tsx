import React from "react";
import logo from "./logo.svg";
import "./App.css";

import TopNav from "./components/layouts/TopNav";
import { Outlet, Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Dahsbord from "./components/layouts/Dashbord";
import Aboutusform from "./components/Aboutusform";
import AboutIndex from "./components/AboutIndex";
import EditAboutus from "./components/EditAboutus";
import Login from "./components/layouts/Login";
import HrIndex from "./components/pages/hr/HrIndex";
import Index from "./components/pages/hr/setup/department/DeptIndex";
import InventoryDashboard from "./components/pages/inventory/InventoryDashboard";
import DrawerSideBar from "./components/layouts/DrawerSidebar";
import EditDepartment from "./components/pages/hr/setup/department/EditDepartment";
import Billing from "./components/Billing";
import NotFound from "./NotFound";
const Router = createBrowserRouter([
  { path: "/dashboard", element: <Dahsbord />},
  { path: "/aboutindex", element: <AboutIndex />},
  { path: "/contact", element: <Contact />},
  { path: "/aboutusform", element: <About />},
  { path: "/editaboutus/:id", element: <EditAboutus />},  
  { path: "/hr", element: <HrIndex />},
  { path: "/de-part-ment-set-up-for-emp-info", element: <Index />},
  { path: "/drawerSideBar", element: <DrawerSideBar />},
  { path: "/billing", element: <Billing />},
  { path: "/editDepartment", element: <EditDepartment />},
  //inventory route
  { path: "/inventory", element: <InventoryDashboard />},
  //not found route
  { path: "*", element: <NotFound />},
  

])

function App() {
return (
    <div className="App">
      {/* <TopNav /> */}
      <RouterProvider router={Router} />
      {/* <Outlet /> */}
    </div>
  );
}

export default App;
