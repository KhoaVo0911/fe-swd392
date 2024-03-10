import { useState } from "react";
import "../../styles/pages/loginPage.scss";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FORM_RULES, PAGE_ROUTES } from "../../utils/constant";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import AuthenticateAPI from "../../api/authen";
import { Button, Col, Form, Input, Row, message } from "antd";

const LoginPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [remember, setRemember] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    const { mutate, isPending } = useMutation({
        mutationFn: AuthenticateAPI.LoginAccount,
        onSuccess: (response) => {
            localStorage.setItem("accessToken", response.token);
            navigate(PAGE_ROUTES.SHOP);
        },
        onError: () => {
            messageApi.error("Tài khoản của bạn không hợp lệ. Vui lòng thử lại!!");
        },
    });

    // Cập nhật bộ xử lý remember
    const rememberHandler = (e) => {
        setRemember(e.target.checked);
    };

    // Định nghĩa hàm submitForm
    const submitForm = (values) => {
        mutate({ ...values, remember });
    };
  // const submitForm = (values) => {
  //     mutate(values);
  // };

  return (
    <Grid container className="loginWrapper">
      {contextHolder}
      <Grid item className="loginForm">
        <h2>Sign In</h2>
        <p>Sign in to your account</p>
        <Form
          layout="vertical"
          requiredMark={false}
          form={form}
          onFinish={submitForm}
        >
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Form.Item
                name="username"
                label="User Name"
                rules={[FORM_RULES.required]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="password"
                label="Password"
                rules={[FORM_RULES.required]}
              >
                <Input.Password />
              </Form.Item>
            </Col>

            <Col span={24}>
              <div className="formAction">
                <FormControlLabel
                  control={
                    <Checkbox checked={remember} onChange={rememberHandler} />
                  }
                  label="Remember Me"
                />
                <a href={`${PAGE_ROUTES.FORGOT_PASSWORD}`}>Forgot Password?</a>
              </div>
            </Col>

            <Col span={24}>
              <Button
                loading={isPending}
                htmlType="submit"
                className="cBtnTheme"
                style={{
                  width: "100%",
                  fontSize: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Login Account
              </Button>
            </Col>

            <Col span={24}>
              <p className="noteHelp">
                Don&apos;t have an account?{" "}
                <a href={PAGE_ROUTES.REGISTER}>Create free account</a>
              </p>
            </Col>
          </Row>
        </Form>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
