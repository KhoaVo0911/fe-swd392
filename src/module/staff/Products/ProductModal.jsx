import { Modal, Form, Row, Col, Input} from "antd";
import { forwardRef, useImperativeHandle, useState } from "react";
import { FORM_RULES } from "../../../utils/constant";
import PropTypes from 'prop-types';

const ProductModal = ({ productUpdate }, ref) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [form] = Form.useForm();

  useImperativeHandle(ref, () => {
    return {
      openModal: () => setIsOpenModal(true),
    };
  });

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  const onFinishForm = () => {};

  return (
    <Modal
      title={productUpdate ? "Update Product" : "New Product"}
      open={isOpenModal}
      onCancel={onCloseModal}
    >
      <Form form={form} onFinish={onFinishForm} layout="vertical">
        <Row gutter={[10, 10]}>
          <Col span={24}>
            <Form.Item name="name" label="Name" rules={[FORM_RULES.required]}>
              <Input />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item name="price" label="Price" rules={[FORM_RULES.required]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="description" label="Description" required={false}>
              <Input.TextArea rows={3} />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="quantity" label="Quantity" required={false}>
              <Input.TextArea rows={3} />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="size" label="Size" required={false}>
              <Input.TextArea rows={3} />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="category" label="Category" required={false}>
              <Input.TextArea rows={3} />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item name="image" label="Image" required={false}>
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};
ProductModal.propTypes = {
  productUpdate: PropTypes.bool, // Change this according to the expected type
};

export default forwardRef(ProductModal);
