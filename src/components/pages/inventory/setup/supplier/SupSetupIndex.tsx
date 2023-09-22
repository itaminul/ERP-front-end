import { Button } from "antd";
import Sidebar from "../../../../layouts/Sidebar";
import SupplierTable from "./SupplierTable";
import { openModal } from "../../../../../redux/features/modalSlice";
import { store } from "../../../../../redux/store/store";
import ModalShow from "../../../../../modal/ModalShow";
import { useState } from "react";

const SupSetupIndex = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true)
    }
    return(
        <>
        <Sidebar />      
        <div  style={{ marginLeft: "250px", marginTop: "-580px", minHeight: 580}}>
           
                <Button onClick={showModal}>Add New</Button>
            
            <SupplierTable />
        </div>
        </>
    )
}

export default SupSetupIndex;