import { Button, Form, Input, Modal, Select, message } from 'antd';
import { type CreateSupplierProps, type Suppliers } from './supplierDataType';
import { useCreateSupplierMutation } from '../../../../../service/inventory/inventorySupplierApi';
const { Option } = Select;
function CreateSupplier({ title, open, onCancel }: CreateSupplierProps) {
  const [form] = Form.useForm();
  const [submitSupplierForm] = useCreateSupplierMutation();

  const onFinish = async (values: Suppliers): Promise<void> => {
    try {
      const dataFormat = {
        supplierName: String(values.supplierName),
        supplierDescription: values.supplierDescription,
        countryId: Number(values.countryId),
      };
      const response = await submitSupplierForm(dataFormat).unwrap();
      if (response != null) {
        setTimeout(() => {
          void message.success('Supplier information save successfully');
          onCancel();
          window.location.reload();
        }, 2000);
      }
      form.resetFields();
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <>
      <Modal
        title={title}
        open={open}
        onCancel={onCancel}
        footer={[
          <Button
            style={{ float: 'left', marginTop: '-20px' }}
            key="cancel"
            onClick={onCancel}
          >
            Cancel
          </Button>,
        ]}
      >
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onFinish={onFinish}
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

export default CreateSupplier;
