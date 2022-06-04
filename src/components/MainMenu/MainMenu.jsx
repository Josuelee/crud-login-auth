import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginContext from "../../context/LoginContext";
import user from "../../assets/user.png";
import "./MainMenu.css";

const MainMenu = () => {
  const { auth, logOut, setAuth } = useContext(LoginContext);

  useEffect(() => {
    const localAuth = JSON.parse(localStorage.getItem("auth"));

    setAuth(localAuth ? localAuth : null);
  }, [setAuth]);

  if (!auth) return null;

  return (
    <div className="main__menu background__gradient ">
      <div className="main__menu-container container">
        <nav className="main__menu-navbar">
          <Link to="/">Home</Link>
          <Link to="table">Table</Link>
        </nav>
        <div className="main__menu-action">
          <span className="main__menu-action_image">
            <img src={user} alt="user" />
          </span>
          <h1>{auth.user.nombre}</h1>
          <button onClick={logOut}>LogOut</button>
        </div>
      </div>
    </div>
  );
};
export default MainMenu;
