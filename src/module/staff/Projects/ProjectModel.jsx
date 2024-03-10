import { Modal, Form, Row, Col, Input, DatePicker } from "antd";
import { forwardRef, useImperativeHandle, useState } from "react";
import { FORM_RULES } from "../../../utils/constant";
import PropTypes from "prop-types";

const ProjectModal = ({ projectUpdate }, ref) => {
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
      title={projectUpdate ? "Update Project" : "New Project"}
      open={isOpenModal}
      onCancel={onCloseModal}
    >
      <Form form={form} onFinish={onFinishForm} layout="vertical">
        <Row gutter={[10, 10]}>
          <Col span={24}>
            <Form.Item name="title" label="Title" rules={[FORM_RULES.required]}>
              <Input />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item name="style" label="Style" rules={[FORM_RULES.required]}>
              <Input />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="startDate"
              label="Start date"
              rules={[FORM_RULES.required]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="endDate"
              label="End date"
              rules={[FORM_RULES.required]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item name="description" label="Description" required={false}>
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
ProjectModal.propTypes = {
  projectUpdate: PropTypes.bool,
};

export default forwardRef(ProjectModal);
