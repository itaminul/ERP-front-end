// import { Button, Form, Input, Modal, Select } from 'antd';
// import React, { useEffect, useState } from 'react';
// const { Option } = Select;
// interface UpdateComponentProps {
//   open: boolean;
//   prevData: Data | null;
//   onUpdate: (data: Data) => void;
//   onCancel: () => void;
// }

// interface Data {
//   id: number;
//   supplierName: string;
//   supplierDescription: string;
//   countryId: number;
//   orgId: number;
// }

// // interface CountryData {
// //   id: number;
// //   countryName: string;
// // }

// const EditNewSupplier: React.FC<UpdateComponentProps> = ({
//   open,
//   prevData,
//   onUpdate,
//   onCancel,
// }) => {
//   // const accessToken = localStorage.getItem('accessToken');
//   const [form] = Form.useForm();
//   const [formData, setFormData] = useState<Data | null>(null);

//   useEffect(() => {
//     setFormData(prevData);
//   }, [prevData]);

//   const handleUpdate = () => {
//     if (formData) {
//       onUpdate(formData);
//       onCancel();
//     }
//   };

//   // featch countryes
//   // useEffect(() => {
//   //   featchCountrys();
//   // }, []);
//   // const [countries, setCountries] = useState<CountryData[] | null>(null);

//   // const featchCountrys = async () => {
//   //   try {
//   //     const response = await fetch(
//   //       `${process.env.REACT_APP_API_URL}/countries`,
//   //       {
//   //         method: 'GET',
//   //         headers: {
//   //           'Content-type': 'application/json',
//   //           Authorization: `Bearer ${accessToken}`,
//   //         },
//   //       }
//   //     );
//   //     const jsonData = await response.json();
//   //     const showData = await jsonData.response;
//   //     setCountries(showData);
//   //   } catch (error) {
//   //     console.log('error', error);
//   //   }
//   // };
//   // Handle the change of the Select component
//   // const [setFormDataa] = useState({
//   //   selectOption: '',
//   // });
//   // const handleSelectChange = (value: any) => {
//   //   setFormDataa({
//   //     ...formData,
//   //     selectOption: value,
//   //   });
//   // };

//   // console.log('countries', countries);
//   return (
//     <Modal
//       title="Update Data"
//       open={!!open}
//       //   onOk={handleUpdate}
//       // onCancel={onCancel}
//       width={600}
//       footer={[
//         <Button type="default" onClick={onCancel}>
//           Cancel
//         </Button>,
//         <Button
//           type="primary"
//           style={{ background: 'blue' }}
//           onClick={handleUpdate}
//         >
//           Update
//         </Button>,
//       ]}
//     >
//       {formData && (
//         <>
//           <Form form={form} layout="vertical" autoComplete="off">
//             <Form.Item
//               name="supplierName"
//               label="Supplier name"
//               valuePropName={formData.supplierName}
//               rules={[
//                 {
//                   required: true,
//                 },
//               ]}
//             >
//               <Input
//                 value={formData.supplierName}
//                 onChange={(e) => {
//                   setFormData({ ...formData, supplierName: e.target.value });
//                 }}
//               />
//             </Form.Item>

//             <Form.Item
//               name="supplierDescription"
//               valuePropName={formData.supplierDescription}
//               label="Supplier Description"
//               rules={[{ required: true }]}
//             >
//               <Input
//                 value={formData.supplierDescription}
//                 onChange={(e) => {
//                   setFormData({
//                     ...formData,
//                     supplierDescription: e.target.value,
//                   });
//                 }}
//               />
//             </Form.Item>
//             <Form.Item
//               name="countryId"
//               label="Country"
//               valuePropName="checked"
//               rules={[{ required: true }]}
//             >
//               {/* <Select
//                 placeholder="Select a option and change input text above"
//                 onSelect={handleSelectChange}
//                 // onSelect={(e) => setFormData({ ...formData, countryId:e.valueOf() })}
//                 value={formData.countryId}
//               >
//                 {countries?.map((country) => (
//                   <Option key={formData.countryId} value={country.id}>
//                     {country.countryName}
//                   </Option>
//                 ))}
//               </Select> */}
//             </Form.Item>
//             <Form.Item
//               name="orgId"
//               label="Organization"
//               rules={[{ required: true }]}
//               valuePropName="checked"
//             >
//               <Select
//                 value={formData.orgId}
//                 placeholder="Select a option and change input text above"
//                 allowClear
//               >
//                 <Option key={formData.orgId} value="1">
//                   A
//                 </Option>
//                 <Option key={formData.orgId} value="2">
//                   B
//                 </Option>
//                 <Option key={formData.orgId} value="3">
//                   C
//                 </Option>
//               </Select>
//             </Form.Item>
//           </Form>
//         </>
//       )}
//     </Modal>
//   );
// };

// export default EditNewSupplier;
