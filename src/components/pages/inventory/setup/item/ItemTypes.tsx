export interface Items {
  itemName: string;
  itemDescription: string;
  itemCode: string;
  modelNo: string;
  costPrice: number;
  salePrice: number;
  taxRate: number;
  reorderLabel: number;
  itemImage: string;
  remarks: string;
  itemGroupId: number;
  supplierId: number;
  manufactureDate: Date;
  expireDate: Date;
}

export interface CreateItemsProps {
  title: string;
  visible: boolean;
  onCancel: () => void;
}

export interface UpdateItemsProps extends CreateItemsProps {
  items: Items | null;
}
