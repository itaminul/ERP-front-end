import { Button, Form, FormInstance, Input, Select, Space } from "antd";
import React, { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const { Option } = Select;
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 }
}


interface onClose {
    onClose: () => void;
    children: ReactNode;
}

interface EditModalProps {
    visible: boolean;
    onClose: () => void;
    // onEdit: (id: number, updatedData: string) => void;
     initialValues: string;
    recordId: number | null;
    // children: ReactNode;
    previousValue: string; 
    
}



const UpdateSupplier: React.FC<EditModalProps> = ({
    visible,
     initialValues,
    previousValue,
    recordId,
}) => {

    const [form] = Form.useForm();
    // console.log("initialValues bbbb", previousValue)
    useEffect(() => {
        console.log("previousValue", previousValue)
        // Set the initialValue and previousValue in the form when visible changes
        if (visible) {
          form.setFieldsValue({ supplierName: previousValue });
        }
      }, [visible, previousValue, form]);

    const accessToken = localStorage.getItem('accessToken');
    const navigate = useNavigate();
    const formRef = React.useRef<FormInstance>(null);
    const onReset = () => {
        formRef.current?.resetFields();
    }
    const onFill = () => {
        formRef.current?.setFieldsValue({ supplierName: 'Habib International', countryId: 'Bangladesh' })
    }


    const onGenderChange = (value: string) => {

    }

    const [responseMessage, setResponseMessage] = useState<string | null>('')
    const [error, setError] = useState<string | null>('');

    const onFinish = () => {

    }
    console.log("recordId", recordId)
    return (
        <>
            Update supplier {recordId}
            <Form
                {...layout}
                ref={formRef}
                name="control-ref"
                onFinish={onFinish}
                // visible={visible}
                style={{ maxWidth: 600 }}
            >
                <div>
                    
                    {responseMessage && <p style={{ color: "blue" }}>{responseMessage}</p>}
                    {error && <p>{error}</p>}
                </div>
                <Form.Item name="supplierName" htmlFor="string" label="Supplier Name"
                    rules={[
                        { required: true },
                        {
                            min: 5,
                            max: 30,
                            message: "Value should be less than 5 character",
                        }
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item name="supplierDescription" label="Supplier Description" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="countryId" label="Country" rules={[{ required: true }]}>
                    <Select
                        placeholder="Select a option and change input text above"
                        onChange={onGenderChange}
                        allowClear
                    >
                        <Option value="1">Bangladesh</Option>
                        <Option value="2">Australia</Option>
                        <Option value="3">Canada</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="orgId" label="Organization" rules={[{ required: true }]}>
                    <Select
                        placeholder="Select a option and change input text above"
                        onChange={onGenderChange}
                        allowClear
                    >
                        <Option value="1">A</Option>
                        <Option value="2">B</Option>
                        <Option value="3">C</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                >
                    {({ getFieldValue }) =>
                        getFieldValue('gender') === 'other' ? (
                            <Form.Item name="activeStatus" label="Active Status" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>
                        ) : null
                    }
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Space>
                        <Button type="default" htmlType="submit">
                            Submit
                        </Button>
                        <Button htmlType="button" onClick={onReset}>
                            Reset
                        </Button>
                        <Button type="link" htmlType="button" onClick={onFill}>
                            Fill form
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </>
    )
}

export default UpdateSupplier;