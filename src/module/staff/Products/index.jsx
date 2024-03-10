import  { useRef } from "react";
import TableLayout from "../../../layouts/TableLayout";
import { PRODUCT_COLUMNS, PRODUCT_DATA_SOURCE } from "./constant";
import ProductModal from "./ProductModal";

const StaffProducts = () => {
  const productActionModal = useRef();

  const searchStaffProduct = () => {};

  return (
    <>
      <ProductModal ref={productActionModal} />

      <TableLayout
        tableColumns={PRODUCT_COLUMNS}
        tableDataSource={PRODUCT_DATA_SOURCE}
        actionName={"New Product"}
        onchangeSearch={searchStaffProduct}
        addNewAction={() => productActionModal.current.openModal()}
      />
    </>
  );
};

export default StaffProducts;
