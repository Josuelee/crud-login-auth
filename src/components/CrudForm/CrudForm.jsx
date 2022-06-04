import { useContext, useEffect, useState } from "react";
import CrudContext from "../../context/CrudContext";
import insertimage from "../../assets/Group.png";
import "./CrudForm.css";

const initialForm = {
  nombre: "",
  correo: "",
  pass: "",
  rol: "",
};

const CrudForm = () => {
  const { dataToEdit, save, edit, setDataToEdit } = useContext(CrudContext);
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nombre || !form.correo || !form.pass || !form.rol) {
      return alert("Llene todos sus datos");
    }

    if (!form.uid) {
      save(form);
    } else {
      edit(form);
    }

    setForm(initialForm);
    setDataToEdit(null);
  };

  const handleClick = (e) => {
    setForm(initialForm);
  };
  return (
    <div className="crud__form container">
      <div className="crud__form-container">
        <div className="crud__form-img">
          <img src={insertimage} alt="insertimage" />
        </div>
        <div className="crud__form-form">
          <h3>{!form.uid ? "Save" : "Update"}</h3>
          <form onSubmit={handleSubmit} className="crud__form-item">
            <input
              type="text"
              name="nombre"
              id="name"
              onChange={handleChange}
              value={form.nombre}
              placeholder="Name:"
            />
            <input
              type="text"
              name="correo"
              id="email"
              onChange={handleChange}
              value={form.correo}
              placeholder="Email:"
            />
            <input
              type="password"
              name="pass"
              id="pass"
              onChange={handleChange}
              value={form.pass}
              placeholder="Password:"
            />
            <input
              type="text"
              name="rol"
              id="role"
              onChange={handleChange}
              value={form.rol}
              placeholder="Role:"
            />
            <div className="crud__form-input_buttons">
              <input type="submit" value="Send" />
              <input type="button" value="Clean" onClick={handleClick} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CrudForm;
