import Sidebar from "../../../../../layouts/Sidebar";
import SupplierSetuTale from "./SupplierSetupTable";

const SupplierSetupIndex = () => {
    return (
        <>
            <Sidebar />
            <div style={{ marginLeft: "250px", marginTop: "-580px", minHeight: 580 }}>
                <SupplierSetuTale />
            </div>
        </>
    )
}

export default SupplierSetupIndex;