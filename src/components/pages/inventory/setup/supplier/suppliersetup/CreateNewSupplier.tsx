import { Form, Input } from "antd";

const CreateNewSupplier = () => {
    return(
        <>
        <Form>
            <Form.Item name="supplierName" label="Supplier name"
            rules={[
                {
                    required: true
                }
            ]}
            >
                <Input />
            </Form.Item>
        </Form>
        </>
    )
}

export default CreateNewSupplier;