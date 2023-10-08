import { Input, Form, Modal, Select } from 'antd';
const { Option } = Select;

interface ItemProps {
  title: string;
  open: boolean;
  onCancel: () => void;
  data: any;
}
// eslint-disable-next-line react/prop-types
const UpdateItem: React.FC<ItemProps> = ({ title, open, onCancel, data }) => {
  const [form] = Form.useForm();

  return (
    <>
      <Modal title={title} open={open} onCancel={onCancel}>
        <Form
          form={form}
          name="validateOnly"
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item name="itemName" label="Item" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="itemDescription"
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

export default UpdateItem;
