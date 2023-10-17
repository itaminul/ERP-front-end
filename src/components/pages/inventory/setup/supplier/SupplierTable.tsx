import React, { useState } from 'react';
import { Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useGetSuppliersQuery } from '../../../../../service/inventory/inventorySupplierApi';
import CreateSupplier from './CreateSupplier';
import UpdateSupplier from './UpdateSupplier';

interface DataType {
  id: number;
  key: React.Key;
  supplierName: string;
  supplierDescription: string;
}
const SupplierTable = () => {
  const { data, isLoading, isError } = useGetSuppliersQuery();
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  if (isLoading) {
    return <>Loading.....</>;
  }

  if (isError) {
    return <>Error fetching data</>;
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
      key: '1',
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () => (
        <>
          <Button
            type="primary"
            onClick={() => {
              showEditModal();
            }}
          >
            Edit
          </Button>
        </>
      ),
    },
  ];

  function handleCreateModalOpen() {
    setCreateModalOpen(true);
  }
  function showEditModal() {
    setEditModalOpen(true);
  }
  return (
    <>
      <Button
        style={{ float: 'right', marginBottom: '10px' }}
        onClick={handleCreateModalOpen}
      >
        Create
      </Button>
      <Table
        style={{ width: '90%' }}
        columns={columns}
        dataSource={data}
        scroll={{ x: 1300 }}
      />
      <CreateSupplier
        title="Create Supplier"
        open={createModalOpen}
        onCancel={() => {
          setCreateModalOpen(false);
        }}
      />
      <UpdateSupplier
        title="Update Supplier"
        open={editModalOpen}
        onCancel={() => {
          setEditModalOpen(false);
        }}
      />
      ;
    </>
  );
};

export default SupplierTable;
