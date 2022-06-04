import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { formValidations } from "../helpers/formValidations";
const LoginContext = createContext();

const url = "https://myfirst-rest-server.herokuapp.com/api/auth/login";
const initialForm = {
  correo: "",
  pass: "",
};

const LoginProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const [loginValidations, setLoginValidations] = useState({});
  const [loginForm, setLoginForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const logInMethod = async () => {
    try {
      setLoading(true);
      const options = {
        body: JSON.stringify(loginForm),
        headers: {
          "Content-type": "application/json; charset=utf-8",
        },
        method: "POST",
      };

      const res = await fetch(url, options);

      if (!res.ok) {
        const resErr = await res.json();

        const newError = {
          statusText: res.statusText || "Ocurrio un error",
          status: res.status || 0,
          resErr,
        };

        setLoginError(newError);
        setAuth(null);
        setLoading(false);
        throw newError;
      }

      const json = await res.json();

      setLoginError(null);
      setLoading(false);
      setAuth(json);
      localStorage.setItem("auth", JSON.stringify(json));

      navigate("/");
    } catch (err) {
      console.log("En el catch", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError(null);

    setLoginValidations(formValidations(loginForm));
    if (Object.keys(formValidations(loginForm)).length > 0) return;
    await logInMethod();
  };

  const logOut = () => {
    setAuth(null);
    localStorage.setItem("auth", JSON.stringify(null));
    setLoginForm(initialForm);
    navigate("/login");
  };

  const data = {
    auth,
    handleSubmit,
    loginForm,
    handleChange,
    loginError,
    loginValidations,
    loading,
    logOut,
    setAuth,
  };
  return <LoginContext.Provider value={data}>{children}</LoginContext.Provider>;
};

export { LoginProvider };
export default LoginContext;
