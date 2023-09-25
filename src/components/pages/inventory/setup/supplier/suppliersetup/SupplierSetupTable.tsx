import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Table } from "antd";
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
    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [updateModalOpen, setUpdateModalOpen] = useState(false);
    const [form] = Form.useForm();
    const [editingId, setEditingId] = useState<number | null>(null)
    const [dataToUpdate, setDataToUpdate] = useState<DataItems | null>(
        null
    );

    const [editingItem, setEditingItem] = useState(null);
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
            key: 'supplierName'
        },
        {
            title: 'Supplier Des',
            dataIndex: 'supplierDescription',
            key: 'supplierDescription'
        },
        {
            title: 'Action',
            key: 'Action',
            dataIndex: 'Action',
            fixed: 'right',
            width: 100,
            render: (_: any, record: DataItems) => (
                <>
                    <Button onClick={() => handleEdit(record)}>
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
                const showData: DataItems[] = result
                setData(showData);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    const openCreateFrom = () => {
        setCreateModalOpen(true);

    }



    const openUpdateModal = () => {
        setUpdateModalOpen(true);
    }

    const handleCancelCreate = () => {
        setCreateModalOpen(false);
    }
    const handleCancelUpdate = () => {
        setUpdateModalOpen(false);

        setEditingItem(null);
        // onClose(); // Close the modal
    }

    const fetchItemById = async(id: any) => {
        try {
            console.log("id", id)
            const response = await fetch(`${process.env.REACT_APP_API_URL}/suppliers/getById/${id}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
            if (response.ok) {
                const jsonData = await response.json();
                const result = await jsonData.results;
                setEditingItem(result);
                console.log("result ss", result)
                // const showData: DataItems[] = result
                // setData(showData);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
      };

    const handleEdit = (record: DataItems) => {
        console.log("dataToUpdate", dataToUpdate)
        fetchItemById(record.id)
        // form.setFieldsValue(record);
        setDataToUpdate(record);
        // setEditingId(record.id);
        setUpdateModalOpen(true);
    }

    const handleUpdate = async(data: DataItems) => {
        const CreateNewArray = {
            supplierName: data.supplierName,
            countryId: 1,
            activeStatus: true
        }
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/suppliers/${data.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`
                },
                body: JSON.stringify(CreateNewArray)
            })
            if (response.ok) {
                setTimeout(() => {
                    setEditingItem(null);
                }, 3000)
            } else {
                throw new Error("Network response was not ok");
            }
        } catch (error) {
        }
    }

    console.log("data update", dataToUpdate)
    return (
        <>
            <Button type="link" onClick={openCreateFrom}>Add New</Button>
            <Table columns={columns} dataSource={data} rowKey="id" />
            <Modal
                title="Create"
                open={createModalOpen}
                onCancel={handleCancelCreate}
            >
                <CreateNewSupplier />

            </Modal>

            {/* <Modal
            title="Update"
            open={updateModalOpen}
            onCancel={handleCancelUpdate}
           
            > */}

            <EditNewSupplier

                open={updateModalOpen}
                prevData={dataToUpdate}
                onUpdate={handleUpdate}
                // onCancel={() => setUpdateModalOpen(false)}
                onCancel={handleCancelUpdate}


            />

            {/* </Modal> */}
        </>
    )
}

export default SupplierSetuTale;

function setData(dummyData: DataItems[]) {
    throw new Error("Function not implemented.");
}
