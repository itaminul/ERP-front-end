import { useCreateItemMutation } from '../../../../../components/service/itemsApi';
import { Button, Form, Input, Modal, Select } from 'antd';
import React from 'react';
const { Option } = Select;

interface CreateModalProps {
  title: string;
  visible: boolean;
  onCancel: () => void;
  onSave: (newData: any) => void;
}

const CreateItem: React.FC<CreateModalProps> = ({
  title,
  visible,
  onCancel,
  onSave,
}) => {
  const [form] = Form.useForm();
  const [createItem] = useCreateItemMutation();

  const handleAddItem = async (values: any) => {
    try {
      const newItem = {
        itemName: values.itemName,
        itemDescripton: values.itemDescripton,
      };

      const response = await createItem(newItem);

      // Handle success and update UI as needed
      console.log('Item created:', response);

      // Reset the form
      form.resetFields();
    } catch (error) {
      // Handle error and display an error message
      console.error('Error creating item:', error);
    }
  };

  return (
    <>
      <Modal
        title={title}
        open={visible}
        onCancel={onCancel}
        footer={[
          <Button key="cancel" onClick={onCancel}>
            Cancel
          </Button>,
          <Button key="create" type="primary">
            Create
          </Button>,
        ]}
      >
        <Form
          form={form}
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onFinish={handleAddItem}
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item name="itemName" label="Item" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="itemDescripton"
            label="Description"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="activeStatus" label="Active Status">
            <Select placeholder="Please select a category">
              <Option value="true">Active</Option>
              <Option value="false">In Active</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CreateItem;
