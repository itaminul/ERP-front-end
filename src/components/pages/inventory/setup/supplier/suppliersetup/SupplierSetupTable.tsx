import React, { useEffect, useState } from "react";
import { Alert, Button, Form, Modal, Space, Table, message } from "antd";
import { ColumnsType } from "antd/es/table";
import CreateNewSupplier from "./CreateNewSupplier";
import EditNewSupplier from "./EditNewSupplier";


interface DataItems {
    id: number;
    supplierName: string,
    supplierDescription: string,
    countryId: number,
    orgId: number
}

const data: DataItems[] = [
    {
        id: 1,
        supplierName: 'ABC',
        supplierDescription: "supplierDescription",
        countryId: 1,
        orgId: 1
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
            dataIndex: 'rowNumber',
            fixed: 'left',
            key: 'rowNumber',
            render: (text, rowRecord, index) => index + 1,
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
                    <Button style={{ background: "green", color: 'white' }} onClick={() => handleEdit(record)} >
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


    const handleCreate = async (data: DataItems) => {
        form.resetFields();
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/suppliers`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },

                body: JSON.stringify(data)
            })

            if (response.ok) {
                message.success('Data saved successfully');
                setTimeout(() => {
                    setCreateModalOpen(false);
                }, 3000);

            } else {
                message.error('Failed to save data');
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
        setCreateModalOpen(true);

    }

    const handleCancelCreate = () => {
        setCreateModalOpen(false);
    }
    const handleCancelUpdate = () => {
        setUpdateModalOpen(false);
    }

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
            <Button key="create" style={{ float: 'right', background: 'black', color: 'white', marginRight: '27px' }} onClick={() => setCreateModalOpen(true)}>Add New</Button>
            <Table columns={columns} dataSource={data} bordered
                rowKey={(record: { id: any; }) => record.id}
                size="middle" scroll={{ x: 'calc(1000px + 100%)', y: 1040 }}
                pagination={{
                    showSizeChanger: true,
                    showQuickJumper: true,
                    pageSizeOptions: ['10', '20', '50', '100','All'],
                    defaultPageSize: 10,
                    total: data.length,
                    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
                }}
            />

            <CreateNewSupplier
                open={createModalOpen}
                onCancel={handleCancelCreate}
                onCreate={handleCreate}
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

