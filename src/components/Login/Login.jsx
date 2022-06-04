import { useContext } from "react";
import LoginContext from "../../context/LoginContext";
import Loading from "../Loading/Loading";
import Message from "../Message";
import person from "../../assets/person.svg";
import "./Login.css";

const Login = () => {
  const {
    handleSubmit,
    handleChange,
    loginForm,
    loginValidations,
    loginError,
    loading,
  } = useContext(LoginContext);

  return (
    <div className="login-container">
      <div className="login">
        <h2 className="login__title">Login</h2>
        <img src={person} alt="person" className="login__img" />
        <form onSubmit={handleSubmit} className="login__form">
          <input
            type="email"
            value={loginForm.correo}
            name="correo"
            onChange={handleChange}
            placeholder="Email"
            required
            className="login__form-input"
          />
          <input
            type="password"            
            value={loginForm.pass}
            name="pass"
            onChange={handleChange}
            placeholder="Password"
            
            required
            className="login__form-input"
          />
          <input type="submit" value="SEND" className="login__form-send" />
        </form>
      </div>
      {loginValidations.correo && (
        <Message msj={loginValidations.correo} color={"#d90855"} />
      )}
      {loginError && (
        <Message
          msj={
            loginError.resErr.errors
              ? loginError.resErr.errors[0].msg
              : loginError.resErr.msg
          }
          color={"#d90855"}
        />
      )}
      {loading && <Loading />}
    </div>
  );
};
export default Login;
