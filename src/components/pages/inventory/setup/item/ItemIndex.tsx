import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setBreadcrumbs } from '../../../../../redux/features/breadcrumbSlice';
import ItemTable from './ItemTable';

const ItemIndex = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setBreadcrumbs([
        {
          home: 'Dashboard',
          homePath: '/dashboard',
          label: 'Item List',
          path: '/set-item',
        },
      ])
    );
  }, [dispatch]);
  return (
    <>
      <ItemTable />
    </>
  );
};

export default ItemIndex;
