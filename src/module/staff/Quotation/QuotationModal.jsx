import { Modal, Form, Row, Col, Select } from "antd";
import { forwardRef, useImperativeHandle, useState } from "react";
import { FORM_RULES } from "../../../utils/constant";
import PropTypes from "prop-types"

const QuotationModal = ({ quoUpdate }, ref) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [form] = Form.useForm();
  const { Option } = Select; // Ensure 'Option' is defined

  useImperativeHandle(ref, () => {
    return {
      openModal: () => setIsOpenModal(true),
    };
  });

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  const onFinishForm = (values) => {
    // console.log('Received values from form: ', values);
    // // Example: Post the form values to a backend endpoint
    // // This is a pseudo code example. Replace URL with your actual endpoint and setup.
    // fetch('/api/quotation', {
    //     method: 'POST', // or 'PUT' if updating an existing record
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(values),
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log('Success:', data);
    //     // Close the modal after successful submission
    //     setIsOpenModal(false);
    //     // Optional: Show a success message to the user (You might use Ant Design's notification component)
    //     // notification.success({ message: 'Quotation saved successfully!' });
    //     // Optional: Reset the form fields
    //     form.resetFields();
    //     // Additional actions upon successful submission like refreshing a list, redirecting the user, etc.
    // })
    // .catch((error) => {
    //     console.error('Error:', error);
    //     // Optional: Show an error message to the user
    //     // notification.error({ message: 'Error saving quotation!' });
    // });
  };

  return (
    <Modal
      title={quoUpdate ? "Update Quotation" : "Confirm Quotation"}
      open={isOpenModal}
      onCancel={onCloseModal}
    >
      <Form form={form} onFinish={onFinishForm} layout="vertical">
        <Row gutter={[10, 10]}>
          <Col span={24}>
            <Form.Item
              name="status"
              label="Status"
              rules={[FORM_RULES.required]}
            >
              <Select defaultValue={"Active"}>
                <Option value="Active">Active</Option>
                <Option value="Inactive">Inactive</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              name="details"
              label="Product"
              rules={[FORM_RULES.required]}
            >
              <Select defaultValue={"product-1"}>
                <Option value="product-1">Product 1</Option>
                <Option value="product-2">Product 2</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};
QuotationModal.propTypes = {
  quoUpdate: PropTypes.bool, // Define the type based on expected value (true/false for boolean)
};

export default forwardRef(QuotationModal);
