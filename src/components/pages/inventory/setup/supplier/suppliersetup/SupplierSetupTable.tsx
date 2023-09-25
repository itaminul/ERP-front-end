import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import CreateNewSupplier from "./CreateNewSupplier";
import EditNewSupplier from "./EditNewSupplier";


interface DataItems {
    id: number;
    supplierName: string,
    supplierDescription: string
}

const data: DataItems[] = [
    {
        id: 1,
        supplierName: 'ABC',
        supplierDescription: "supplierDescription"
    }
]


const SupplierSetuTale = () => {
    const accessToken = localStorage.getItem('accessToken');
    const [data, setData] = useState<DataItems[]>([])


    const columns: ColumnsType<DataItems> = [
        {
            title: 'ID',
            width: 100,
            dataIndex: 'id',
            fixed: 'left',
            key: 'id'
        },
        {
            title: 'Supplier Name',
            width: 100,
            dataIndex: 'supplierName',
            fixed: 'left',
        },
        {
            title: 'Supplier Des',
            dataIndex: 'supplierDescription',
            key: '1'
        },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: (_: any, record: DataItems) => (
                <>
                  <Button type="link" onClick={() => handleEdit()}>
                    Edit
                  </Button>
                </>
              ),
        }
    ]
    useEffect(() => {
        featchData();

    }, [])

 
    const featchData = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/suppliers`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
            if (response.ok) {
                const jsonData = await response.json();
                const result = await jsonData.results;
                const dummyData: DataItems[] = result
                setData(dummyData);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const[createModalOpen, setCreateModalOpen] = useState(false);
    const openCreateFrom = () => {
        setCreateModalOpen(true);

    }

    const [updateModalOpen, setUpdateModalOpen]= useState(false);

    const openUpdateModal = () => {
        setUpdateModalOpen(true);
    }

    const handleCancelCreate = () => {
        setCreateModalOpen(false);
    }
    const handleCancelUpdate = () => {
        setUpdateModalOpen(false);
    }

    const handleEdit = () => {
        setUpdateModalOpen(true);
    }


    return (
        <>
        <Button type="link" onClick={openCreateFrom}>Add New</Button>
            <Table columns={columns} dataSource={data} />
            <Modal
            title="Create"
            open={createModalOpen}
            onCancel={handleCancelCreate}
            >
                <CreateNewSupplier />

            </Modal>

            <Modal
            title="Update"
            open={updateModalOpen}
            onCancel={handleCancelUpdate}
            >

                <EditNewSupplier />

            </Modal>
        </>
    )
}

export default SupplierSetuTale;

function setData(dummyData: DataItems[]) {
    throw new Error("Function not implemented.");
}
