import React, { useEffect, useState } from 'react';
import { Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Modal from '../../../../../modal/Modal';
import CreateSupplier from './CreateSupplier';
import UpdateSupplier from './UpdateSupplier';

interface DataType {
  id: number,
  key: React.Key;
  supplierName: string;
  supplierDescription: string;
}

const data: DataType[] = [
  {
    id: 1,
    key: '1',
    supplierName: '',
    supplierDescription: '',
  },
  {
    id: 2,
    key: '2',
    supplierName: 'Jim Green',
    supplierDescription: 'London Park',
  },
];

const accessToken = localStorage.getItem('accessToken');
const SupplierTable: React.FC = () => {



  const [data, setData] = useState<DataType[]>([])
  const [selectedData, setSelectedData] = useState<DataType | null>(null);
  const [recordId, setRecordId] = useState<number | null>(null);

  const [showModal, setShowModalOpen] = useState(false);

  const openModal = (record: DataType) => {
    console.log("dddd")
    setSelectedData(record)
    setShowModalOpen(true)
  }

  const onClose = () => {
    setShowModalOpen(false)
  }



  const columns: ColumnsType<DataType> = [
    {
      
      title: 'ID',
      width: 100,
      dataIndex: 'id',
      key: 'id',
      fixed: 'left',
    },
    {
      
      title: 'Supplier Name',
      width: 100,
      dataIndex: 'supplierName',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'Supplier Description',
      dataIndex: 'supplierDescription',
      key: '1'
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (text: string, record: DataType) => (
       <>
         <Button type="primary" onClick={() => handleEidt(record)}>
          Edit
        </Button>
       </>
      ),
      // render: () => (
      //   <Button type="primary"
      //     onClick={openModal}
      //   >Edit</Button>
      // ),
    },
  ];

  const handleEidt = (record: DataType) => {
    // const selectedRecond = data.find((record) => record.id === recordId);;
    setSelectedData(record)
    setRecordId(record.id)
    setShowModalOpen(true)

  }


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/suppliers`, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
          }
        });
        const jsonData = await response.json();
        const showResult = await jsonData.results;
        setData(showResult);
        // setData(showResult.map((row: { supplierName: any; supplierDescription: any; }) =>({supplierName:row.supplierName,supplierDescription:row.supplierDescription })) );
        // setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Table style={{ width: "90%" }} columns={columns} dataSource={data} scroll={{ x: 1300 }} />;

      <Modal
        open={showModal}
        onClose={onClose}
        title="Update Supplier"
        modalPadding="px-96"
        closeButtonPadding="ml-6"
        modalSize="1000"
        // recordId={recordId}
        toggle={function (): void {
          throw new Error("Function not implemented.");
        }}
      >
        <UpdateSupplier onClose={onClose} children={undefined} visible={false} initialValue={''} recordId={recordId} />
      </Modal>

    </>
  )
}


export default SupplierTable;