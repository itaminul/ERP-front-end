// Modal.tsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../redux/features/modalSlice';
import { RootState } from '../redux/store/store';
import { Button, Modal } from 'antd';

const ModalShow: React.FunctionComponent = () => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
  
    const showModal = () => {
      setOpen(true);
    };
  
    const handleOk = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setOpen(false);
      }, 3000);
    };
  
    const handleCancel = () => {
      setOpen(false);
    };
  

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Open Modal with customized footer
            </Button>
            <Modal
                open={open}
                title="Title"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Return
                    </Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                        Submit
                    </Button>,
                    <Button
                        key="link"
                        href="https://google.com"
                        type="primary"
                        loading={loading}
                        onClick={handleOk}
                    >
                        Search on Google
                    </Button>,
                ]}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
};

export default ModalShow;
