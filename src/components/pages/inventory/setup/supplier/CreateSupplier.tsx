import { Button, Modal } from 'antd';
import { type CreateSupplierProps } from './supplierDataType';

function CreateSupplier({ title, open, onCancel }: CreateSupplierProps) {
  return (
    <>
      <Modal
        title={title}
        open={open}
        onCancel={onCancel}
        footer={[
          <Button
            style={{ float: 'left', marginTop: '-20px' }}
            key="cancel"
            onClick={onCancel}
          >
            Cancel
          </Button>,
        ]}
      />
    </>
  );
}

export default CreateSupplier;
