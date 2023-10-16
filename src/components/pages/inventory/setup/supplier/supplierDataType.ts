export interface Suppliers {
  supplierName: string;
  supplierDescription: string;
}

export interface CreateSupplierProps {
  title: string;
  open: boolean;
  onCancel: () => void;
}

export interface UpdateSupplierProps extends CreateSupplierProps {
  supplier: Suppliers | null;
}
