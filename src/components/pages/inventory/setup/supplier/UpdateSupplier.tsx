import { Modal } from 'antd';
import { type EditSupplierProps } from './editSupplierDataType';

function UpdateSupplier({ title, open, onCancel }: EditSupplierProps) {
  return (
    <>
      <Modal title={title} open={open} onCancel={onCancel} />
    </>
  );
}

export default UpdateSupplier;
