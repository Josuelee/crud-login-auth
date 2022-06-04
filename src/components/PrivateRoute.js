import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import LoginContext from "../context/LoginContext";
import MainMenu from "./MainMenu/MainMenu";

const PrivateRoute = () => {
  const { auth } = useContext(LoginContext);

  const localAuth = JSON.parse(localStorage.getItem("auth")) || auth;

  return localAuth ? (
    <>
      <MainMenu />
      <Outlet />
    </>
  ) : (
    <Navigate to="login" />
  );
};
export default PrivateRoute;
