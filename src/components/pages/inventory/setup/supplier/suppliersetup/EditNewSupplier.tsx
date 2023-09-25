import { Form, Input } from "antd";
const EditNewSupplier = () => {
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

export default EditNewSupplier;