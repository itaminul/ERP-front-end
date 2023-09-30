import { Button, Form, Input, Modal, Select } from "antd";
const { Option } = Select;
interface CreateModalProps {
    open: boolean,
    onCancel: () => void,
    onCreate: (values: any) => void,
}

const CreateNewSupplier: React.FC<CreateModalProps> = ({
    open,
    onCancel,
    onCreate
}) => {

    const [form] = Form.useForm();

    const handleSave = async () => {
        try {
            const values = await form.validateFields();
            const createSupplierArray = {
                supplierName: values.supplierName,
                supplierDescription: values.supplierDescription,
                countryId: Number(values.countryId),
                orgId: Number(values.orgId),
            }
            const response = await onCreate(createSupplierArray);
            form.resetFields();

        } catch (error) {
            console.error('error ', error);
        }
    };

    const onGenderChange = (value: string) => {

    }

    return (
        <>
            <Modal
                title="Create Supplier"
                open={!!open}
                // onCancel={onCancel}
                // onOk={handleCreate}
                // onOk={handleSave}
                width={600}
                footer={
                    [
                        <Button type="default" onClick={onCancel}>
                            Cancel
                        </Button>,
                        <Button type="primary" style={{ background: "blue" }} onClick={handleSave}>
                            Submit
                        </Button>
                        
                    ]
                }
            >

                <Form form={form} layout="vertical" autoComplete="off">
                    <Form.Item name="supplierName" label="Supplier name"
                        rules={[
                            {
                                required: true
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item name="supplierDescription"
                        label="Supplier Description" rules={[{ required: true }]}>
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
                </Form>
            </Modal>
        </>
    )
}

export default CreateNewSupplier;