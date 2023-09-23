import React, { ReactNode } from "react";

interface onClose {
    onClose: () => void;
    children: ReactNode;
  }

  interface EditModalProps {
    visible: boolean;
    onClose: () => void;
    // onEdit: (id: number, updatedData: string) => void;
    initialValue: string;
    recordId: number | null;
    children: ReactNode;
  }

const UpdateSupplier: React.FC<EditModalProps> =({
    visible,
    initialValue,
    recordId,
}) => {
     console.log("recordId", recordId)
    return(
        <>
            Update supplier {recordId}
        </>
    )
}

export default UpdateSupplier;