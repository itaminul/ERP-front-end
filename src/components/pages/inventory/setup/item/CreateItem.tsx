import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Upload,
  message,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import React from 'react';
import { useCreateItemMutation } from '../../../../../service/itemsApi';
const { Option } = Select;

interface CreateModalProps {
  title: string;
  visible: boolean;
  onCancel: () => void;
}

const CreateItem: React.FC<CreateModalProps> = ({
  title,
  visible,
  onCancel,
}) => {
  const [form] = Form.useForm();
  const [createItem] = useCreateItemMutation();

  const onFinish = async (values: any) => {
    try {
      const newItem = {
        itemName: values.itemName,
        itemDescription: values.itemDescription,
        itemCode: values.itemCode,
        modelNo: values.modelNo,
        costPrice: Number(values.costPrice),
        salePrice: Number(values.salePrice),
        manufactureDate: new Date(values.manufactureDate).toLocaleDateString(),
        expireDate: new Date(values.expireDate).toLocaleDateString(),
        taxRate: Number(values.taxRate),
        reorderLabel: Number(values.reorderLabel),
        itemImage: values.itemImage,
        remarks: values.remarks,
        supplierId: Number(values.supplierId),
        itemGroupId: Number(values.itemGroupId),
      };

      const response = await createItem(newItem);
      console.log('newItem', newItem);
      if (response != null) {
        setTimeout(() => {
          void message.success('Created Successfully');
          onCancel();
          window.location.reload();
        }, 2000);
      }

      form.resetFields();
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };

  const disabledDate = (current: any) => {
    const today = new Date();
    return Boolean(current) && current > today;
  };

  const onFinishFailed = (errorInfo: any) => {
    // Handle form validation errors if needed
    console.error('Form validation failed:', errorInfo);
  };
  return (
    <>
      <Modal
        title={title}
        open={visible}
        onCancel={onCancel}
        width={1000}
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
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
          autoComplete="off"
        >
          <Row>
            <Col span={10} push={0}>
              <Form.Item
                name="supplierId"
                label="Supplier"
                rules={[{ required: true, message: 'Please enter item name' }]}
              >
                <Select>
                  <Option>--select--</Option>
                  <Option value="1">A</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="itemGroupId"
                label="Item Category"
                rules={[{ required: true, message: 'Please enter item name' }]}
              >
                <Select>
                  <Option>--select--</Option>
                  <Option value="1">A</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="itemName"
                label="Item"
                rules={[{ required: true, message: 'Please enter item name' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="itemDescription"
                label="Description"
                rules={[
                  { required: true, message: 'Please enter item description' },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="itemCode"
                label="Item Code"
                rules={[{ required: true, message: 'Please enter item code' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="modelNo"
                label="Model No"
                rules={[
                  {
                    pattern: /^[0-9]*$/,
                    message: 'Please input only number',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="costPrice"
                label="Cost Price"
                rules={[
                  {
                    pattern: /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/,
                    message: 'Please input only number',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item></Form.Item>
            </Col>
            <Col span={10} push={1}>
              <Form.Item
                name="salePrice"
                label="Sale Price"
                rules={[
                  {
                    pattern: /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/,
                    message: 'Please input only number',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item name="manufactureDate" label="Manufacture Date">
                <DatePicker
                  showToday
                  style={{ width: '100%' }}
                  disabledDate={disabledDate}
                />
              </Form.Item>
              <Form.Item name="expireDate" label="Expire Date">
                <DatePicker
                  style={{ width: '100%' }}
                  showNow
                  disabledDate={disabledDate}
                />
              </Form.Item>
              <Form.Item
                name="taxRate"
                label="Tax Rate"
                rules={[
                  {
                    pattern: /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/,
                    message: 'Please input only number',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="reorderLabel"
                label="Reorder Label"
                rules={[
                  {
                    pattern: /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/,
                    message: 'Please input only number',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item name="itemImage" label="Item Image">
                <Upload name="itemImage" action="/upload.do" listType="picture">
                  <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
              </Form.Item>
              <Form.Item name="remarks" label="Remarks">
                <Input />
              </Form.Item>
              <Form.Item></Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Button
              style={{ float: 'right' }}
              key="submit"
              type="primary"
              htmlType="submit"
            >
              Create Item
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CreateItem;
