import { useState } from "react";
import "../../styles/pages/loginPage.scss";
import Grid from "@mui/material/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; // Sử dụng cho React Router
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const RegisterPage = () => {
    const [formValues, setFormValues] = useState({
        email: "",
        full_name: "",
        password: "",
        confirm_password: "",
    });

    const navigate = useNavigate(); // Sử dụng này cho React Router

    const [validator] = useState(
        new SimpleReactValidator({
            className: "errorMessage",
        })
    );

    const changeHandler = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
        validator.showMessages();
    };

    const submitForm = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            setFormValues({
                email: "",
                full_name: "",
                password: "",
                confirm_password: "",
            });
            validator.hideMessages();
            toast.success("Registration Complete successfully!");
            navigate("/login"); // Sử dụng navigate thay vì router
        } else {
            validator.showMessages();
            toast.error("Empty field is not allowed!");
        }
    };
    return (
        <Grid className="loginWrapper">
            <Grid className="loginForm">
                <h2>Signup</h2>
                <p>Signup your account</p>
                <form onSubmit={submitForm}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Full Name"
                                variant="outlined"
                                name="full_name"
                                label="Name"
                                // InputLabelProps={{
                                //     shrink: true,
                                // }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="E-mail"
                                variant="outlined"
                                name="email"
                                label="E-mail"
                                // InputLabelProps={{
                                //     shrink: true,
                                // }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Password"
                                variant="outlined"
                                name="password"
                                label="Password"
                                // InputLabelProps={{
                                //     shrink: true,
                                // }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Confirm Password"
                                variant="outlined"
                                name="confirm_password"
                                label="Confirm Password"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Grid className="formFooter">
                                <Button
                                    fullWidth
                                    className="cBtnTheme"
                                    type="submit"
                                >
                                    Sign Up
                                </Button>
                            </Grid>
                            <Grid className="loginWithSocial">
                                <Button className="google">
                                    <img src="../../public/images/google_icon.png"></img>
                                    <p>Continue with Google</p>
                                </Button>
                            </Grid>
                            <p className="noteHelp">
                                Already have an account?{" "}
                                <a href="/login">Return to Sign In</a>
                            </p>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
};

export default RegisterPage;
