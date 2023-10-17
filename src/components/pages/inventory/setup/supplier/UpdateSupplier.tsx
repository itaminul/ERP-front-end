import { Button, Form, Input, Modal, Select } from 'antd';
import { type EditSupplierProps } from './editSupplierDataType';
import { useEffect, useState } from 'react';
import { useGetCountryQuery } from '../../../../../service/countryApi';
function UpdateSupplier({ title, open, data, onCancel }: EditSupplierProps) {
  const [form] = Form.useForm();
  const { data: counties } = useGetCountryQuery();
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    undefined
  );

  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
  };

  useEffect(() => {
    form.setFieldsValue(data);
  }, [data, form]);
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
            name="supplierName"
            rules={[{ required: true, message: 'Please input your supplier!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Supplier Description" name="supplierDescription">
            <Input />
          </Form.Item>
          <Form.Item name="countryId" label="Country">
            <Select
              style={{ width: 200 }}
              value={selectedOption}
              onChange={handleSelectChange}
            >
              {counties?.map((option) => (
                <Select.Option
                  key={option.id}
                  value={option.id}
                  name="countryId"
                >
                  {option.countryName}
                </Select.Option>
              ))}
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
