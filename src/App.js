import DataTable from "../components/DataTable";
import MyArray from "../components/MyArray";
import MyForm from "../components/MyForm";
import Rating from "../components/Rating";
import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [formDataArray, setFormDataArray] = useState([]);

  function addFormData(newData) {
    setFormDataArray([...formDataArray, newData]);
  }
  return (
    <div className="App">
      <Rating />
      <MyArray />
      <MyForm addFormData={addFormData} />
      <DataTable formData={formDataArray} />
    </div>
  );
}
