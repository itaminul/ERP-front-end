import { Form, Input, Modal } from "antd";
interface CreateModalProps  {
    open: boolean,
    onCancel: () => void,
    onCreate: (values: any) => void
}

const CreateNewSupplier: React.FC<CreateModalProps> = ({
    open,
    onCancel,
    onCreate
})  => {

    const [form] = Form.useForm();

    const handleCreate = async () => {
      try {
        const values = await form.validateFields();
        onCreate(values);
        form.resetFields();
      } catch (error) {
        console.error('Validation failed:', error);
      }
    };

    
    return(
        <>
        <Modal
        title="Create Supplier"
        open={!!open}
        onCancel={onCancel}
        onOk={handleCreate}
        >

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
        </Modal>
        </>
    )
}

export default CreateNewSupplier;