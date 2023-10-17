export interface Suppliers {
  supplierName: string;
  supplierDescription: string;
}

export interface EditSupplierProps {
  title: string;
  open: boolean;
  data: any;
  onCancel: () => void;
}

export interface UpdateSupplierProps extends EditSupplierProps {
  supplier: Suppliers | null;
}
