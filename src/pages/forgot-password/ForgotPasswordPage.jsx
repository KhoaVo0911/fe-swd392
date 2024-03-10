import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import SimpleReactValidator from "simple-react-validator";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom"; // React Router for navigation
import { toast, ToastContainer } from "react-toastify"; // Toast notifications
import 'react-toastify/dist/ReactToastify.css'; // Default style for react-toastify
import "../../styles/pages/loginPage.scss";

const ForgotPassword = () => {
    const [values, setValues] = useState({ email: "" });
    const navigate = useNavigate(); // Hook from React Router for navigation

    const validator = new SimpleReactValidator({
        className: "errorMessage",
    });

    const changeHandler = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        validator.showMessages();
    };

    const submitForm = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            setValues({ email: "" }); // Reset form state
            validator.hideMessages();
            toast.success("You successfully Reset!");
            navigate("/login"); // Redirecting using React Router
        } else {
            validator.showMessages();
            toast.error("Empty field is not allowed!");
        }
    };

    return (
        <Grid className="loginWrapper">
            <ToastContainer /> {/* This will render the toast notifications */}
            <Grid className="loginForm">
                <h2>Forgot Password</h2>
                <p>Reset your account password</p>
                <form onSubmit={submitForm}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="E-mail"
                                variant="outlined"
                                name="email"
                                label="E-mail"
                                onBlur={changeHandler}
                                onChange={changeHandler}
                                value={values.email} // Bind state value
                            />
                            {validator.message('email', values.email, 'required|email')}
                        </Grid>
                        <Grid item xs={12}>
                            <Grid className="formFooter">
                                <Button
                                    fullWidth
                                    className="cBtn cBtnLarge cBtnTheme"
                                    type="submit"
                                >
                                    Resend Password
                                </Button>
                            </Grid>
                            {/* Remove Google sign-in or handle separately */}
                            <p className="noteHelp">
                                Already have an account? <a href="/login">Return to Sign In</a>
                            </p>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
};

export default ForgotPassword;
