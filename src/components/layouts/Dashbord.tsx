import { useState } from "react";
import LeftSidebar from "./LeftSidebar";
import TopNav from "./TopNav";
import { Link } from "react-router-dom";

const Dahsbord = () => {

    const [hr, setHr] = useState(true)
    return (
        <>
            Dashbord
            {/* <LeftSidebar /> */}
            {/* <TopNav /> */}

            <div className="grid-cols-1 sm:grid md:grid-cols-3 mt-8 ">
                <Link to="/hr-das-board-all-in-for-mation">
                    <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                        <div className="p-6">
                            <h5
                                className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                HR
                            </h5>
                            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                HR Module
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to="/inventory">
                    <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">

                        <div className="p-6">
                            <h5
                                className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                Inventory
                            </h5>
                            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                Inventory Module
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Dahsbord;