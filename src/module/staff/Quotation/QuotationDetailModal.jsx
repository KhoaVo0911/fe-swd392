import { Modal } from "antd";
import { forwardRef, useImperativeHandle, useState } from "react";

const QuotationDetailModal = (ref) => { // Remove empty destructuring if no props are used
  const [isOpenModal, setIsOpenModal] = useState(false);

  useImperativeHandle(ref, () => ({
    openModal: () => setIsOpenModal(true),
  }));

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  // Removed unused variables and functions

  return (
    <Modal
      title="Quotation Detail"
      onCancel={onCloseModal}
      closable
      width={800}
      open={isOpenModal}
    >
      QuotationDetailModal
    </Modal>
  );
};

export default forwardRef(QuotationDetailModal);
