import Card from "../components/ui/Card";
import LoginContainer from "../components/ui/Login/LoginContainer";
import FormField from "../components/ui/InputField";
import ButtonForm from "../components/ui/Button";
import { useState } from "react";
import useValidation from "../hooks/useValidation";
import validateCreateAccount from "../validators/validateCreateAccount";
import firebase from "../firebase";
import Error from "../components/ui/Error";
import Router from "next/router";

const INITIAL_STATE = { username: "", email: "", password: "" };

export default function Login() {
  const [error, setError] = useState(false);

  const {
    values,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useValidation(INITIAL_STATE, validateCreateAccount, createAccount);

  async function createAccount() {
    try {
      await firebase.register(values.username, values.email, values.password);
      Router.push("/");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <LoginContainer>
      <Card className="card">
        <img className="logo" src="/static/img/logoUnedited.png" alt="" />
        <form onSubmit={handleSubmit} noValidate>
          {errors.username && <Error>{errors.username}</Error>}
          <FormField>
            <i className="material-icons">person</i>
            <input
              type="text"
              placeholder="username"
              name="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormField>
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
          {error && <Error>{error}</Error>}
          <ButtonForm type="submit"> SIGN UP </ButtonForm>
        </form>
        <div className="sub">
          <a>Forgot Password?</a>
        </div>
      </Card>
    </LoginContainer>
  );
}
