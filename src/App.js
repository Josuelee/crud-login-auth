import { useContext } from "react";
import CrudContext from "./context/CrudContext";
import {
  CrudForm,
  CrudTable,
  Loading,
  Message,
  Error404,
  Login,
} from "./components";

import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

import Seo from "./components/Seo";

const App = () => {
  const { loading, error, validations, db } = useContext(CrudContext);

  return (
    <div className="App">
      <Seo/>     
      <Routes>
        <Route>
          <Route path="login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<CrudForm />} />
            <Route
              path="table"
              element={
                <>
                  {loading && <Loading />}
                  {db && <CrudTable db={db} />}
                </>
              }
            />
          </Route>
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
      {error && (
        <Message
          color="#f00"
          msj={`Error: ${error.status}: ${error.statusText}`}
        />
      )}
      {validations &&
        validations.map((el) => (
          <Message key={el.param} color="#f00" msj={("Error: ", el.msg)} />
        ))}
    </div>
  );
};
export default App;
