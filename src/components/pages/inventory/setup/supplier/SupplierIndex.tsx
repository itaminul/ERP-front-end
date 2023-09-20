import { Link } from "react-router-dom"
import InventoryLeftSideBar from "../../../../layouts/InventoryLeftSideBar"
import { useSelector } from "react-redux"
import { RootState } from "../../../../../redux/store/store"

const SupplierIndex = () => {
    const isOpen = useSelector((state: RootState) => state.menu.isOpen)
    return (
        <>

            <div>
                <div className="">
                    <div className="w-1/8">
                        <InventoryLeftSideBar />
                    </div>
                    <div className={`${isOpen ? "ml-56 w-3/4" : "ml-6 w-96"}`}>
                    {/* <div className="p-10 w-full ..."> */}
                        <table className="w-full text-sm text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Middle Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Full Name
                                    </th>

                                    <th scope="col" className="px-6 py-3">
                                        Phone
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Dept Id ID
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Image
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        aa
                                    </th>
                                    <td className="px-6 py-4">a</td>
                                    <td className="px-6 py-4">b</td>
                                    <td className="px-6 py-4">c</td>
                                    <td className="px-6 py-4">d</td>
                                    <td className="px-6 py-4">
                                        <Link to={`/editaboutus/1`}>
                                            <button
                                                type="button"
                                                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                            >
                                                Edit
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SupplierIndex