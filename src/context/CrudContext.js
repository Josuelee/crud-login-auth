import { useState, useEffect, createContext, useContext } from "react";
import LoginContext from "./LoginContext";
const CrudContext = createContext();

const CrudProvider = ({ children }) => {
  const [db, setDb] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [validations, setValidations] = useState(null);
  const [startPagination, setStartPagination] = useState(0);
  const { auth } = useContext(LoginContext);

  const url = "https://myfirst-rest-server.herokuapp.com/api/users/";

  useEffect(() => {
    const request = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${url}?start=${startPagination}`);

        if (!res.ok) {
          const tmpError = {
            statusText: res.statusText || "Error trying to connect with api",
            status: res.status || "000",
            err: true,
          };

          setError(tmpError);
          setDb(null);
          setLoading(false);

          throw tmpError;
        }
        const json = await res.json();

        setDb(json.user);
        setError(false);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    request();
  }, [url, startPagination]);

  const errorValidations = (errors) => {
    if (errors) {
      setValidations([]);
      errors.forEach((el) =>
        setValidations((currentValue) => [el, ...currentValue])
      );
    } else {
      setValidations(null);
    }
  };

  const save = async (data) => {
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(data),
    };

    const res = await fetch(url, options);
    const json = await res.json();
    errorValidations(json.errors);
  };

  const edit = async (data) => {
    const options = {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(data),
    };

    const res = await fetch(`${url}/${data.uid}`, options);
    const json = await res.json();

    const editedData = db.map((el) => (el.uid === data.uid ? data : el));

    setDb(editedData);
    errorValidations(json.errors);
  };

  const deleteUser = async (id) => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-token": auth.token,
      },
    };

    if (window.confirm("¿Desea eliminar al usuario?")) {
      try {
        const res = await fetch(`${url}/${id}`, options);
        const json = await res.json();

        if (!res.ok) {
          const error = {
            status: res.status || 0,
            statusText: json.msg || "NO tiene permisos",
          };

          return setError(error);
        }

        alert(`${json.usuario.nombre} ${json.msg}`);
        const deletedData = db.filter((el) => el.uid !== id);
        setDb(deletedData);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const data = {
    db,
    loading,
    error,
    dataToEdit,
    validations,
    setDataToEdit,
    save,
    edit,
    deleteUser,
    setStartPagination,
    startPagination,
  };

  return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>;
};

export { CrudProvider };

export default CrudContext;
