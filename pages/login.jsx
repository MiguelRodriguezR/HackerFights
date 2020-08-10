import Card from "../components/ui/Card";
import LoginContainer from "../components/ui/Login/LoginContainer";
import FormField from "../components/ui/InputField";
import ButtonForm from "../components/ui/Button";
import Error from "../components/ui/Error";
import firebase from "../firebase";
import { useState } from "react";
import useValidation from "../hooks/useValidation";
import validateCreateAccount from "../validators/validateCreateAccount";
import Router from "next/router";

const INITIAL_STATE = { email: "", password: "" };

export default function Login() {
  let notVerified = null;
  if (typeof window !== "undefined") {
    notVerified = localStorage.getItem("notVerified");
  }
  const [serverError, setServerError] = useState(
    notVerified
      ? "Please verify your account before Log In, a verification link has been sent to your email account"
      : false
  );

  const {
    values,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useValidation(INITIAL_STATE, validateCreateAccount, login);

  async function login() {
    try {
      const user = await firebase.login(values.email, values.password);
      Router.push("/");
    } catch (error) {
      setServerError(error.message);
    }
  }

  return (
    <LoginContainer>
      <Card className="card">
        <img className="logo" src="/static/img/logoUnedited.png" alt="" />
        <form onSubmit={handleSubmit} noValidate>
          {errors.email && <Error>{errors.email}</Error>}
          <FormField>
            <i className="material-icons">email</i>
            <input
              type="email"
              placeholder="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormField>
          {errors.password && <Error>{errors.password}</Error>}
          <FormField>
            <i className="material-icons">lock</i>
            <input
              type="password"
              placeholder="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormField>
          {serverError && <Error>{serverError}</Error>}
          <ButtonForm type="submit"> LOG IN </ButtonForm>
        </form>
        <div className="sub">
          <a>Forgot Password?</a>
          <a onClick={() => Router.push("/signup")}>Sign Up</a>
        </div>
      </Card>
    </LoginContainer>
  );
}
