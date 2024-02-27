export interface Suppliers {
  supplierName: string;
  supplierDescription: string;
}

export interface EditSupplierProps {
  title: string;
  open: boolean;
  onCancel: () => void;
}

export interface UpdateSupplierProps extends EditSupplierProps {
  supplier: Suppliers | null;
}
