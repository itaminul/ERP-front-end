import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopNav from './components/layouts/TopNav';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Dahsbord from './components/layouts/Dashbord';
import Aboutusform from './components/Aboutusform';
import AboutIndex from './components/AboutIndex';
import EditAboutus from './components/EditAboutus';
import Login from './components/layouts/Login';
import HrIndex from './components/pages/hr/HrIndex';
import Index from './components/pages/hr/setup/department/DeptIndex';
import InventoryDashboard from './components/pages/inventory/InventoryDashboard';

function App() {
  return (
    <div className="App">
      {/* <TopNav /> */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dahsboard' element={<Dahsbord />} />
        <Route path='/aboutindex' element={<AboutIndex />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/aboutusform' element={<About />} />
        <Route path='/editaboutus/:id' element={<EditAboutus />} />
        <Route path='/hr-das-board-all-in-for-mation' element={<HrIndex />} />
        <Route path='/de-part-ment-set-up-for-emp-info' element={<Index />} />
        {/* inventory */}
        <Route path='/inventory' element={<InventoryDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
