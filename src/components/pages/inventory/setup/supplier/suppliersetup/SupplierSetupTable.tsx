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
    const [form] = Form.useForm();
    const accessToken = localStorage.getItem('accessToken');
    const [data, setData] = useState<DataItems[]>([])
    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [updateModalOpen, setUpdateModalOpen] = useState(false);
    const [dataToUpdate, setDataToUpdate] = useState<DataItems | null>(
        null
    );


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


    const handleCreate = async() => {
        form.resetFields();
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/suppliers`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
   
                const jsonData = await response.json();
                body: JSON.stringify(response)
                console.log("jsonData", jsonData);                
                setData([...data, jsonData]);
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        setCreateModalOpen(true);

    }

    const handleSaveCreate = async() => {
        try {
            const value = await form.validateFields();
            const createArray = {
                ...value
            }
            setData([...data, createArray]);
        } catch (error) {
            
        }

    }
    // console.log("create new ", data);


    const handleCancelCreate = () => {
        setCreateModalOpen(false);
    }
    const handleCancelUpdate = () => {
        setUpdateModalOpen(false);
    }

    const fetchItemById = async (id: any) => {
        try {
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
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleEdit = (record: DataItems) => {
        setDataToUpdate(record);
        setUpdateModalOpen(true);
    }

    const handleUpdate = async (data: DataItems) => {
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
                }, 3000)
            } else {
                throw new Error("Network response was not ok");
            }
        } catch (error) {
        }
    }

    return (
        <>
            <Button type="link" key="create" onClick={() => setCreateModalOpen(true)}>Add New</Button>
            <Table columns={columns} dataSource={data} rowKey="id" />
           
                <CreateNewSupplier
                open={createModalOpen}
                onCancel={handleCancelCreate}
                onCreate={handleCreate}
                // onOk={handleSaveCreate} 
                />

            <EditNewSupplier

                open={updateModalOpen}
                prevData={dataToUpdate}
                onUpdate={handleUpdate}
                onCancel={handleCancelUpdate}


            />
        </>
    )
}

export default SupplierSetuTale;

