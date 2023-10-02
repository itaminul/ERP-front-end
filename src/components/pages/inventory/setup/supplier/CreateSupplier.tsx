// import { Button, Form, type FormInstance, Input, Select, Space } from 'antd';
// import React, { type ReactNode, useState } from 'react';
// const { Option } = Select;
// const layout = {
//   labelCol: { span: 8 },
//   wrapperCol: { span: 16 },
// };

// const tailLayout = {
//   wrapperCol: { offset: 8, span: 16 },
// };

// interface onClose {
//   onClose: () => void;
//   children?: ReactNode;
// }
// const CreateSupplier = (props: onClose) => {
//   const accessToken = localStorage.getItem('accessToken');
//   const formRef = React.useRef<FormInstance>(null);

//   // const onGenderChange = (value?: string) => {};

//   const [responseMessage, setResponseMessage] = useState<string | null>('');
//   const [error, setError] = useState<string | null>('');
//   const onFinish = async (values: any) => {
//     const CreateNewArray = {
//       supplierName: values.supplierName,
//       supplierDescription: values.supplierDescription,
//       orgId: Number(values.orgId),
//       countryId: Number(values.countryId),
//     };
//     console.log('CreateNewArray', CreateNewArray);
//     try {
//       const response = await fetch(
//         `${process.env.REACT_APP_API_URL}/suppliers`,
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${accessToken}`,
//           },
//           body: JSON.stringify(CreateNewArray),
//         }
//       );
//       if (response.ok) {
//         setResponseMessage('Submit Successfully');
//         setError('null');
//         setTimeout(() => {
//           props.onClose();
//           setResponseMessage(null);
//         }, 3000);
//       } else {
//         throw new Error('Network response was not ok');
//       }
//     } catch (error: any) {
//       setResponseMessage(null);
//       setError('Error saving data');
//     }
//   };

//   const onReset = () => {
//     formRef.current?.resetFields();
//   };
//   const onFill = () => {
//     formRef.current?.setFieldsValue({
//       supplierName: 'Habib International',
//       countryId: 'Bangladesh',
//     });
//   };
//   return (
//     <>
//       <Form
//         {...layout}
//         ref={formRef}
//         name="control-ref"
//         // onFinish={onFinish}
//         style={{ maxWidth: 600 }}
//       >
//         <div>
//           {/* {responseMessage && (
//             <p style={{ color: 'blue' }}>{responseMessage}</p>
//           )} */}
//           {/* {error && <p>{error}</p>} */}
//         </div>
//         <Form.Item
//           name="supplierName"
//           htmlFor="string"
//           label="Supplier Name"
//           rules={[
//             { required: true },
//             {
//               min: 5,
//               max: 30,
//               message: 'Value should be less than 5 character',
//             },
//           ]}
//         >
//           <Input />
//         </Form.Item>
//         <Form.Item
//           name="supplierDescription"
//           label="Supplier Description"
//           rules={[{ required: true }]}
//         >
//           <Input />
//         </Form.Item>
//         <Form.Item
//           name="countryId"
//           label="Country"
//           rules={[{ required: true }]}
//         >
//           <Select
//             placeholder="Select a option and change input text above"
//             // onChange={onGenderChange}
//             allowClear
//           >
//             <Option value="1">Bangladesh</Option>
//             <Option value="2">Australia</Option>
//             <Option value="3">Canada</Option>
//           </Select>
//         </Form.Item>
//         <Form.Item
//           name="orgId"
//           label="Organization"
//           rules={[{ required: true }]}
//         >
//           <Select
//             placeholder="Select a option and change input text above"
//             // onChange={onGenderChange}
//             allowClear
//           >
//             <Option value="1">A</Option>
//             <Option value="2">B</Option>
//             <Option value="3">C</Option>
//           </Select>
//         </Form.Item>
//         <Form.Item
//           noStyle
//           shouldUpdate={(prevValues, currentValues) =>
//             prevValues.gender !== currentValues.gender
//           }
//         >
//           {({ getFieldValue }) =>
//             getFieldValue('gender') === 'other' ? (
//               <Form.Item
//                 name="activeStatus"
//                 label="Active Status"
//                 rules={[{ required: true }]}
//               >
//                 <Input />
//               </Form.Item>
//             ) : null
//           }
//         </Form.Item>
//         <Form.Item {...tailLayout}>
//           <Space>
//             <Button type="default" htmlType="submit">
//               Submit
//             </Button>
//             <Button htmlType="button" onClick={onReset}>
//               Reset
//             </Button>
//             <Button type="link" htmlType="button" onClick={onFill}>
//               Fill form
//             </Button>
//           </Space>
//         </Form.Item>
//       </Form>
//     </>
//   );
// };

// export default CreateSupplier;
