import React, { useState } from "react";
import "./Table.css";

const Table = ({ data, onEdit, onDelete }) => {
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleEditClick = (index) => {
    setEditingIndex(index);
    onEdit(index);
    alert("plaese edit Your data in field");
  };

  const handleSaveClick = (index) => {
    setEditingIndex(-1);
    alert("Updated Successfully");
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Sr</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>bloodtype</th>
          <th>PinCode</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.fname}</td>
            <td>{item.lname}</td>
            <td>{item.gender}</td>
            <td>{item.bloodtype}</td>
            <td>{item.pincode}</td>
            <td>
              {editingIndex === index ? (
                <button onClick={() => handleSaveClick(index)}>Save</button>
              ) : (
                <button onClick={() => handleEditClick(index)}>Edit</button>
              )}
            </td>
            <td>
              <button
                onClick={() => {
                  onDelete(index);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
          // <ReadOnly key={index} item={item} index={index} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
