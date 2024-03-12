import { Button, Form, Input, Modal, Select } from 'antd';
import { type EditSupplierProps } from './editSupplierDataType';
const { Option } = Select;
function UpdateSupplier({ title, open, onCancel }: EditSupplierProps) {
  const [form] = Form.useForm();
  return (
    <>
      <Modal title={title} open={open} onCancel={onCancel}>
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          // onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="Supplier name"
            name="supplier"
            rules={[{ required: true, message: 'Please input your supplier!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Supplier Description" name="supplierDescription">
            <Input />
          </Form.Item>
          <Form.Item name="countryId" label="Country">
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              <Option value="1">Bangladesh</Option>
              <Option value="2">America</Option>
              <Option value="3">Canada</Option>
            </Select>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default UpdateSupplier;
