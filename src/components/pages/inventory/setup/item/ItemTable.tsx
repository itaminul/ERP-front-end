import type { ColumnsType } from 'antd/es/table';
import Table from 'antd/es/table';
import { Button } from 'antd';
import { useState } from 'react';
import CreateItem from './CreateItem';
import UpdateItem from './UpdateItem';
import { useGetItemsQuery } from '../../../../service/itemsApi';

interface DataType {
  key: React.Key;
  itemName: string;
  itemDescription: string;
}

const ItemTable = () => {
  const { data, isLoading, isError } = useGetItemsQuery();
  const [createModalVisible, setCreateModalVisible] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedData, setSelectedData] = useState<any | null>(null);
  const columns: ColumnsType<DataType> = [
    {
      title: 'Item Name',
      width: 100,
      dataIndex: 'itemName',
      key: 'itemName',
      fixed: 'left',
    },
    {
      title: 'Description',
      width: 100,
      dataIndex: 'itemDescription',
      key: 'itemDescription',
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (_: string, record: any) => (
        <>
          <Button
            type="primary"
            onClick={() => {
              handleEdit(record);
            }}
          >
            Edit
          </Button>
        </>
      ),
    },
  ];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const handleCreate = () => {
    setCreateModalVisible(true);
  };

  const handleSaveCreate = (newData: any) => {};

  const handleEdit = (record: any) => {
    setSelectedData(record);
    setEditModalVisible(true);
  };
  console.log('selected data', selectedData);

  return (
    <>
      <Button
        style={{ float: 'right', marginBottom: '10px' }}
        onClick={handleCreate}
      >
        Create
      </Button>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ x: 1100 }}
        pagination={{
          showSizeChanger: true,
          showQuickJumper: true,
          pageSizeOptions: ['10', '20', '50', '100', '1000'],
          defaultPageSize: 10,
          // total: data.length,
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} items`,
        }}
      />

      <CreateItem
        title="Create Item"
        visible={createModalVisible}
        onCancel={() => {
          setCreateModalVisible(false);
        }}
        onSave={handleSaveCreate}
      />

      <UpdateItem
        title="Update Item"
        open={editModalVisible}
        onCancel={() => {
          setEditModalVisible(false);
        }}
        data={setSelectedData}
      />
    </>
  );
};
export default ItemTable;
