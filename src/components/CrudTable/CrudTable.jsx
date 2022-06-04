import { useContext } from "react";
import CrudContext from "../../context/CrudContext";
import CrudTableRow from "./CrudTableRow";
import person from "../../assets/Person.png";
import "./CrudTable.css";
const CrudTable = () => {
  const { db, startPagination, setStartPagination } = useContext(CrudContext);

  return (
    <div className="crud__table ">
      <div className="crud__table-container">
        <h2>Information</h2>
        <table className="crud__table-container-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {db.length > 0 ? (
              db.map((el) => <CrudTableRow key={el.uid} el={el} />)
            ) : (
              <tr>
                <td colSpan={4}>No hay datos</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="crud__table-buttons">
          {startPagination > 0 && (
            <button onClick={() => setStartPagination((state) => state - 5)}>
              Atras
            </button>
          )}
          <button onClick={() => setStartPagination((state) => state + 5)}>
            Siguiente
          </button>
        </div>
      </div>
      <div className="crud__table-image">
        <img src={person} alt="person" />
      </div>
    </div>
  );
};
export default CrudTable;
