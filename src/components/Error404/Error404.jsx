import { useNavigate } from "react-router-dom";
import error from "../../assets/404.png";
import "./Error404.css";

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div className="error404">
      <div className="error404__container">
        <div className="error404__content">
          <h1>Error 404</h1>
          <p>Something Went Wrong!</p>
          <div className="error404__action">
            <button onClick={() => navigate("/")}>Go Back</button>
          </div>
        </div>
        <div className="error404__image">
          <img src={error} alt="a" />
        </div>
      </div>
    </div>
  );
};
export default Error404;
