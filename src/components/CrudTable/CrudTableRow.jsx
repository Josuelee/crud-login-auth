import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CrudContext from "../../context/CrudContext";

const CrudTableRow = ({ el }) => {
  const { setDataToEdit, deleteUser } = useContext(CrudContext);
  const navigate = useNavigate();

  const { uid, nombre, correo, rol } = el;
  let pass = "";

  return (
    <tr>
      <td>{el.nombre}</td>
      <td>{el.correo}</td>
      <td>{el.rol}</td>
      <td>
        <button className="actions-buttons" onClick={() => deleteUser(el.uid)}>
          Delete
        </button>
        <button
          className="actions-buttons"
          onClick={() => {
            navigate("/");
            setDataToEdit({ uid, nombre, correo, rol, pass });
          }}
        >
          Edit
        </button>
      </td>
    </tr>
  );
};
export default CrudTableRow;
