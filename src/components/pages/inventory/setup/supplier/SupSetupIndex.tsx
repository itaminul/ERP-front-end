import { Button } from "antd";
import Sidebar from "../../../../layouts/Sidebar";
import SupplierTable from "./SupplierTable";
import { openModal } from "../../../../../redux/features/modalSlice";
import { store } from "../../../../../redux/store/store";
import ModalShow from "../../../../../modal/ModalShow";
import { useState } from "react";
import Modal from "../../../../../modal/Modal";
import CreateSupplier from "./CreateSupplier";

const SupSetupIndex = () => {
    const [showModal, setShowModalOpen] = useState(false);

    const openModal = () => {
        setShowModalOpen(true)
    }

    const onClose = () => {
        setShowModalOpen(false)
    }
    return (
        <>
            <Sidebar />
            <div style={{ marginLeft: "250px", marginTop: "-580px", minHeight: 580 }}>

                <Button onClick={openModal}>Add New</Button>
                <Modal
                    open={showModal}
                    onClose={onClose}
                    title="Add New Department"
                    modalPadding="px-96"
                    closeButtonPadding="ml-6"
                    modalSize="1000"
                    toggle={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                >

                    <CreateSupplier onClose={onClose} children={undefined}  />
                </Modal>

                <SupplierTable />
            </div>
        </>
    )
}

export default SupSetupIndex;