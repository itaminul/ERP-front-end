import React, { useState } from 'react';
import { Alert } from 'antd';

interface DataAlertProps {
  successVisible: boolean;
  errorVisible: boolean;
  hideSuccessAlert: () => void;
  hideErrorAlert: () => void;
}

const SubmitAlert: React.FC<DataAlertProps> = ({
  successVisible,
  errorVisible,
  hideSuccessAlert,
  hideErrorAlert,
}) => {
  return (
    <div>
      {successVisible && (
        <Alert
          message="Success"
          description="Data saved successfully"
          type="success"
          closable
          onClose={hideSuccessAlert}
        />
      )}
      {errorVisible && (
        <Alert
          message="Error"
          description="Error: Data could not be saved"
          type="error"
          closable
          onClose={hideErrorAlert}
        />
      )}
    </div>
  );
};

export default SubmitAlert;
