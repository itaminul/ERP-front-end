import {
  // BrowserRouter,
  Route,
  // RouterProvider,
  Routes,
  // createBrowserRouter,
} from 'react-router-dom';
import Dahsbord from '../layouts/Dashbord';
// import SupSetupIndex from '../pages/inventory/setup/supplier/SupSetupIndex';
// import Login from '../layouts/Login';
// import AboutIndex from '../AboutIndex';
// import Contact from '../Contact';
// import About from '../About';
// import EditAboutus from '../EditAboutus';
// import HrIndex from '../pages/hr/HrIndex';
// import Index from '../pageContent/Index';
// import DrawerSideBar from '../layouts/DrawerSidebar';
// import Billing from '../Billing';
// import EditDepartment from '../pages/hr/setup/department/EditDepartment';
// import InventoryDashboard from '../pages/inventory/InventoryDashboard';
// import SupplierIndex from '../pages/inventory/setup/supplier/SupplierIndex';
// // import Sidebar from "../layouts/Sidebar";
// import Side from '../layouts/Side';
// import TestForm from '../TestForm';
// import NotFound from '../../NotFound';
// import Sidebar from '../layouts/Sidebar';

// const _Router = createBrowserRouter([
//   { path: '/', element: <Login /> },
//   { path: '/dahsboard', element: <Dahsbord /> },
//   { path: '/aboutindex', element: <AboutIndex /> },
//   { path: '/contact', element: <Contact /> },
//   { path: '/aboutusform', element: <About /> },
//   { path: '/editaboutus/:id', element: <EditAboutus /> },
//   { path: '/hr', element: <HrIndex /> },
//   { path: '/de-part-ment-set-up-for-emp-info', element: <Index /> },
//   { path: '/drawerSideBar', element: <DrawerSideBar /> },
//   { path: '/billing', element: <Billing /> },
//   { path: '/editDepartment', element: <EditDepartment /> },
//   // inventory route
//   { path: '/inventory', element: <InventoryDashboard /> },
//   { path: '/supplier-setup', element: <SupplierIndex /> },
//   { path: '/supplier', element: <SupSetupIndex /> },
//   { path: '/sidebar', element: <Sidebar /> },
//   { path: '/side', element: <Side /> },
//   { path: '/testform', element: <TestForm /> },
//   // not found route
//   { path: '*', element: <NotFound /> },
// ]);
const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="dahsboard" element={<Dahsbord />} />
        {/* <Route path="/supplier" element={<SupSetupIndex />} /> */}
        {/* <Route path="/newsupplier" element={<SupSetupIndex />} /> */}
      </Routes>
    </>
  );
};

export default AppRoutes;
