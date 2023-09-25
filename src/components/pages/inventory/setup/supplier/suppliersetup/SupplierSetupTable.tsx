import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import { ColumnsType } from "antd/es/table";


interface DataItems {
    id: number;
    supplierName: string,
    supplierDescription: string
}
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
        render: () => {
            return <Button>Add</Button>;
        }
    }
]

const data: DataItems[] = [
    {
        id: 1,
        supplierName: 'ABC',
        supplierDescription: "supplierDescription"
    }
]

console.log("data", data)
const SupplierSetuTale = () => {
    const accessToken = localStorage.getItem('accessToken');
    const [data, setData] = useState<DataItems[]>([])


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

    return (
        <>
            <Table columns={columns} dataSource={data} />
        </>
    )
}

export default SupplierSetuTale;

function setData(dummyData: DataItems[]) {
    throw new Error("Function not implemented.");
}
