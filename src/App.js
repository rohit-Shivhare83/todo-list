import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";

const App = () => {
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleSubmit = (formData) => {
    if (editIndex === -1) {
      setData([...data, formData]);
    } else {
      const newData = [...data];
      newData[editIndex] = formData;
      setData(newData);
      setEditIndex(-1);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <div className="container">
        <Form
          onSubmit={handleSubmit}
          editData={editIndex !== -1 ? data[editIndex] : null}
        />
        <hr />
        <Table data={data} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default App;
