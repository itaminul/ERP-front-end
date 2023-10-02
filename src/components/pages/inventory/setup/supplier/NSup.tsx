// src/components/DataTable.tsx
import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input } from 'antd';

interface DataItem {
  id: number;
  name: string;
  // Add more fields as needed
}

const NSup: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const [updateModalVisible, setUpdateModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [editingId, setEditingId] = useState<number | null>(null);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: (_: any, record: DataItem) => (
        <>
          <Button
            type="link"
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

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    // Fetch your data from an API or another source
    // For simplicity, we'll use dummy data here
    const dummyData: DataItem[] = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Alice' },
      // Add more data as needed
    ];
    setData(dummyData);
  };

  const handleEdit = (record: DataItem) => {
    form.setFieldsValue(record);
    setEditingId(record.id);
    setUpdateModalVisible(true);
  };

  const handleCreate = () => {
    form.resetFields();
    setCreateModalVisible(true);
  };

  const handleSaveCreate = () => {
    form
      .validateFields()
      .then((values) => {
        // Handle creating a new record
        const newId = data.length + 1;
        const newData: DataItem = { id: newId, ...values };
        setData([...data, newData]);
        setCreateModalVisible(false);
      })
      .catch((err) => {
        console.log('Error:', err);
      });
  };

  const handleSaveUpdate = () => {
    form
      .validateFields()
      .then((values) => {
        // Handle updating an existing record
        const updatedData = data.map((item) =>
          item.id === editingId ? { ...item, ...values } : item
        );
        setData(updatedData);
        setUpdateModalVisible(false);
      })
      .catch((err) => {
        console.log('Error:', err);
      });
  };

  const handleCancelCreate = () => {
    setCreateModalVisible(false);
  };

  const handleCancelUpdate = () => {
    setUpdateModalVisible(false);
  };

  return (
    <div>
      <Button type="link" onClick={handleCreate}>
        Add New
      </Button>
      <Table<DataItem> dataSource={data} columns={columns} rowKey="id" />

      <Modal
        title="Create Record"
        open={createModalVisible}
        onOk={handleSaveCreate}
        onCancel={handleCancelCreate}
      >
        <Form form={form}>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter a name' }]}
          >
            <Input />
          </Form.Item>
          {/* Add more fields as needed */}
        </Form>
      </Modal>

      <Modal
        title="Edit Record"
        open={updateModalVisible}
        onOk={handleSaveUpdate}
        onCancel={handleCancelUpdate}
      >
        <Form form={form}>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter a name' }]}
          >
            <Input />
          </Form.Item>
          {/* Add more fields as needed */}
        </Form>
      </Modal>
    </div>
  );
};

export default NSup;
