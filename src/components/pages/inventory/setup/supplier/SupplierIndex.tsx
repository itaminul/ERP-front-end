import { useGetSuppliersQuery } from '../../../../../service/inventory/inventorySupplierApi';

const SupplierIndex = () => {
  const {
    data: data2,
    isLoading: loading2,
    isError: error2,
  } = useGetSuppliersQuery();
  if (loading2) {
    return <div>Loading...</div>;
  }

  if (error2) {
    return <div>Error occurred</div>;
  }
  return (
    <>
      <div className="users">
        {data2?.map((user) => (
          <div className="user" key={user.supplierName}>
            {user.supplierName}
          </div>
        ))}
      </div>
    </>
  );
};

export default SupplierIndex;
