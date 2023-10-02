// // src/components/DataTable.tsx
// import React, { useState, useEffect } from 'react';
// import { Table, Button, Modal, Form, Input } from 'antd';

// const SupplierTable: React.FC = () => {
//   const [data, setData] = useState<any[]>([]);
//   // const [loading, _setLoading] = useState<boolean>(false);
//   const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
//   const [form] = Form.useForm();
//   const [recordToEdit, setRecordToEdit] = useState<any | null>(null);

//   const columns = [
//     {
//       title: 'ID',
//       dataIndex: 'id',
//       key: 'id',
//     },
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       key: 'name',
//     },
//     {
//       title: 'Actions',
//       dataIndex: 'actions',
//       key: 'actions',
//       render: (_: any, record: any) => (
//         <Button
//           type="link"
//           onClick={() => {
//             handleEdit(record);
//           }}
//         >
//           Edit
//         </Button>
//       ),
//     },
//   ];

//   const accessToken = localStorage.getItem('accessToken');
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         `${process.env.REACT_APP_API_URL}/suppliers`,
//         {
//           method: 'GET',
//           headers: {
//             'Content-type': 'application/json',
//             Authorization: `Bearer ${accessToken}`,
//           },
//         }
//       );
//       const jsonData = await response.json();
//       const showResult = await jsonData.results;
//       setData(showResult);
//       // setData(showResult.map((row: { supplierName: any; supplierDescription: any; }) =>({supplierName:row.supplierName,supplierDescription:row.supplierDescription })) );
//       // setLoading(false);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleEdit = (record: any) => {
//     setRecordToEdit(record);
//     form.setFieldsValue(record);
//     setIsModalVisible(true);
//   };

//   const handleCreate = () => {
//     form.resetFields();
//     setRecordToEdit(null);
//     setIsModalVisible(true);
//   };

//   const handleSave = () => {};

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   return (
//     <div>
//       <Button type="primary" onClick={handleCreate}>
//         Add New
//       </Button>
//       <Table
//         dataSource={data}
//         columns={columns}
//         // loading={loading}
//         rowKey="id"
//       />

//       <Modal
//         title={recordToEdit ? 'Edit Record' : 'Create Record'}
//         open={isModalVisible}
//         onOk={handleSave}
//         onCancel={handleCancel}
//       >
//         <Form form={form}>
//           <Form.Item
//             name="name"
//             label="Name"
//             rules={[{ required: true, message: 'Please enter a name' }]}
//           >
//             <Input />
//           </Form.Item>
//           {/* Add more fields as needed */}
//         </Form>
//       </Modal>
//     </div>
//   );
// };

// export default SupplierTable;
