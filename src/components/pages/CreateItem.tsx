import { Button, Col, DatePicker, Form, Input, Modal, Row, Select, Upload, message } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import { useCreateItemMutation } from "../../service/itemsApi";
import { useGetSupplierAllDataQuery } from "../../service/inventory/inventorySupplierApi";
const { Option } = Select;

interface CreateModalProps {
    title: string;
    visible: boolean;
    onCancel: () => void;
    
}

function CreateItem ({ title, visible, onCancel } : CreateModalProps) {
    const [form] = Form.useForm();
    const { data } = useGetSupplierAllDataQuery();
    const [createItem] = useCreateItemMutation();

    
    const onFinish = async(values: any) => {    
        try {
          const newItem = {
            itemName: values.itemName,
            itemDescription: values.itemDescription,
            itemCode: values.itemCode,
            modelNo: values.modelNo,
            costPrice: Number(values.costPrice),
            salePrice: Number(values.salePrice),
            manufactureDate: new Date(values.manufactureDate).toISOString(),
            expireDate: new Date(values.expireDate).toISOString(),
            taxRate: Number(values.taxRate),
            reorderLabel: Number(values.reorderLabel),
            itemImage: values.itemImage,
            remarks: values.remarks,
            supplierId: Number(values.supplierId),
            itemGroupId: Number(values.itemGroupId)
          };
          console.log("new Item", newItem);
         
          const response = await createItem(newItem);
          if(response) {
            setTimeout(() => {
              message.success('Created Successfully');
              onCancel()
              window.location.reload();
            }, 2000)
          }    
       
          form.resetFields();
        } catch (error) {
          console.error('Error creating item:', error);
        }
      };

      const disabledDate = (current: any) => {
        const today = new Date();
        return current && current > today;
      }
console.log("data", data);
    return (
        <>
       
            <Modal
                title={title}
                open={visible}
                onCancel={onCancel}
                footer={[
                    <Button style={{float:'left', marginTop: '-20px'}} key="cancel" onClick={onCancel}>
                      Cancel
                    </Button>,
                  ]}
                  width={1000}
            >
                <Form form={form} onFinish={onFinish} layout="vertical" autoComplete="off">

                <Row>
                    <Col span={10} push={0} >
                                 <Form.Item name="supplierId" label="Supplier" rules={[{ required: true, message: 'Please enter item name' }]}>
                                     <Select>
                                      <Option>--select--</Option>
                                      <Option value="1">A</Option>
                                     </Select>
                                  </Form.Item>

                                  <Form.Item name="itemGroupId" label="Item Category" rules={[{ required: true, message: 'Please enter item name' }]}>
                                     <Select>
                                      <Option>--select--</Option>
                                      <Option value="1">A</Option>
                                     </Select>
                                  </Form.Item>
                                  <Form.Item name="itemName" label="Item" rules={[{ required: true, message: 'Please enter item name' }]}>
                                      <Input
                                      />
                                  </Form.Item>


                                  <Form.Item name="itemDescription" label="Description" rules={[{ required: true, message: 'Please enter item description' }]}>
                                      <Input
                                      />
                                  </Form.Item>

                                  <Form.Item name="itemCode" label="Item Code" rules={[{ required: true, message: 'Please enter item code' }]}>
                                      <Input
                                      />
                                  </Form.Item>
                                  <Form.Item name="modelNo" label="Model No"
                                  rules={
                                    [
                                      {
                                        pattern: new RegExp(
                                          /^[0-9]*$/
                                        ),
                                        message: "Please input only number"
                                      }
                                    ]
                                  }
                                  
                                  >
                                      <Input
                                      />
                                  </Form.Item>
                                  <Form.Item name="costPrice" label="Cost Price"
                                   rules={
                                    [
                                      {
                                        pattern: new RegExp(
                                          /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/
                                        ),
                                        message: "Please input only number"
                                      }
                                    ]
                                  }
                                  >
                                    <Input />
                                  </Form.Item>
                                  
                                  <Form.Item>
                              </Form.Item>
                    </Col>
                       <Col span={10} push={1}>
                                <Form.Item name="salePrice" label="Sale Price"
                                   rules={
                                    [
                                      {
                                        pattern: new RegExp(
                                          /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/
                                        ),
                                        message: "Please input only number"
                                      }
                                    ]
                                  }
                                  >
                                    <Input />
                                  </Form.Item>
                                
                                  <Form.Item  name="manufactureDate" label="Manufacture Date">
                                     
                                  <DatePicker 
                                  showToday
                                  style={{width: '100%'}} disabledDate={disabledDate} />
                                  </Form.Item>
                                  <Form.Item name="expireDate" label="Expire Date">
                                  <DatePicker
                                  style={{width: '100%'}}
                                  showNow
                                  disabledDate={disabledDate}
                                   />
                                  </Form.Item>
                                  <Form.Item name="taxRate" label="Tax Rate"
                                  rules={
                                    [
                                      {
                                        pattern: new RegExp(
                                          /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/
                                        ),
                                        message: "Please input only number"
                                      }
                                    ]
                                  }
                                  >
                                      <Input />
                                  </Form.Item>
                                  <Form.Item name="reorderLabel" label="Reorder Label"
                                rules={[
                                  {                                    
                                    pattern: new RegExp(
                                      /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/
                                    ),
                                    message: "Please input only number"
                                  }
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
                                  <Form.Item>
                              </Form.Item>
                    </Col>
                </Row>                   

                <Form.Item>
                  <Button style={{float: 'right'}}  key="submit" type="primary" htmlType="submit">
                    Create Item
                  </Button>
                </Form.Item>

                </Form>

            </Modal>
        </>
    )
}

export default CreateItem;
