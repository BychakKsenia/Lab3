import React, { useState } from "react";

export default function DataTable({ formData }) {
  return (
    <table id="formTable">
      <tr>
        <th>Аватарка</th>
        <th>Логін</th>
        <th>Email</th>
        <th>Стать</th>
        <th>Дата народження</th>
        <th>Про себе</th>
        <th>Новинна розсилка</th>
        <th>Умови конфіденційності</th>
      </tr>
      {formData.map((data, index) => (
        <tr key={index}>

                    <td>
          {data.image && (
    <img src={URL.createObjectURL(data.image)} alt="Avatar" width="50" />
  )}
          </td>
          <td>{data.login}</td>
          <td>{data.email}</td>
          <td>{data.sex === "male" ? "Чоловіча" : "Жіноча"}</td>
          <td>{data.birthday}</td>
          <td>{data.about}</td>
          <td>{data.news ? "Так" : "Ні"}</td>
          <td>{data.confinfo ? "Прийнято" : "Не прийнято"}</td>
        </tr>
      ))}
    </table>
  );
}
