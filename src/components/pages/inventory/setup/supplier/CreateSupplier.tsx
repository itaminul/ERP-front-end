import { Button, Form, Input, Modal } from 'antd';
import { type CreateSupplierProps } from './supplierDataType';

function CreateSupplier({ title, open, onCancel }: CreateSupplierProps) {
  interface FieldType {
    supplier?: string;
    supplierDescription?: string;
  }
  function onFinish() {}

  function onFinishFailed() {}
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
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item<FieldType>
            label="Supplier name"
            name="supplier"
            rules={[{ required: true, message: 'Please input your supplier!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Supplier Description"
            name="supplierDescription"
            rules={[
              {
                required: true,
                message: 'Please input your supplier Description!',
              },
            ]}
          >
            <Input />
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
