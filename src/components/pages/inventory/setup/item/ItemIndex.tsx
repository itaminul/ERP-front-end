import Sidebar from '../../../inventory/setup/item/ItemTable';
import ItemTable from './ItemTable';

const ItemIndex = () => {
  return (
    <>
      <Sidebar />
      <div style={{ marginLeft: '250px', marginTop: '-580px', minHeight: 580 }}>
        <ItemTable />
      </div>
    </>
  );
};

export default ItemIndex;
