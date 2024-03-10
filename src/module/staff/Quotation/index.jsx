import { useRef } from "react";
import QuotationModal from "./QuotationModal";
import { QUOTATION_COLUMNS, QUOTATION_DATA_SOURCE } from "./constant";
import TableLayout from "../../../layouts/TableLayout";
import QuotationDetailModal from "./QuotationDetailModal";

const StaffQuotation = () => {
  const quotationModal = useRef();
  const quotationDetailModal = useRef();

  const searchStaffQuotation = () => {};

  return (
    <>
      <QuotationModal ref={quotationModal} />
      <QuotationDetailModal ref={quotationDetailModal} />

      <TableLayout
        tableColumns={QUOTATION_COLUMNS}
        tableDataSource={QUOTATION_DATA_SOURCE}
        actionName={"Confirm Quotation"}
        onchangeSearch={searchStaffQuotation}
        addNewAction={() => quotationModal.current.openModal()}
        viewProductDetail={() => console.log("Hello world")}
      />
    </>
  );
};

export default StaffQuotation;
