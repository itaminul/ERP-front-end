import { Form, Input, Modal } from "antd";
import React, { useEffect, useState } from "react";

interface UpdateComponentProps {
    open: boolean;
    prevData: Data | null;
    onUpdate: (data: Data) => void;
    onCancel: () => void;
}

interface Data {
    id: number,
    supplierName: string,
    supplierDescription: string
}

const EditNewSupplier: React.FC<UpdateComponentProps> = ({
    open,
    prevData,
    onUpdate,
    onCancel
}) => {
    const [form] = Form.useForm();
    const [formData, setFormData] = useState<Data | null>(null)

    useEffect(() => {
        setFormData(prevData);
    }, [prevData])

    const handleUpdate = () => {
        if(formData) {
            onUpdate(formData);
            onCancel()
        }

    }
    // console.log("prevData", prevData)

 
    return (


        <Modal
            title="Update Data"
            open={!!open}
            onOk={handleUpdate}
            onCancel={onCancel}
        >
            {formData && (
                <>
                    <Form form={form}>
                        <Form.Item name="supplierName" label="Supplier name"
                            rules={[
                                {
                                    required: true
                                }
                            ]}
                        >
                            {formData.id}
                            <Input
                                defaultValue={formData.id}
                                onChange={(e) => setFormData({ ...formData, supplierName: e.target.value })}
                            />

                        </Form.Item>
                    </Form>

                </>
            )
            }
        </Modal>

    )
}

export default EditNewSupplier;