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
import SupplierIndex from "./components/pages/inventory/setup/supplier/SupplierIndex";
import Sidebar from "./components/layouts/Sidebar";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Side from "./components/layouts/Side";
import TestForm from "./components/TestForm";
import SupSetupIndex from "./components/pages/inventory/setup/supplier/SupSetupIndex";
const Router = createBrowserRouter([
  { path: "/", element: <Login />},
  { path: "/dahsboard", element: <Dahsbord />},
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
  { path: "/supplier-setup", element: <SupplierIndex />},
  { path: "/supplier", element: <SupSetupIndex />},
  { path: "/sidebar", element: <Sidebar />},
  { path: "/side", element: <Side />},
  { path: "/testform", element: <TestForm />},
  //not found route
  { path: "*", element: <NotFound />},
  

])

function App() {
return (
 
        <RouterProvider router={Router} />

  );
}

export default App;
