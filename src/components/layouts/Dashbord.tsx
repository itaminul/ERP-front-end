import { useState } from "react";
import LeftSidebar from "./LeftSidebar";
import TopNav from "./TopNav";
import { Link } from "react-router-dom";

const Dahsbord = () => {
  const [hr, setHr] = useState(true);
  return (
    <>
      Dashbord
      {/* <LeftSidebar /> */}
      {/* <TopNav /> */}
      <div className="grid-cols-1 sm:grid md:grid-cols-3 mt-16 pl-2 pr-2">
      <Link to="/hr">
        <div
          className="block rounded-lg bg-slate-300 text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div
            className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
            HR
          </div>
          <div className="p-6">
            <h5
              className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              HR Module
            </h5>           
          </div>
        </div>
        </Link>
        <Link to="/inventory">
        <div
          className="block ml-2 rounded-lg bg-slate-300 text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div
            className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
            Inventory
          </div>
          <div className="p-6">
            <h5
              className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Inventory Module
            </h5>           
          </div>
        </div>
        </Link>
        <Link to="#">
        <div
          className="block ml-2 rounded-lg bg-slate-300 text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div
            className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
            Pathology
          </div>
          <div className="p-6">
            <h5
              className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Pathology Module
            </h5>           
          </div>
        </div>
        </Link>
      </div>
    </>
  );
};

export default Dahsbord;
