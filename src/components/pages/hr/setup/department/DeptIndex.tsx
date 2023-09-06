import { useCallback, useDebugValue, useEffect, useState } from "react";
import Modal from "../../../../../modal/Modal"
import { useModal } from "../../../../../modal/useModal"
import HrLeftSideBar from "../../../../layouts/HrLeftSideBar"
import CreateDept from "./CreateDept";
import { Link } from "react-router-dom";
import EditDepartment from "./EditDepartment";

const DeptIndex = () => {
    const accessToken = localStorage.getItem('accessToken');

    const [showModal, setShowModal] = useState(false);
    const[showEditModal, setShowEditModal] = useState(false)

    const[deptId, setDeptId] = useState(null)

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    const editModal = (event: any) => {
        const id = event?.currentTarget.getAttribute('data-value');
        setShowEditModal(!showEditModal)
        setDeptId(id)
    }

    
    const onClose = () => {
        setShowModal(false);
        setShowEditModal(false);
    }


    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true)    
 
    const featchData = useCallback(async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/department`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`
                }

            })
           if(response.ok) {
            const jsonData = await response.json();
            const showResult = jsonData.results;
            setData(showResult)
            setLoading(false)
           }
            ///  console.log("json  data", jsonData)
        } catch (error) {
            console.log("error", error)

        }
    }, [])

    useEffect(() => {
        featchData()
    }, [])

    if(loading) {
        return <div>Loading......</div>
    }

    console.log("deptIddeptId", deptId)
    return (
        <>
            <HrLeftSideBar />
            <button onClick={toggleModal}>Create</button>
            <Modal open={showModal} onClose={onClose} title="Add New Department" modalSize="max-w-lg" modalPadding="px-96" closeButtonPadding="ml-6" toggle={function (): void {
                throw new Error("Function not implemented.");
            }} >
                <CreateDept onClose={onClose} children={undefined} />
            </Modal>

            <Modal open={showEditModal} onClose={onClose} title="Edit New Department" modalSize="max-w-lg" modalPadding="px-96" closeButtonPadding="ml-6" toggle={function (): void {
                throw new Error("Function not implemented.");
            }} >
                <EditDepartment deptId={deptId} onClose={onClose} children={undefined} />
            </Modal>

            <div className="flex flex-col px-8">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light">
                                <thead className="border-b font-medium dark:border-neutral-500">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">#</th>
                                        <th scope="col" className="px-6 py-4">Name</th>
                                        <th scope="col" className="px-6 py-4">Description</th>
                                        <th scope="col" className="px-6 py-4">Org</th>
                                        <th scope="col" className="px-6 py-4">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.map((item) => (
                                        <tr className="border-b dark:border-neutral-500">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                {item.id}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                {item.departmentName}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">

                                                {item.departmentDes}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                {item.orgId}
                                            </td>
                                            <td>            
                                                <button data-value={item.id} onClick={editModal}> Edit</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeptIndex